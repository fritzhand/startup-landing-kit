import { config } from '../../content/landing.config';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

export function ProductExplanation() {
    return (
        <section className="py-24 sm:py-32 overflow-hidden">
            <Container>
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {config.productExplanation.heading}
                    </h2>
                    {config.productExplanation.subheading && (
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            {config.productExplanation.subheading}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {config.productExplanation.steps.map((step, idx) => (
                        <div key={idx} className="group relative">
                            <Card className="overflow-hidden border-2 border-slate-100 transition-all hover:border-primary/20 hover:shadow-lg">
                                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                                    <img src={step.image} alt="" className="object-cover w-full h-full" />
                                </div>
                                <div className="p-4 bg-white">
                                    <p className="font-semibold text-slate-900 text-center">{step.caption}</p>
                                </div>
                            </Card>
                            {idx < config.productExplanation.steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-6 w-4 h-0.5 bg-slate-300 -translate-y-1/2 z-10" />
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
