import { FormEvent, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormStatus = "idle" | "sending" | "sent" | "error";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Altitude One" },
      {
        name: "description",
        content:
          "Reach Altitude One by phone or send a message about selling an aircraft or shopping for your first.",
      },
      { property: "og:title", content: "Contact Altitude One" },
      { property: "og:description", content: "Talk to a real person, no pressure." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const payload = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "We could not send your message.");
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not send your message. Please call (801) 917-4049.",
      );
    }
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Say hello
          </span>
          <h1 className="mt-4 font-display text-5xl font-medium leading-tight md:text-6xl text-balance">
            Talk to a real person, no pressure.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you're settling an estate or wondering if you can really afford to fly, we'd
            love to hear from you. Most calls last about ten minutes.
          </p>
          <dl className="mt-12 space-y-6">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Phone</dt>
              <dd className="mt-1 font-display text-3xl">
                <a href="tel:+18019174049" className="transition hover:text-horizon">
                  (801) 917-4049
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                Where to find our listings
              </dt>
              <dd className="mt-1 text-lg text-muted-foreground">
                Barnstormers, Facebook Marketplace, and other aviation sales platforms.
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-sm border border-border bg-card p-8 shadow-soft md:p-10"
        >
          <h2 className="font-display text-2xl">Send a message</h2>
          <p className="mt-4 text-muted-foreground">
            Prefer email first? Send the details here and we'll reply from our inbox.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium">
              Name
              <Input name="name" autoComplete="name" required />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Email
              <Input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Phone
              <Input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Topic
              <Input name="subject" placeholder="Buying, selling, or general question" />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-medium">
            Message
            <Textarea
              name="message"
              className="min-h-36 resize-y"
              placeholder="Tell us what aircraft you are asking about, or what kind of help you need."
              required
            />
          </label>

          <input
            className="hidden"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <Button
            type="submit"
            disabled={status === "sending"}
            className="mt-8 h-12 w-full rounded-full bg-twilight text-base text-cream transition hover:brightness-110"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </Button>

          {status === "sent" ? (
            <p className="mt-4 rounded-sm bg-secondary px-4 py-3 text-sm text-secondary-foreground">
              Your message was sent. We'll get back to you soon.
            </p>
          ) : null}

          {status === "error" ? (
            <p className="mt-4 rounded-sm border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {errorMessage}
            </p>
          ) : null}

          <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
            Hours - Mon-Sat - 8a-7p MT
          </p>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}
