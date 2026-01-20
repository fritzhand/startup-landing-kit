import { env } from "./env";

export type WaitlistProvider = "mock" | "sheets" | "resend";

export interface WaitlistData {
    name: string;
    email: string;
    role?: string;
}

export async function submitWaitlist(data: WaitlistData, provider: WaitlistProvider = "mock"): Promise<{ success: boolean; message?: string }> {
    try {
        if (provider === "mock") {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("[Mock Waitlist Submission]", data);
            return { success: true, message: "Thanks for joining the waitlist! (Mock)" };
        }

        if (provider === "sheets") {
            if (!env.GOOGLE_SHEETS_WEBHOOK_URL) {
                throw new Error("Google Sheets Webhook URL is not configured.");
            }

            await fetch(env.GOOGLE_SHEETS_WEBHOOK_URL, {
                method: "POST",
                mode: "no-cors", // Google Forms/Sheets webhooks often require no-cors
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // With no-cors, we can't check response.ok. We assume success if no network error.
            return { success: true, message: "You're on the list!" };
        }

        if (provider === "resend") {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit to waitlist.");
            }

            return { success: true, message: "Check your email for confirmation!" };
        }

        return { success: false, message: "Invalid provider configured." };
    } catch (error) {
        console.error("Waitlist error:", error);
        return { success: false, message: "Something went wrong. Please try again." };
    }
}
