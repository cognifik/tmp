import React, { useEffect, useState } from 'react';
import { MaintenanceCard } from './components/MaintenanceCard';
import { BackgroundShapes } from './components/BackgroundShapes';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerStyle = {
    '--mouse-x': mousePosition.x,
    '--mouse-y': mousePosition.y,
  } as React.CSSProperties;

  return (
    <div 
      className="relative min-h-screen w-full overflow-hidden bg-slate-50 flex flex-col items-center justify-center p-4 transition-colors duration-700"
      style={containerStyle}
    >
      
      {/* Decorative Background Elements */}
      <BackgroundShapes />

      {/* Main Content Card */}
      <main className="relative z-10 w-full max-w-2xl perspective-1000">
        <MaintenanceCard />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;