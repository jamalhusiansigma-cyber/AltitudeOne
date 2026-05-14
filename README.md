# Altitude One

Cloudflare-ready website for Altitude One.

## No-terminal upload

You do not need to run anything on your computer.

1. Unzip `Altitude-One-GitHub-Upload.zip`.
2. Open GitHub and create a new empty repository.
3. Drag everything from the unzipped folder into GitHub's upload page.
4. Commit the uploaded files in GitHub.
5. Open Cloudflare Workers & Pages.
6. Create a new Pages app from GitHub and select that repository.

## Cloudflare settings

Use these settings in the Cloudflare dashboard:

- Framework preset: `Vite`
- Build command: `bun run build`
- Build output directory: `.output/public`
- Root directory: leave blank unless you place this project in a subfolder

Cloudflare runs the build command for you. You do not run it yourself.

If Cloudflare gives a 404, the usual cause is the wrong build output directory. Make sure it is exactly `.output/public`.

## Gmail form setup

The contact form posts to `/api/contact`. The backend sends mail through the Gmail API, which works on Cloudflare because it uses HTTPS instead of Gmail SMTP.

Add these environment variables in Cloudflare:

- `GMAIL_CLIENT_ID`
- `GMAIL_CLIENT_SECRET`
- `GMAIL_REFRESH_TOKEN`
- `CONTACT_TO_EMAIL` - the inbox that receives website messages
- `CONTACT_FROM_EMAIL` - usually the same Gmail address that owns the refresh token

The Gmail account must have a Google OAuth refresh token with the `https://www.googleapis.com/auth/gmail.send` scope. After adding the variables, redeploy the Pages project.
