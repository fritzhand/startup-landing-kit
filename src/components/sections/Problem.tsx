import { config } from '../../content/landing.config';
import { Container } from '../ui/Container';
import { Clock, LayoutTemplate, Zap, Shield, TrendingUp, Users } from 'lucide-react';

const iconMap: Record<string, any> = {
    Clock, LayoutTemplate, Zap, Shield, TrendingUp, Users
};

export function Problem() {
    return (
        <section className="bg-slate-50 py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {config.problem.heading}
                    </h2>
                    {config.problem.subheading && (
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            {config.problem.subheading}
                        </p>
                    )}
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {config.problem.points.map((point) => {
                            const Icon = iconMap[point.icon] || Zap;
                            return (
                                <div key={point.title} className="flex flex-col">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                                        <Icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                        {point.title}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                                        <p className="flex-auto">{point.description}</p>
                                    </dd>
                                </div>
                            );
                        })}
                    </dl>
                </div>
            </Container>
        </section>
    );
}
