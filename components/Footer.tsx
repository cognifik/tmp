import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 mt-12 text-center">
      <p className="text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Cognifik. All rights reserved.
      </p>
    </footer>
  );
};