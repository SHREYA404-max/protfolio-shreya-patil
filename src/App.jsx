import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy-load Credentials & Achievements (heavy below-the-fold sections per PRD)
const Credentials = lazy(() => import('./components/Credentials'));
const Achievements = lazy(() => import('./components/Achievements'));

function CredentialsFallback() {
  return (
    <section className="section" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center', color: 'var(--color-muted)' }}>
        Loading education and achievements...
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<CredentialsFallback />}>
          <Credentials />
          <Achievements />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
