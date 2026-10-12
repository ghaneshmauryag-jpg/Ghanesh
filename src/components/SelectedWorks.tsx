import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../config/portfolioData';
import { Instagram, ArrowUpRight, Layers, Copy, Check } from 'lucide-react';

interface SelectedWorksProps {
  onSelectProject: (project: ProjectItem) => void;
  onContactClick: () => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectProject }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (e: React.MouseEvent, id: string, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="works" className="relative py-8 sm:py-12 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00f59b]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00f59b] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#00f59b] font-semibold">
                FEATURED PRODUCTIONS // INSTAGRAM REELS
              </span>
            </div>
            <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              SELECTED WORK
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400">
              4 Production Reels &bull; Tap to Watch Directly on Instagram
            </span>
          </div>
        </div>

        {/* ALL PROJECTS // INSTAGRAM REEL DIRECTORY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.workSections.map((sec, idx) => {
            const item = sec.project;
            const isCopied = copiedId === item.id;

            return (
              <div
                key={item.id}
                className="group relative p-3.5 sm:p-4 rounded-2xl bg-[#08090a] border border-white/[0.08] hover:border-[#00f59b]/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,245,155,0.08)]"
              >
                {/* Top Thumbnail & Quick Overlay */}
                <div>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-neutral-950 mb-3 border border-white/[0.06]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter contrast-[1.05]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/20" />
                    
                    {/* Project index badge */}
                    <div className="absolute top-2 left-2 flex items-center gap-1.5 z-10">
                      <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono font-bold text-[#00f59b]">
                        0{idx + 1}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase text-neutral-300">
                        {item.sectionCategory}
                      </span>
                    </div>

                    {/* Direct hover link overlay */}
                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px] z-20"
                      title="Open Reel on Instagram"
                    >
                      <span className="px-3 py-1.5 rounded-lg bg-[#00f59b] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,245,155,0.4)]">
                        <Instagram className="w-3.5 h-3.5" />
                        <span>Watch Reel</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </a>

                    {/* Resolution pill on thumbnail */}
                    <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#00f59b] font-medium z-10">
                      4K Reel
                    </span>
                  </div>

                  {/* Info details */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-[#00f59b] uppercase tracking-wider block font-semibold">
                      {item.categoryLabel}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-[#00f59b] transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed pt-1">
                      {item.description}
                    </p>

                    {/* Hook Quote if present */}
                    {item.hookQuote && (
                      <div className="pt-1.5">
                        <p className="text-[10px] text-neutral-300 italic border-l border-[#00f59b]/50 pl-2 line-clamp-1">
                          {item.hookQuote}
                        </p>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 pt-2">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 rounded text-[9px] font-mono text-neutral-400 bg-white/[0.03] border border-white/[0.05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2">
                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-2.5 rounded-xl bg-[#00f59b] hover:bg-[#15ffaa] text-black font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-[0_0_12px_rgba(0,245,155,0.25)] cursor-pointer"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Watch Reel</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => onSelectProject(item)}
                    className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    title="View Project Specs"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#00f59b]" />
                  </button>

                  <button
                    onClick={(e) => handleCopy(e, item.id, item.instagramUrl)}
                    className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    title={isCopied ? "Link Copied!" : "Copy Reel Link"}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-[#00f59b]" /> : <Copy className="w-3.5 h-3.5" />}
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
