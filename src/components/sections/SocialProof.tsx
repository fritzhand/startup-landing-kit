import { config } from '../../content/landing.config';
import { Container } from '../ui/Container';

export function SocialProof() {
    if (!config.socialProof) return null;

    return (
        <section className="py-12 border-y border-slate-100 bg-slate-50/50">
            <Container>
                {/* Priority 1: Logos */}
                {config.socialProof.logos && config.socialProof.logos.length > 0 && (
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {config.socialProof.logos.map((logo) => (
                            <div key={logo.name} className="flex items-center gap-2">
                                {/* Replace with real img tags in production when srcs are valid */}
                                <div className="h-8 w-24 bg-slate-300 rounded animate-pulse" title={logo.name}></div>
                                <span className="sr-only">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Priority 2: Metric (if no logos, or as supplement) - simplified logic: render if exists */}
                {/* Priority 3: Testimonials are handled in a separate section usually, but if small snippet needed here: */}
            </Container>
        </section>
    );
}
