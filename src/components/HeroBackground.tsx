"use client";

import React, { useEffect, useState } from 'react';

export default function HeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-50">
      {isClient && (
        <div 
          className="absolute top-0 left-0 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-aupus-green/30 rounded-full blur-[120px] transition-transform duration-1000 ease-out will-change-transform"
          style={{ 
            transform: `translate(calc(${mousePosition.x}vw - 50%), calc(${mousePosition.y}vh - 50%))` 
          }}
        />
      )}

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3 animate-[pulse_6s_ease-in-out_infinite]"></div>
    </div>
  );
}