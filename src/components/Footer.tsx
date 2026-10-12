import React from 'react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { Logo } from './Logo';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          <div className="flex flex-col gap-2">
            <Logo size="lg" />
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono mt-1">
              {PORTFOLIO_DATA.footer.subtitle}
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
            {PORTFOLIO_DATA.footer.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-xs uppercase tracking-[0.18em] text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group"
              >
                <span>{link.name}</span>
                {link.external && (
                  <ArrowUpRight className="w-3 h-3 text-[#00f59b] opacity-75 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                )}
              </a>
            ))}
          </nav>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-300 hover:text-white text-xs font-mono transition-all group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00f59b] transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>{PORTFOLIO_DATA.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a
              href={PORTFOLIO_DATA.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00f59b] transition-colors"
            >
              Instagram @whoghanesh
            </a>
            <span>•</span>
            <span className="text-[#00f59b] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b]" />
              Available Worldwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
