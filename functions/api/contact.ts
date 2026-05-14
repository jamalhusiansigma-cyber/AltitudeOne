type ContactEnv = {
  GMAIL_CLIENT_ID?: string;
  GMAIL_CLIENT_SECRET?: string;
  GMAIL_REFRESH_TOKEN?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
};

type PagesContext = {
  request: Request;
  env: ContactEnv;
};

function jsonResponse(payload: unknown, init?: ResponseInit): Response {
  return new Response(JSON.stringify(payload), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...init?.headers,
    },
  });
}

function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function encodeBase64Url(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = "";

  for (let index = 0; index < bytes.length; index += 1) {
    binary += String.fromCharCode(bytes[index]);
  }

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

async function getGmailAccessToken(env: ContactEnv): Promise<string> {
  const { GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN } = env;

  if (!GMAIL_CLIENT_ID || !GMAIL_CLIENT_SECRET || !GMAIL_REFRESH_TOKEN) {
    throw new Error("Gmail API environment variables are missing.");
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: GMAIL_CLIENT_ID,
      client_secret: GMAIL_CLIENT_SECRET,
      refresh_token: GMAIL_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });

  if (!response.ok) {
    throw new Error(`Gmail token request failed with ${response.status}.`);
  }

  const payload = (await response.json()) as { access_token?: string };
  if (!payload.access_token) {
    throw new Error("Gmail token response did not include an access token.");
  }

  return payload.access_token;
}

export async function onRequestPost({ request, env }: PagesContext): Promise<Response> {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonResponse({ error: "Please fill out the form and try again." }, { status: 400 });
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const subject = String(payload.subject ?? "Website inquiry").trim();
  const message = String(payload.message ?? "").trim();
  const company = String(payload.company ?? "").trim();

  if (company) {
    return jsonResponse({ ok: true });
  }

  if (!name || !email || !message || !isValidEmail(email)) {
    return jsonResponse(
      { error: "Please include your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  const toEmail = env.CONTACT_TO_EMAIL;
  const fromEmail = env.CONTACT_FROM_EMAIL ?? toEmail;

  if (!toEmail || !fromEmail) {
    throw new Error("Contact email environment variables are missing.");
  }

  const accessToken = await getGmailAccessToken(env);
  const safeName = sanitizeHeader(name);
  const safeEmail = sanitizeHeader(email);
  const safeSubject = sanitizeHeader(subject || "Website inquiry");
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : undefined,
    "",
    message,
  ]
    .filter((line) => line !== undefined)
    .join("\n");

  const rawMessage = [
    `From: Altitude One Website <${fromEmail}>`,
    `To: ${toEmail}`,
    `Reply-To: ${safeName} <${safeEmail}>`,
    `Subject: Altitude One: ${safeSubject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "",
    body,
  ].join("\r\n");

  const response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
    method: "POST",
    headers: {
      authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ raw: encodeBase64Url(rawMessage) }),
  });

  if (!response.ok) {
    throw new Error(`Gmail send request failed with ${response.status}.`);
  }

  return jsonResponse({ ok: true });
}

export function onRequestOptions(): Response {
  return new Response(null, { status: 204 });
}

export function onRequest(): Response {
  return jsonResponse({ error: "Method not allowed." }, { status: 405 });
}
