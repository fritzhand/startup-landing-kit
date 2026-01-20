import { config } from '../../content/landing.config';
import { Container } from '../ui/Container';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function AccordionItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-start justify-between py-6 text-left"
            >
                <span className="text-base font-semibold leading-7 text-slate-900">{question}</span>
                <span className="ml-6 flex h-7 items-center">
                    {isOpen ? (
                        <ChevronUp className="h-6 w-6 text-slate-900" aria-hidden="true" />
                    ) : (
                        <ChevronDown className="h-6 w-6 text-slate-900" aria-hidden="true" />
                    )}
                </span>
            </button>
            {isOpen && (
                <div className="pb-6 pr-12">
                    <p className="text-base leading-7 text-slate-600">{answer}</p>
                </div>
            )}
        </div>
    );
}

export function FAQ() {
    return (
        <section className="py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {config.faq.heading}
                    </h2>
                </div>
                <div className="mx-auto mt-16 max-w-2xl divide-y divide-slate-900/10">
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {config.faq.items.map((item) => (
                            <AccordionItem key={item.question} question={item.question} answer={item.answer} />
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    );
}
