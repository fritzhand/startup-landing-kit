import { config } from '../../content/landing.config';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';
import { Card } from '../ui/Card';

export function Pricing() {
    if (!config.pricing) return null;

    return (
        <section className="py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {config.pricing.heading}
                    </h2>
                    {config.pricing.subheading && (
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            {config.pricing.subheading}
                        </p>
                    )}
                </div>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-1">
                    {config.pricing.plans.map((plan) => (
                        <Card key={plan.name} className="flex flex-col justify-between border-2 border-primary/10 bg-white p-8 ring-1 ring-primary/10 xl:p-10">
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3 className="text-lg font-semibold leading-8 text-slate-900">{plan.name}</h3>
                                    {plan.popular && (
                                        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">Most popular</span>
                                    )}
                                </div>
                                <p className="mt-4 text-sm leading-6 text-slate-600">{plan.description}</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-slate-900">{plan.price}</span>
                                </p>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Button className="mt-8 w-full" variant={plan.popular ? 'primary' : 'outline'}>
                                {plan.cta}
                            </Button>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
