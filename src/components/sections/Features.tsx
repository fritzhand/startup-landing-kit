import { config } from '../../content/landing.config';
import { Container } from '../ui/Container';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Code, Wind, Mail, Layers, Smartphone, FileText } from 'lucide-react';

const iconMap: Record<string, any> = {
    Code, Wind, Mail, Layers, Smartphone, FileText
};

export function Features() {
    return (
        <section className="bg-slate-50 py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {config.features.heading}
                    </h2>
                    {config.features.subheading && (
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            {config.features.subheading}
                        </p>
                    )}
                </div>

                {/* Feature List */}
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {config.features.list.map((feature) => {
                            const Icon = feature.icon ? iconMap[feature.icon] : Layers;
                            return (
                                <Card key={feature.title} className="border-none shadow-md bg-white">
                                    <CardHeader>
                                        <Icon className="h-8 w-8 text-primary mb-4" />
                                        <h3 className="text-lg font-semibold leading-8 text-slate-900">{feature.title}</h3>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-base leading-7 text-slate-600">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Use Cases */}
                {config.features.useCases && config.features.useCases.length > 0 && (
                    <div className="mt-32">
                        <h3 className="text-2xl font-bold text-center mb-12">Who is this for?</h3>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            {config.features.useCases.map((useCase) => (
                                <div key={useCase.title} className="rounded-lg border bg-white p-6 shadow-sm">
                                    <h4 className="text-lg font-semibold text-slate-900">{useCase.title}</h4>
                                    <p className="mt-2 text-slate-600">{useCase.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
}
