import React from 'react';

interface LogoProps {
  className?: string;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", height = 40 }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 
        Based on the "Cognifik" logo style:
        Left: A green pill shape with a smaller circle (dot) below/offset.
        Right: Lowercase bold sans-serif text.
      */}
      
      {/* Icon Mark */}
      <svg height={height} viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
        {/* Main Pill */}
        <rect x="0" y="5" width="40" height="20" rx="10" fill="#6CB516" />
        {/* Offset Dot/Circle */}
        <circle cx="12" cy="34" r="7" fill="#6CB516" />
      </svg>
      
      {/* Text Mark */}
      <svg height={height * 0.7} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-0.5">
        <text 
            x="0" 
            y="32" 
            fill="#1B2535" 
            fontFamily="Inter, sans-serif" 
            fontWeight="700" 
            fontSize="38"
            letterSpacing="-0.03em"
        >
            cognifik
        </text>
      </svg>
    </div>
  );
};