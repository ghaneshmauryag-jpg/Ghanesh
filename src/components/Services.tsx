import React from 'react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { ArrowUpRight, Film, Sparkles, PenTool, Flame } from 'lucide-react';

interface ServicesProps {
  onContactClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  const serviceIcons = [Film, Sparkles, PenTool, Flame];

  return (
    <section id="services" className="relative py-10 sm:py-14 bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00f59b]">
                WHAT I OFFER
              </span>
            </div>
            <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              SERVICES
            </h2>
          </div>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#00f59b] hover:text-[#25ffb2] transition-colors group cursor-pointer"
          >
            <span>Inquire custom scope</span>
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Medium/Small Compact 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];

            return (
              <div
                key={service.number}
                className="group relative p-4 sm:p-5 rounded-xl bg-[#090a0b] border border-white/[0.07] hover:border-[#00f59b]/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_4px_20px_-5px_rgba(0,245,155,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs tracking-wider text-[#00f59b] font-bold">
                      {service.number}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-300 group-hover:text-[#00f59b] transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="font-['Syne',sans-serif] text-base sm:text-lg font-bold text-white group-hover:text-[#00f59b] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-1.5 text-neutral-400 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06]">
                  <ul className="space-y-1 text-[11px] text-neutral-300">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#00f59b] shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onContactClick}
                    className="mt-3 w-full py-1.5 rounded-lg bg-white/[0.03] hover:bg-[#00f59b] hover:text-black text-neutral-300 text-[11px] font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
