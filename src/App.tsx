import { LandingPage } from './pages/LandingPage';
import { config } from './content/landing.config';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = config.meta.title;
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

  return <LandingPage />;
}

export default App;
