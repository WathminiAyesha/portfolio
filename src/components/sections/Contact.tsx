import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, FileDown, Sparkles, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { personalInfo } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-charcoal-900/60 border-t border-maroon-900/40">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-maroon-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="Get in Touch"
          title="Let's Connect"
          subtitle="Whether it's an internship opportunity, a project, a technical discussion, or simply a chance to connect, I'd be happy to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Left: Contact Channels & CV */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-charcoal-850 border border-maroon-800/60 space-y-6 shadow-maroon-sm">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-warm-50 font-serif">
                  Reach Out Directly
                </h4>
                <p className="text-xs sm:text-sm text-rose-soft/80 font-sans leading-relaxed">
                  I actively monitor messages regarding software testing, quality assurance roles, collaborative projects, and academic inquiries.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3.5">
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-charcoal-900/80 border border-maroon-900/80 hover:border-maroon-700 hover:bg-charcoal-900 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-maroon-900/60 border border-maroon-700 group-hover:bg-maroon-800 transition-colors">
                    <Mail className="w-4 h-4 text-rose-soft" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-rose-soft/60 block uppercase">Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-warm-100 truncate block group-hover:text-rose-soft transition-colors">
                      {personalInfo.socials.email}
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-charcoal-900/80 border border-maroon-900/80 hover:border-maroon-700 hover:bg-charcoal-900 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-maroon-900/60 border border-maroon-700 group-hover:bg-maroon-800 transition-colors">
                    <Linkedin className="w-4 h-4 text-rose-soft" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-rose-soft/60 block uppercase">LinkedIn</span>
                    <span className="text-xs sm:text-sm font-semibold text-warm-100 group-hover:text-rose-soft transition-colors">
                      linkedin.com/in/wathmini-ayesha
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-charcoal-900/80 border border-maroon-900/80 hover:border-maroon-700 hover:bg-charcoal-900 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-maroon-900/60 border border-maroon-700 group-hover:bg-maroon-800 transition-colors">
                    <Github className="w-4 h-4 text-rose-soft" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-rose-soft/60 block uppercase">GitHub</span>
                    <span className="text-xs sm:text-sm font-semibold text-warm-100 group-hover:text-rose-soft transition-colors">
                      github.com/wathmini-ayesha
                    </span>
                  </div>
                </a>
              </div>

              {/* Location Tag */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-rose-soft/70">
                <MapPin className="w-3.5 h-3.5 text-rose-dusty" />
                <span>{personalInfo.university}, Sri Lanka</span>
              </div>
            </div>

            {/* CV Download Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-maroon-950 via-charcoal-850 to-charcoal-900 border border-maroon-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h5 className="text-sm font-bold text-warm-50 font-serif">Curriculum Vitae</h5>
                <p className="text-xs text-rose-soft/70 font-sans">Official resume & academic credentials</p>
              </div>
              <a
                href={personalInfo.cvPath}
                download="Wathmini-Ayesha-CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-maroon-800 hover:bg-maroon-700 text-white border border-maroon-600 shadow-maroon-sm transition-all"
              >
                <FileDown className="w-4 h-4 text-rose-dusty" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-charcoal-850 border border-maroon-800/60 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-maroon-900/60">
                <h4 className="text-lg font-bold text-warm-50 font-serif flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-rose-dusty" />
                  <span>Send a Message</span>
                </h4>
                <span className="text-[11px] font-mono text-rose-soft/60">* Direct notification</span>
              </div>

              {formSubmitted ? (
                <div className="py-12 px-6 text-center space-y-4 rounded-2xl bg-charcoal-900 border border-maroon-700/60 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-maroon-900/60 border border-rose-dusty flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6 text-rose-soft" />
                  </div>
                  <h5 className="text-lg font-bold text-warm-50 font-serif">Thank you for reaching out!</h5>
                  <p className="text-xs sm:text-sm text-rose-soft/80 font-sans max-w-sm mx-auto">
                    Your message placeholder has been recorded. For urgent opportunities, please email directly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-maroon-800 text-white border border-maroon-600 hover:bg-maroon-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-rose-soft/80 block">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Alex Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-charcoal-900 border border-maroon-900/80 text-warm-100 text-xs sm:text-sm focus:outline-none focus:border-rose-dusty transition-colors placeholder:text-rose-soft/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-rose-soft/80 block">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-charcoal-900 border border-maroon-900/80 text-warm-100 text-xs sm:text-sm focus:outline-none focus:border-rose-dusty transition-colors placeholder:text-rose-soft/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-rose-soft/80 block">Subject / Topic</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., QA Internship Inquiry / Technical Discussion"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-charcoal-900 border border-maroon-900/80 text-warm-100 text-xs sm:text-sm focus:outline-none focus:border-rose-dusty transition-colors placeholder:text-rose-soft/30"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-rose-soft/80 block">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your note, feedback, or opportunity details here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-charcoal-900 border border-maroon-900/80 text-warm-100 text-xs sm:text-sm focus:outline-none focus:border-rose-dusty transition-colors placeholder:text-rose-soft/30 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs sm:text-sm tracking-wide bg-gradient-to-r from-maroon-900 via-maroon-800 to-wine text-white border border-maroon-600 shadow-maroon hover:shadow-maroon-lg transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Submit Message</span>
                    <Send className="w-4 h-4 text-rose-soft" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
