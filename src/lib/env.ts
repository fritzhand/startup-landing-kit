export const env = {
    // Option A: Google Sheets
    GOOGLE_SHEETS_WEBHOOK_URL: import.meta.env.VITE_SHEETS_WEBHOOK_URL,

    // Option B: Resend (Server-side ONLY. Do not expose on client unless using a proxied endpoint)
    // These should NOT be responsible for client-side rendering, but included here for reference if moved to a server environment.
    // We don't expose them here to prevent accidental client bundles.

    // Feature Flags
    ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
};
