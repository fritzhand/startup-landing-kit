import { config } from '../../content/landing.config';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { CheckCircle2 } from 'lucide-react';
import { submitWaitlist } from '../../lib/form';
import { useState } from 'react';
import { Input } from '../ui/Input';
import { cn } from '../../lib/utils';

export function Hero() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        const result = await submitWaitlist({ name: "", email }, config.waitlist.provider);
        setStatus({ success: result.success, message: result.message || "Something went wrong" });
        setLoading(false);
        if (result.success) setEmail("");
    };

    return (
        <section className="relative overflow-hidden bg-white pb-16 pt-20 lg:pb-32 lg:pt-32">
            <Container className="relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        {config.hero.headline}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        {config.hero.subheadline}
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:gap-x-6">
                        <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-2 sm:flex-row">
                            <Input
                                placeholder="Enter your email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="h-12"
                            />
                            <Button size="lg" className="h-12" isLoading={loading}>
                                {config.hero.primaryCta}
                            </Button>
                        </form>
                        {config.hero.secondaryCta && (
                            <Button variant="outline" size="lg" className="h-12">
                                {config.hero.secondaryCta}
                            </Button>
                        )}
                    </div>
                    {status && (
                        <p className={cn("mt-4 text-sm font-medium", status.success ? "text-green-600" : "text-red-600")}>
                            {status.message}
                        </p>
                    )}

                    <div className="mt-8 flex justify-center space-x-8 text-sm font-medium text-slate-600">
                        {config.hero.bullets.map((bullet) => (
                            <div key={bullet} className="flex items-center">
                                <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                                {bullet}
                            </div>
                        ))}
                    </div>
                </div>

                {config.hero.image && (
                    <div className="mt-16 flow-root sm:mt-24">
                        <div className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <img
                                src={config.hero.image.src}
                                alt={config.hero.image.alt}
                                className="rounded-md shadow-2xl ring-1 ring-slate-900/10"
                                width={2432}
                                height={1442}
                            />
                        </div>
                    </div>
                )}

                {config.hero.socialProof && (
                    <div className="mt-16 sm:mt-24">
                        <p className="text-center text-sm font-semibold leading-8 text-slate-500">
                            {config.hero.socialProof.heading}
                        </p>
                        <div className="mx-auto mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            {config.hero.socialProof.logos.map((logo) => (
                                <div key={logo.name} className="flex justify-center">
                                    <span className="text-xl font-bold text-gray-400">{logo.name}</span>
                                    {/* <img src={logo.src} alt={logo.name} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" /> */}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </Container>
        </section>
    );
}
