import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { submitWaitlist } from '../lib/form';
import { config } from '../content/landing.config';
import { cn } from '../lib/utils';


interface WaitlistFormProps {
    className?: string;
    variant?: "hero" | "footer";
}

export function WaitlistForm({ className, variant = "hero" }: WaitlistFormProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const result = await submitWaitlist({ email }, config.waitlist.provider);
        setStatus({ success: result.success, message: result.message || "" });
        setLoading(false);
        if (result.success) setEmail("");
    };

    return (
        <div className={cn("w-full max-w-sm", className)}>
            <form onSubmit={handleSubmit} className={cn("flex flex-col gap-2", variant === "hero" ? "sm:flex-row" : "flex-col")}>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 bg-white"
                />
                <Button type="submit" size="lg" className="h-12 cursor-pointer" isLoading={loading}>
                    {config.finalCta.primaryCta}
                </Button>
            </form>
            {status && (
                <p className={cn("mt-2 text-sm", status.success ? "text-green-600" : "text-red-600")}>
                    {status.message}
                </p>
            )}
        </div>
    );
}
