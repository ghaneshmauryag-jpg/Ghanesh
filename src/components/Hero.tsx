import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { ArrowRight, Mail, Play, Instagram } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onViewWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onViewWorkClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative pt-16 sm:pt-20 pb-3 sm:pb-6 flex flex-col justify-between overflow-hidden bg-[#050505]">
      {/* Background Ambient Lighting & Glows (Contained) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] h-[320px] sm:h-[450px] bg-[#00f59b]/[0.08] rounded-full blur-[80px] sm:blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute inset-0 bg-grain opacity-25" />
      </div>

      {/* Main Hero Stage */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center justify-center text-center">
        
        {/* Top Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-2 sm:mb-3 hover:border-[#00f59b]/40 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f59b] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f59b]" />
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#00f59b] font-medium">
            {PORTFOLIO_DATA.hero.statusBadge}
          </span>
        </div>

        {/* Responsive Main Heading */}
        <div className="relative mb-2 sm:mb-3 max-w-5xl">
          <h1 className="font-['Syne',sans-serif] text-3xl sm:text-5xl md:text-6xl lg:text-[5.25rem] font-bold tracking-tight text-white leading-[1.02] sm:leading-[0.98] select-none text-balance">
            <span className="block drop-shadow-sm">
              {PORTFOLIO_DATA.hero.headingLine1}
            </span>
            <span className="block bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
              {PORTFOLIO_DATA.hero.headingLine2}
            </span>
          </h1>
        </div>

        {/* Centerpiece: Cinematic Portrait with Atmospheric Glow */}
        <div className="relative my-1.5 sm:my-2 w-full max-w-xs sm:max-w-md flex justify-center items-center">
          <div className="absolute w-44 h-44 sm:w-64 sm:h-64 rounded-full bg-[#00f59b]/25 blur-[50px] sm:blur-[70px] animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />

          <div className="relative z-10 w-40 sm:w-56 md:w-64 aspect-square rounded-2xl overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-neutral-900" />

            {!imageError ? (
              <img
                src={PORTFOLIO_DATA.hero.profilePhoto}
                alt={PORTFOLIO_DATA.hero.altText}
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover object-top transition-all duration-700 filter contrast-[1.08] brightness-[0.98] group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ) : null}

            {imageError && (
              <div className="w-full h-full flex flex-col items-center justify-center p-3 bg-gradient-to-b from-neutral-900 to-neutral-950 text-center border border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/30 flex items-center justify-center mb-1">
                  <Play className="w-4 h-4 text-[#00f59b] ml-0.5" />
                </div>
                <p className="text-white font-semibold text-xs">Ghanesh</p>
                <p className="text-neutral-400 text-[10px]">Video Editor &amp; Visual Designer</p>
              </div>
            )}

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]" />
            <div className="absolute inset-0 pointer-events-none border border-white/[0.08] rounded-2xl" />

            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between px-2 py-0.5 rounded-lg bg-[#050505]/80 backdrop-blur-md border border-white/10 text-[10px]">
              <span className="text-neutral-300 font-medium text-[9px] tracking-wide">Ghanesh &bull; Portfolio</span>
              <span className="text-[#00f59b] font-mono text-[8px] tracking-wider uppercase font-semibold">Pro Suite</span>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <p className="mt-2.5 sm:mt-3 text-neutral-300 text-xs sm:text-sm md:text-base max-w-md font-normal leading-relaxed text-balance px-2">
          {PORTFOLIO_DATA.hero.description}
        </p>

        {/* Two Call-to-Action Buttons */}
        <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <button
            onClick={onViewWorkClick}
            className="group relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#00f59b] text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-[#15ffaa] hover:shadow-[0_0_25px_rgba(0,245,155,0.45)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-lg bg-black text-[#00f59b] transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-3 h-3" />
            </span>
            <span>{PORTFOLIO_DATA.hero.primaryCtaText}</span>
          </button>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-xs uppercase tracking-widest border border-white/15 hover:border-[#00f59b]/50 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer backdrop-blur-sm"
          >
            <Mail className="w-3.5 h-3.5 text-[#00f59b]" />
            <span>{PORTFOLIO_DATA.hero.secondaryCtaText}</span>
          </button>
        </div>

        {/* Social Link Quick Pill */}
        <div className="mt-3 flex items-center gap-2 text-[11px] text-neutral-400">
          <span className="text-neutral-500">Instagram:</span>
          <a
            href={PORTFOLIO_DATA.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-[#00f59b] transition-colors font-mono"
          >
            <Instagram className="w-3 h-3 text-[#00f59b]" />
            <span>{PORTFOLIO_DATA.contact.instagramHandle}</span>
            <span className="text-neutral-600">↗</span>
          </a>
        </div>
      </div>

      {/* Scrolling / Marquee Text Section (Clean & Compact) */}
      <div className="relative z-10 w-full mt-4 sm:mt-6 border-y border-white/[0.07] bg-[#070707]/90 backdrop-blur-md py-2.5 sm:py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...PORTFOLIO_DATA.hero.marqueeWords, ...PORTFOLIO_DATA.hero.marqueeWords].map((word, idx) => (
            <div key={idx} className="flex items-center mx-4 sm:mx-6">
              <span className="font-['Syne',sans-serif] text-xs uppercase tracking-[0.22em] text-neutral-400 font-semibold hover:text-[#00f59b] transition-colors select-none">
                {word}
              </span>
              <span className="ml-4 sm:ml-6 text-[#00f59b] opacity-75 text-[10px] select-none" aria-hidden="true">
                ●
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
