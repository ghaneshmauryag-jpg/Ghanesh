import React, { useEffect } from 'react';
import { ProjectItem } from '../config/portfolioData';
import { X, Instagram, ArrowUpRight, Check, Film, Layers, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject?: (project: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleShare = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(project.instagramUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = project.instagramUrl;
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
      textArea.value = project.instagramUrl;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl max-h-[94vh] overflow-y-auto bg-[#0a0b0c] border border-white/10 rounded-2xl shadow-2xl shadow-black/95 flex flex-col">
        {/* Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-[#0a0b0c]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00f59b] animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#00f59b] font-semibold truncate">
              {project.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-2 py-1 rounded bg-white/[0.05] hover:bg-white/10 text-neutral-300 text-[11px] font-mono transition-colors flex items-center gap-1 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-[#00f59b]" />
                  <span>Copied</span>
                </>
              ) : (
                <span>Share</span>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1 rounded bg-white/[0.05] hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 flex flex-col md:flex-row gap-5 items-center md:items-start">
          {/* Vertical Reel Poster Container */}
          <div className="relative w-full max-w-[240px] sm:max-w-[270px] aspect-[9/16] rounded-xl overflow-hidden bg-black border border-white/10 shrink-0 shadow-2xl group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover filter contrast-[1.05]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />

            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#00f59b]">
                4K REEL MASTER
              </span>
            </div>

            <div className="absolute bottom-3 left-3 right-3">
              <a
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-lg bg-[#00f59b] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,245,155,0.4)] hover:bg-[#15ffaa] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Watch on Instagram</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Details Column */}
          <div className="flex flex-col gap-3 flex-1 w-full">
            <h2 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>

            {project.hookQuote && (
              <p className="p-2.5 rounded-lg bg-white/[0.02] border-l-2 border-[#00f59b] text-neutral-200 text-xs italic">
                {project.hookQuote}
              </p>
            )}

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              {project.longDescription || project.description}
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.08]">
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <span className="block text-[9px] uppercase font-mono text-neutral-500">Client / Series</span>
                <span className="text-xs font-semibold text-white mt-0.5 block truncate">{project.client}</span>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <span className="block text-[9px] uppercase font-mono text-neutral-500">Master Quality</span>
                <span className="text-xs font-semibold text-[#00f59b] mt-0.5 block">4K Master</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-mono text-neutral-300 bg-white/[0.04] border border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
              <span className="text-[11px] text-[#00f59b] font-mono">
                {project.metrics}
              </span>

              <a
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00f59b] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#15ffaa] transition-all shadow-[0_0_15px_rgba(0,245,155,0.3)] cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Open Reel ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
