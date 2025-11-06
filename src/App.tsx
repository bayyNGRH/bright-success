import { LanguageProvider } from './contexts/LanguageContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-950">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
