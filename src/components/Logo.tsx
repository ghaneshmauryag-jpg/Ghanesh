import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showSubtitle = false }) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-9 h-9',
  };

  const textSizes = {
    sm: 'text-base tracking-wider',
    md: 'text-lg tracking-widest font-extrabold',
    lg: 'text-2xl tracking-widest font-extrabold',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <filter id="glow-teal" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00f59b" floodOpacity="0.4" />
            </filter>
          </defs>
          
          <path
            d="M8 16L20 7L32 16L27 20L20 14L13 20L8 16Z"
            fill="#00f59b"
            filter="url(#glow-teal)"
          />
          <path
            d="M8 26L20 17L32 26L27 30L20 24L13 30L8 26Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`font-['Syne',sans-serif] uppercase font-bold text-white tracking-widest leading-none ${textSizes[size]}`}>
          GHANESH
        </span>
        {showSubtitle && (
          <span className="text-[9px] tracking-[0.25em] text-neutral-400 font-mono uppercase mt-1">
            Visuals &amp; Motion
          </span>
        )}
      </div>
    </div>
  );
};
