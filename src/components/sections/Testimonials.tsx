import { config } from '../../content/landing.config';
import { Container } from '../ui/Container';
import { Card, CardContent } from '../ui/Card';

export function Testimonials() {
    return (
        <section className="bg-slate-50 py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {config.testimonials.heading}
                    </h2>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-3">
                    {config.testimonials.items.map((testimonial) => (
                        <div key={testimonial.author} className="break-inside-avoid">
                            <Card className="bg-white">
                                <CardContent className="p-6">
                                    <blockquote className="text-slate-900">
                                        <p>“{testimonial.quote}”</p>
                                    </blockquote>
                                    <div className="mt-6 flex items-center gap-x-4">
                                        {testimonial.avatar ? (
                                            <img className="h-10 w-10 rounded-full bg-slate-50" src={testimonial.avatar} alt="" />
                                        ) : (
                                            <div className="h-10 w-10 rounded-full bg-slate-200" />
                                        )}
                                        <div>
                                            <div className="font-semibold">{testimonial.author}</div>
                                            <div className="text-slate-600">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
