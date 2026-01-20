import { config } from '../../content/landing.config';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Plug, Settings, Coffee, Zap } from 'lucide-react';

const icons: Record<string, any> = { Plug, Settings, Coffee, Zap };

export function HowItWorks() {
    return (
        <section className="py-24 sm:py-32 bg-slate-50" id="how-it-works">
            <Container>
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {config.howItWorks.heading}
                    </h2>
                    {config.howItWorks.subheading && (
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            {config.howItWorks.subheading}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent border-t border-dashed border-slate-300 z-0"></div>

                    {config.howItWorks.steps.map((step, idx) => {
                        const Icon = step.icon ? icons[step.icon] : Zap;
                        return (
                            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                                <div className="h-24 w-24 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 relative group transition-transform hover:-translate-y-1">
                                    <Badge className="absolute -top-3 -right-3 h-8 w-8 rounded-full flex items-center justify-center p-0 text-sm">
                                        {idx + 1}
                                    </Badge>
                                    <Icon className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed px-4">{step.description}</p>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    );
}
