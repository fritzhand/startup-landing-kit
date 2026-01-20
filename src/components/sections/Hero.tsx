import { config } from '../../content/landing.config';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Play, TrendingUp } from 'lucide-react';
import { WaitlistForm } from '../WaitlistForm';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white pb-16 pt-32 lg:pb-32 lg:pt-48">
            <Container className="relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    {config.hero.trust?.metric && (
                        <div className="mb-8 flex justify-center">
                            <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary flex items-center gap-2">
                                <TrendingUp className="h-4 w-4" />
                                <span className="font-bold">{config.hero.trust.metric.value}</span> {config.hero.trust.metric.label}
                            </div>
                        </div>
                    )}

                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        {config.hero.headline}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        {config.hero.subheadline}
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:gap-x-6" id="waitlist">
                        <WaitlistForm variant="hero" />
                        {config.hero.secondaryCta && (
                            <div className="flex items-center gap-2 mt-4 sm:mt-0">
                                <span className="text-slate-300 hidden sm:inline">|</span>
                                <Button variant="ghost" className="gap-2 text-slate-600 hover:text-primary">
                                    <Play className="h-4 w-4" />
                                    {config.hero.secondaryCta}
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                {config.hero.image && (
                    <div className="mt-16 flow-root sm:mt-24">
                        <div className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <img
                                src={config.hero.image.src}
                                alt={config.hero.image.alt}
                                className="rounded-md shadow-2xl ring-1 ring-slate-900/10 w-full"
                            />
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
}
