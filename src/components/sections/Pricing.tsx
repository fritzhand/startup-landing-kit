import { config } from '../../content/landing.config';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Toggle } from '../ui/Toggle';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';

export function Pricing() {
    const [annual, setAnnual] = useState(false);

    if (!config.pricing) return null;

    return (
        <section className="py-24 sm:py-32" id="pricing">
            <Container>
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {config.pricing.heading}
                    </h2>
                    {config.pricing.subheading && (
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            {config.pricing.subheading}
                        </p>
                    )}

                    {config.pricing.annualToggle && (
                        <div className="mt-8 flex justify-center">
                            <Toggle
                                enabled={annual}
                                setEnabled={setAnnual}
                                labelLeft="Monthly"
                                labelRight="Annual (Save 20%)"
                            />
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8 bg">
                    {config.pricing.plans.map((plan) => (
                        <Card key={plan.name} className={cn(
                            "flex flex-col p-8 relative rounded-2xl",
                            plan.popular ? "border-2 border-primary shadow-xl scale-105 z-10 bg-white" : "border border-slate-200 bg-white/50"
                        )}>
                            {plan.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </span>
                            )}

                            <h3 className="text-lg font-semibold leading-8 text-slate-900">{plan.name}</h3>
                            <p className="mt-4 text-sm leading-6 text-slate-600 min-h-[48px]">{plan.description}</p>

                            <div className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-slate-900">{plan.price}</span>
                                {/* Logic for annual price calculation could go here if schema supported it, for now using string from config */}
                            </div>

                            <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-600 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button variant={plan.popular ? "primary" : "outline"} className="mt-8 w-full">
                                {plan.cta}
                            </Button>
                        </Card>
                    ))}
                </div>

                <p className="text-center text-sm text-slate-500 mt-12">
                    No credit card required. Cancel anytime.
                </p>
            </Container>
        </section>
    );
}
