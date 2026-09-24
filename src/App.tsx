import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { QAShowcase } from './components/sections/QAShowcase';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { Community } from './components/sections/Community';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-charcoal-950 text-warm-100 selection:bg-maroon-700 selection:text-white antialiased font-sans relative">
      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Featured Projects */}
        <Projects />

        {/* 4. Dedicated Quality Assurance Showcase */}
        <QAShowcase />

        {/* 5. Categorized Skills */}
        <Skills />

        {/* 6. Verified Certifications */}
        <Certifications />

        {/* 7. Community & Leadership */}
        <Community />

        {/* 11. Education */}
        <Education />

        {/* 12. Contact & Let's Connect */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
