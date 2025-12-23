import React from 'react';

export const BackgroundShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center z-0">
      
      {/* =========================================
          ORBITAL SYSTEM
          Center Point: The Maintenance Card
          All rings are centered absolute divs that rotate.
          No visible borders on the rings themselves (orbital paths).
      ========================================= */}

      {/* --- Ring 1 (Innermost) --- 
          Fast rotation
      */}
      <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full animate-spin-slow">
        {/* Solid Green Dot */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cognifik-green rounded-full shadow-sm"></div>
        {/* Small Hollow Dark Circle */}
        <div className="absolute bottom-[15%] left-[15%] w-4 h-4 border-2 border-cognifik-dark/40 rounded-full"></div>
        {/* Tiny Slate Dot */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 w-2 h-2 bg-slate-300 rounded-full"></div>
      </div>

      {/* --- Ring 2 --- 
          Counter-rotation
      */}
      <div className="absolute w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full animate-spin-reverse-slow">
         {/* Large Transparent Green Circle */}
         <div className="absolute top-1/4 -left-4 w-12 h-12 bg-cognifik-green/10 rounded-full blur-[1px]"></div>
         {/* Outlined Circle */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 border-2 border-cognifik-dark/20 rounded-full"></div>
         {/* Solid Dark Circle */}
         <div className="absolute top-1/2 left-0 -translate-x-1/2 w-5 h-5 bg-cognifik-dark/80 rounded-full"></div>
         {/* Tiny Green Satellite */}
         <div className="absolute top-1/2 right-0 translate-x-1/2 w-4 h-4 bg-cognifik-green/80 rounded-full"></div>
         {/* Dashed Outline Circle */}
         <div className="absolute bottom-1/4 right-[10%] w-6 h-6 border border-dashed border-slate-400 rounded-full opacity-60"></div>
      </div>

      {/* --- Ring 3 --- 
          Slow rotation
      */}
      <div className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full animate-spin-slower">
        {/* Large Dark Circle */}
        <div className="absolute bottom-[20%] left-[10%] w-16 h-16 bg-cognifik-dark/5 rounded-full backdrop-blur-sm"></div>
        {/* Green Moon */}
        <div className="absolute top-1/2 -left-3 w-6 h-6 bg-cognifik-green rounded-full opacity-40"></div>
        {/* Hollow Green Ring */}
        <div className="absolute bottom-0 right-1/4 w-10 h-10 border-4 border-cognifik-green/20 rounded-full"></div>
      </div>

      {/* --- Ring 4 (Outermost) --- 
          Very slow reverse
      */}
      <div className="absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full animate-spin-reverse-slower opacity-60">
        {/* Massive Hollow Circle */}
        <div className="absolute top-0 right-1/4 w-32 h-32 border border-cognifik-green/10 rounded-full"></div>
        {/* Solid Anchor Circle */}
        <div className="absolute bottom-1/3 -left-4 w-8 h-8 bg-cognifik-dark/10 rounded-full"></div>
        {/* Medium Outline Circle */}
        <div className="absolute top-1/3 left-[5%] w-12 h-12 border-2 border-cognifik-green/30 rounded-full border-dashed"></div>
        {/* Tiny distant planet */}
        <div className="absolute bottom-10 right-1/3 w-4 h-4 bg-cognifik-green rounded-full"></div>
        {/* Large filled circle with border */}
        <div className="absolute top-10 left-1/2 w-6 h-6 bg-slate-100 border border-slate-300 rounded-full"></div>
      </div>

      {/* --- Ring 5 (Distant) --- 
          Barely visible
      */}
      <div className="absolute w-[1000px] h-[1000px] md:w-[1500px] md:h-[1500px] rounded-full animate-spin-slow">
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-cognifik-green/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-cognifik-dark/5 rounded-full blur-xl"></div>
          {/* Distant huge outline */}
          <div className="absolute top-0 left-1/3 w-20 h-20 border border-slate-200/50 rounded-full"></div>
      </div>

      {/* --- Static / Parallax Background Blobs (Deepest Layer) --- */}
      <div className="absolute inset-0 z-[-1]">
        {/* Top Right Glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-cognifik-dark/5 blur-[100px] rounded-full animate-pulse-slow"></div>
        {/* Bottom Left Glow */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-cognifik-green/10 blur-[100px] rounded-full animate-pulse-slow [animation-delay:2s]"></div>
      </div>
      
    </div>
  );
};