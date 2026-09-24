import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'V-Mas', href: '#vmas' },
  { label: 'QA', href: '#qa' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-950/85 backdrop-blur-md border-b border-maroon-900/50 shadow-maroon-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-maroon-800 to-plum-dark flex items-center justify-center border border-maroon-600/50 shadow-maroon-sm group-hover:border-rose-dusty/80 transition-all duration-300">
            <span className="font-serif font-bold text-lg text-warm-50 group-hover:scale-105 transition-transform">
              W
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base md:text-lg tracking-wide text-warm-50 group-hover:text-rose-soft transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono tracking-wider uppercase text-rose-soft/70">
              Information Systems
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-charcoal-900/60 p-1.5 rounded-full border border-maroon-900/40 backdrop-blur-sm shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-maroon-900 to-maroon-800 text-warm-50 shadow-maroon-sm border border-maroon-600/60'
                    : 'text-warm-300/80 hover:text-white hover:bg-maroon-950/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.cvPath}
            download="Wathmini-Ayesha-CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase bg-maroon-900/60 hover:bg-maroon-800 text-rose-soft hover:text-white border border-maroon-700/60 hover:border-rose-dusty/80 shadow-maroon-sm transition-all duration-300 hover:shadow-maroon"
          >
            <FileDown className="w-3.5 h-3.5 text-rose-dusty" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-charcoal-900/80 border border-maroon-800/60 text-warm-200 hover:text-white hover:bg-maroon-900/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-charcoal-900/95 border-b border-maroon-800/70 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'bg-maroon-800 text-white font-semibold border border-maroon-600'
                      : 'text-warm-300 hover:bg-maroon-950/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-maroon-900/60 flex flex-col gap-2">
            <a
              href={personalInfo.cvPath}
              download="Wathmini-Ayesha-CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-maroon-900 to-maroon-800 text-white border border-maroon-600 shadow-maroon-sm"
            >
              <FileDown className="w-4 h-4 text-rose-dusty" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
