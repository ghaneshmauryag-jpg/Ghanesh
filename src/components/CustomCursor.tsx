import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, select, [role="button"]');
        setIsPointer(!!interactive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      <div
        className="fixed top-0 left-0 rounded-full border border-[#00f59b]/40 transition-transform duration-100 ease-out pointer-events-none"
        style={{
          width: isPointer ? '44px' : '28px',
          height: isPointer ? '44px' : '28px',
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          backgroundColor: isPointer ? 'rgba(0, 245, 155, 0.08)' : 'transparent',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s',
        }}
      />
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#00f59b] pointer-events-none"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          boxShadow: '0 0 8px #00f59b',
        }}
      />
    </div>
  );
};
