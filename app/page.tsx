'use client';

import { useState, useEffect, useRef } from 'react';
import FloatingParticles from '@/components/FloatingParticles';
import PixelHeart from '@/components/PixelHeart';
import MusicPlayer from '@/components/MusicPlayer';
import MessageSection from '@/components/MessageSection';

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayClick = () => {
    setIsRevealed(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log('Autoplay prevented:', err));
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Landing View */}
      {!isRevealed ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-background backdrop-blur-sm">
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="text-4xl md:text-5xl font-light text-primary max-w-md leading-tight">
              كل عام وأنتِ بطلة حكايتي
            </h1>
            <button
              onClick={handlePlayClick}
              className="px-12 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-full hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl active:scale-95 transition-transform"
            >
              Play
            </button>
          </div>
        </div>
      ) : (
        <div className="animate-reveal">
          {/* Pixel Heart */}
          <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
            <PixelHeart />
          </div>

          {/* Message Section */}
          <MessageSection />
        </div>
      )}

      {/* Music Player */}
      {isRevealed && (
        <div className="fixed bottom-0 left-0 right-0 z-40">
          <MusicPlayer audioRef={audioRef} />
        </div>
      )}

      {/* Hidden audio element for music control */}
      <audio
        ref={audioRef}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Albumaty.Com_mhmd_sayd_kalwa_alyky-d2YkrQ4MmQ5vkRJbU5ryiQVx0ydkUH.mp3"
        crossOrigin="anonymous"
      />
    </main>
  );
}
