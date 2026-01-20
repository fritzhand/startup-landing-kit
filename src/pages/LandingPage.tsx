import { Header } from '../components/sections/Header';
import { Hero } from '../components/sections/Hero';
import { SocialProof } from '../components/sections/SocialProof';
import { ProductExplanation } from '../components/sections/ProductExplanation';
import { HowItWorks } from '../components/sections/HowItWorks';
import { ValueBenefits } from '../components/sections/ValueBenefits';
import { Pricing } from '../components/sections/Pricing';
import { FAQ } from '../components/sections/FAQ';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Footer } from '../components/sections/Footer';

export function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Hero />
                <SocialProof />
                <ProductExplanation />
                <HowItWorks />
                <ValueBenefits />
                <Pricing />
                <FAQ />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}
