import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { Features } from './components/sections/Features';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
import { config } from './content/landing.config';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = config.meta.title;
    // Set meta description manually or via react-helmet (skipping helmet for dependency minimalism)
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', config.meta.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = config.meta.description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-primary/20 selection:text-primary">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
