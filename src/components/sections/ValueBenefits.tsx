import { config } from '../../content/landing.config';
import { Container } from '../ui/Container';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Check } from 'lucide-react';

export function ValueBenefits() {
    return (
        <section className="py-24 sm:py-32" id="features">
            <Container>
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {config.valueBenefits.heading}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {config.valueBenefits.benefits.map((benefit, idx) => (
                        <Card key={idx} className="border-slate-200 hover:border-primary/20 hover:shadow-md transition-all">
                            <CardHeader>
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <Check className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">{benefit.title}</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
