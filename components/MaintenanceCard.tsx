import React from 'react';
import { Logo } from './Logo';

export const MaintenanceCard: React.FC = () => {
  return (
    <div className="relative group rounded-3xl p-[1px] overflow-hidden">
      {/* Spotlight Border Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cognifik-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%), rgba(108, 181, 22, 0.4), transparent 40%)`
        }}
      />
      
      <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl p-10 md:p-14 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full w-full">
        {/* Logo Section */}
        <div className="flex justify-center mb-10">
          <div className="relative transform transition-transform duration-500 hover:scale-105">
              <img src="/logo.svg" alt="Cognifik" className="h-10" />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-700 tracking-tight">
            Under Maintenance
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-lg mx-auto">
            We are currently updating our platform to serve you better. <br />Check back soon.
          </p>
        </div>
      </div>
    </div>
  );
};