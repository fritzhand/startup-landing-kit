import { env } from "./env";

export const analytics = {
    track: (event: string, properties?: Record<string, any>) => {
        if (!env.ENABLE_ANALYTICS) return;

        // Placeholder for analytics logic (e.g., PostHog, GA4)
        console.log(`[Analytics] ${event}`, properties);
    },
    pageview: (path: string) => {
        if (!env.ENABLE_ANALYTICS) return;
        console.log(`[Analytics] Pageview: ${path}`);
    }
};
