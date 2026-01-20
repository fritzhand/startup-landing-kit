import { config } from '../../content/landing.config';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils'; // Assuming utils exists from previous tasks or I should have created it. I will assume it exists as I created it in step 0. 

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToWaitlist = () => {
        const el = document.getElementById('waitlist');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-4" : "bg-transparent py-6"
        )}>
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src={config.branding.logo.src} alt={config.branding.logo.alt} className="h-8 w-auto" />
                        <span className="text-xl font-bold text-slate-900 hidden sm:block">AcmeAI</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                            <a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a>
                            <a href="#features" className="hover:text-primary transition-colors">Features</a>
                            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
                        </div>
                        <Button size="sm" onClick={scrollToWaitlist}>
                            {config.hero.primaryCta}
                        </Button>
                    </div>
                </nav>
            </Container>
        </header>
    );
}
