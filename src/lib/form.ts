import { env } from "./env";

export type WaitlistProvider = "mock" | "sheets" | "resend";

export interface WaitlistData {
    name?: string;
    email: string;
    role?: string;
}

const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export async function submitWaitlist(data: WaitlistData, provider: WaitlistProvider = "mock"): Promise<{ success: boolean; message?: string }> {
    if (!data.email || !validateEmail(data.email)) {
        return { success: false, message: "Please enter a valid email address." };
    }

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
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

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
