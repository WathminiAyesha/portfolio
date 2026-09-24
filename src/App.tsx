import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Journey } from './components/sections/Journey';
import { ProjectVMas } from './components/sections/ProjectVMas';
import { ProjectTechStack } from './components/sections/ProjectTechStack';
import { ProjectGallery } from './components/sections/ProjectGallery';
import { QAShowcase } from './components/sections/QAShowcase';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { Experience } from './components/sections/Experience';
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

        {/* 3. My Journey */}
        <Journey />

        {/* 4. Featured Project: V-Mas Showcase */}
        <ProjectVMas />

        {/* 5. V-Mas Technology Visualization */}
        <ProjectTechStack />

        {/* 6. V-Mas Application Screenshot Gallery */}
        <ProjectGallery />

        {/* 7. Dedicated Quality Assurance Showcase */}
        <QAShowcase />

        {/* 8. Categorized Skills */}
        <Skills />

        {/* 9. Verified Certifications */}
        <Certifications />

        {/* 10. Beyond the Classroom: Experience & Volunteering */}
        <Experience />

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
