'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  duration: number;
  size: number;
  delay: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles
    const generatedParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: 8 + Math.random() * 4,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            bottom: '-10px',
            opacity: 0.6,
            animation: `float ${particle.duration}s ease-in infinite`,
            animationDelay: `${particle.delay}s`,
            '--x': `${(Math.random() - 0.5) * 100}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
