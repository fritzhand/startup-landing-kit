import { config } from '../../content/landing.config';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';

export function Solution() {
    return (
        <section className="py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {config.solution.heading}
                    </h2>
                    {config.solution.subheading && (
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            {config.solution.subheading}
                        </p>
                    )}
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="space-y-24">
                        {config.solution.steps.map((step, index) => (
                            <div key={step.title} className={`flex flex-col gap-10 lg:flex-row lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="flex-1">
                                    <Badge variant="secondary" className="mb-4">Step {index + 1}</Badge>
                                    <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                                        {step.title}
                                    </h3>
                                    <p className="mt-6 text-lg leading-8 text-slate-600">
                                        {step.description}
                                    </p>
                                </div>
                                {step.image && (
                                    <div className="flex-1">
                                        <div className="relative overflow-hidden rounded-xl bg-slate-900/5 shadow-xl ring-1 ring-slate-900/10">
                                            <img src={step.image} alt={step.title} className="w-full" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
