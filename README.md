# Startup Landing Kit

A clean, high-performance, open-source landing page kit for startups. Built with **React**, **Vite**, and **Tailwind CSS**.

![Hero Placeholder](/placeholders/product-shot.png)

## Why use this?
- 🚀 **Ready to ship**: Clone, configure, and deploy in minutes.
- 🎨 **Easy customization**: Type-safe config file controls all content and styles.
- 📱 **Mobile-first**: Responsive design that looks great on all devices.
- ⚡ **High Conversion**: Designed with outcome-driven UX principles.
- 🔒 **Privacy-focused**: No tracking scripts by default.
- 📧 **Waitlist ready**: Built-in support for Google Sheets or Resend.

## Quick Start

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/startup-landing-kit.git
   cd startup-landing-kit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Customize Content**
   Edit `src/content/landing.config.ts` to update your copy, links, and branding.

## Configuration

The entire site is powered by `src/content/landing.config.ts`. You can change:
- **Branding**: Logo, colors.
- **Hero**: Headline, CTA, images.
- **Features**: List of features and use cases.
- **Pricing**: Plans and tiers.
- **Waitlist**: Choose your provider.

## Waitlist Integration

We support two methods for handling waitlist signups:

### Option A: Google Sheets (No Backend)
Perfect for MVP validation.
1. Create a Google Sheet.
2. Create an Apps Script to accept POST requests and append rows.
3. Set `waitlist.provider = "sheets"` in config.
4. Add `VITE_SHEETS_WEBHOOK_URL` to your `.env` (see `.env.example`).

### Option B: Resend (Email API)
For sending confirmation emails.
1. Requires a serverless function (e.g., Vercel API Routes).
2. Set `waitlist.provider = "resend"` in config.
3. Implement the backend route at `/api/waitlist`.

## Deployment

### Vercel
1. Push your code to GitHub.
2. Import the project in Vercel.
3. It will automatically detect Vite.
4. Add your Environment Variables.
5. Deploy!

### Netlify
1. Drag and drop your `dist` folder, or connect to GitHub.
2. Build command: `npm run build`
3. Publish directory: `dist`

## License
MIT © 2026 VentureStudio, Ahmedabad University
