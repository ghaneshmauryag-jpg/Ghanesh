import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { Instagram, Mail, ArrowUpRight, Copy, Check, Send, Globe, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'MOTION DESIGN',
    budget: '$500 - $2,000',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Ghanesh,\n\nMy name is ${formData.name} (${formData.email}).\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budget}\n\nProject Details:\n${formData.message}\n\nLooking forward to hearing from you!`
      );
      window.location.href = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${subject}&body=${body}`;
    }, 900);
  };

  return (
    <section id="contact" className="relative py-8 sm:py-12 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[300px] sm:h-[450px] bg-[#00f59b]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#00f59b] font-medium">
              START A CONVERSATION
            </span>
          </div>

          <h2 className="font-['Syne',sans-serif] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
            {PORTFOLIO_DATA.contact.ctaHeading}
          </h2>

          <p className="mt-3 sm:mt-4 text-neutral-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            {PORTFOLIO_DATA.contact.ctaDescription}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={PORTFOLIO_DATA.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#00f59b] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#15ffaa] transition-all hover:shadow-[0_0_35px_rgba(0,245,155,0.45)] hover:-translate-y-0.5 cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>INSTAGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-xs uppercase tracking-widest border border-white/15 hover:border-[#00f59b]/50 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#00f59b]" />
              <span>{copiedEmail ? 'EMAIL COPIED!' : 'CONTACT ME'}</span>
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#00f59b]" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#090a0b] border border-white/[0.08]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#00f59b] block mb-1.5">
                DIRECT CHANNELS
              </span>
              <h3 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Fast Response Time
              </h3>

              <div className="space-y-3.5">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-neutral-400 block mb-1">Direct Email</span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#00f59b] transition-colors truncate"
                    >
                      {PORTFOLIO_DATA.contact.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                      title="Copy Email Address"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#00f59b]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-neutral-400 block mb-1">Instagram Direct Message</span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {PORTFOLIO_DATA.contact.instagramHandle}
                    </span>
                    <a
                      href={PORTFOLIO_DATA.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#00f59b] hover:underline font-mono"
                    >
                      <span>Open DM</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-[#00f59b]" />
                    <span>{PORTFOLIO_DATA.contact.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#00f59b]" />
                    <span>{PORTFOLIO_DATA.contact.turnaroundTime}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-[#00f59b]" />
                <span>Currently scheduling new edits &amp; reels</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-[#090a0b] border border-white/[0.08]">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#00f59b] block mb-1.5">
              PROJECT BRIEF
            </span>
            <h3 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              Send a Quick Message
            </h3>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#00f59b]/10 border border-[#00f59b]/30 text-center animate-in fade-in">
                <div className="w-10 h-10 rounded-full bg-[#00f59b]/20 text-[#00f59b] flex items-center justify-center mx-auto mb-2.5">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-base">Inquiry Prepared!</h4>
                <p className="text-neutral-300 text-xs sm:text-sm mt-1.5 max-w-sm mx-auto">
                  Your email client has opened with your message to{' '}
                  <span className="text-[#00f59b] font-mono">{PORTFOLIO_DATA.contact.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white uppercase tracking-wider font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-xs sm:text-sm focus:outline-none focus:border-[#00f59b] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-xs sm:text-sm focus:outline-none focus:border-[#00f59b] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090a0b] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#00f59b] transition-colors"
                    >
                      <option value="MOTION DESIGN">01. MOTION DESIGN</option>
                      <option value="INFOGRAPHIC REEL">02. INFOGRAPHIC REELS</option>
                      <option value="COMMERCIAL HOOK REEL">03. COMMERCIAL HOOK REELS</option>
                      <option value="RAW VS EDIT">04. RAW VS EDIT REEL</option>
                      <option value="CUSTOM EDITING">CUSTOM EDITING</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090a0b] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#00f59b] transition-colors"
                    >
                      <option value="Under $500">Under $500</option>
                      <option value="$500 - $2,000">$500 - $2,000</option>
                      <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                      <option value="$5,000+">$5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    Project Vision / Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell me about your video footage, references, timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-xs sm:text-sm focus:outline-none focus:border-[#00f59b] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-[#00f59b] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#15ffaa] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,155,0.3)] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Opening mail client...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
