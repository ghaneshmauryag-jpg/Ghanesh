import React from 'react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { Sparkles, Film, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-8 sm:py-12 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00f59b]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b]" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#00f59b]">
                  {PORTFOLIO_DATA.about.badge}
                </span>
              </div>

              <h2 className="font-['Syne',sans-serif] text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
                {PORTFOLIO_DATA.about.title}
              </h2>

              <p className="mt-4 sm:mt-6 text-neutral-400 text-sm sm:text-base leading-relaxed">
                {PORTFOLIO_DATA.about.secondaryDescription}
              </p>
            </div>

            {/* Production Metrics Grid (Confirmed: 4K only) */}
            <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4">
              {PORTFOLIO_DATA.about.experienceHighlights.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00f59b]/30 transition-colors"
                >
                  <span className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-extrabold text-white block">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0b0c] border border-white/[0.08] relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f59b]/5 rounded-bl-full pointer-events-none" />

              <p className="text-lg sm:text-xl md:text-2xl text-neutral-100 font-medium leading-relaxed">
                "{PORTFOLIO_DATA.about.description}"
              </p>

              <div className="mt-5 pt-5 border-t border-white/[0.07] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/30 flex items-center justify-center">
                    <Film className="w-4 h-4 text-[#00f59b]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Ghanesh</h4>
                    <p className="text-[11px] text-neutral-400">Video Editor &amp; Visual Designer</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#00f59b] font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Craft</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#00f59b]" />
                <span>CORE SPECIALIZATIONS &amp; SKILLS</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.about.skills.map((skill) => (
                  <div
                    key={skill}
                    className="group px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-[#00f59b]/40 text-neutral-200 hover:text-white transition-all duration-200 cursor-default"
                  >
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest font-['Syne',sans-serif] group-hover:text-[#00f59b] transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-3">
                CREATIVE SOFTWARE STACK
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PORTFOLIO_DATA.about.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between hover:border-white/15 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-semibold text-white block">{tool.name}</span>
                      <span className="text-[10px] text-neutral-500 font-mono block mt-0.5">{tool.role}</span>
                    </div>
                    <span className="text-[9px] font-mono text-[#00f59b] px-2 py-0.5 rounded bg-[#00f59b]/10">
                      PRO
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
