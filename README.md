# Digital Envisioned Funnel

This is a fully functional Next.js lead capture funnel with Resend email integration.

## Project Structure

```
/pages
   /api
      lead.js       <- API route to send emails via Resend
   index.js         <- Funnel landing page
/package.json
/next.config.js
/README.md
```

## Setup

1. Clone this repository or upload to GitHub.

2. On Vercel, create a project from this repo.

3. Add Environment Variable in Vercel:
   - Key: `RESEND_API_KEY`
   - Value: your Resend API key (`re_...`)

4. Deploy the project. The form is now live and will send emails to `jnworkflow@gmail.com`.

## Usage

- Go to `/` page: landing funnel.
- Enter Name + Email → Click "Send Me The Free Preview".
- Emails are sent via Resend API.

## Notes

- Ensure your sender domain is verified in Resend.
- No further code edits required.
