import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'works', 'about', 'services', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Works', href: '#works', id: 'works' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/[0.08] py-2.5 sm:py-3.5 shadow-2xl'
          : 'bg-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f59b] rounded-md"
          aria-label="Ghanesh Homepage"
        >
          <Logo size="sm" className="sm:hidden" />
          <Logo size="md" className="hidden sm:flex" />
        </a>

        <div className="hidden md:flex items-center gap-7">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs uppercase tracking-[0.16em] transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00f59b] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="h-4 w-[1px] bg-white/15" aria-hidden="true" />

          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.07]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f59b] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f59b]" />
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#00f59b] font-medium whitespace-nowrap">
              {PORTFOLIO_DATA.brand.availabilityText}
            </span>
          </div>

          <button
            onClick={onContactClick}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#00f59b] hover:bg-[#15ffaa] px-3.5 py-1.5 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-[0_0_20px_-3px_rgba(0,245,155,0.35)] cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f59b] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00f59b]" />
            </span>
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#00f59b]">
              Available
            </span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-300 hover:text-white rounded-lg bg-white/[0.05] border border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-[#00f59b]"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-white/10 px-5 py-4 transition-all animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-2.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs font-semibold tracking-widest uppercase text-neutral-300 hover:text-[#00f59b] py-2 border-b border-white/[0.05]"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#00f59b] text-black font-semibold uppercase text-xs tracking-wider rounded-lg cursor-pointer"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={PORTFOLIO_DATA.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 text-xs uppercase tracking-wider text-neutral-300 border border-white/15 rounded-lg hover:border-[#00f59b] hover:text-[#00f59b] transition-colors"
              >
                Instagram Profile ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
