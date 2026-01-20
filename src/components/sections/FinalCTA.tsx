import { config } from '../../content/landing.config';
import { Container } from '../ui/Container';
import { WaitlistForm } from '../WaitlistForm';

export function FinalCTA() {
    return (
        <section className="py-24 sm:py-32 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

            <Container className="relative z-10">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {config.finalCta.heading}
                    </h2>
                    {config.finalCta.subheading && (
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            {config.finalCta.subheading}
                        </p>
                    )}

                    <div className="mt-10 flex flex-col items-center">
                        <WaitlistForm variant="footer" className="w-full max-w-sm" />
                        {config.finalCta.trustSnippet && (
                            <p className="mt-4 text-sm text-slate-400">
                                {config.finalCta.trustSnippet}
                            </p>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
