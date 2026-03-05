'use client';

import { useState, useEffect, RefObject } from 'react';

interface MusicPlayerProps {
  audioRef: RefObject<HTMLAudioElement>;
}

export default function MusicPlayer({ audioRef }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [audioRef]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log('Play failed:', err));
      }
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full bg-black/80 backdrop-blur-xl border-t border-primary/20 px-6 py-5">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-4">
          <h3 className="text-lg md:text-xl font-light text-primary text-balance">♪ قالوا عليكي - محمد سعيد</h3>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-muted-foreground min-w-fit font-light">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="flex-1 h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-primary"
            style={{
              background: `linear-gradient(to right, rgb(255, 192, 203) 0%, rgb(255, 192, 203) ${duration ? (currentTime / duration) * 100 : 0}%, rgb(51, 51, 51) ${duration ? (currentTime / duration) * 100 : 0}%, rgb(51, 51, 51) 100%)`
            }}
          />
          <span className="text-xs text-muted-foreground min-w-fit font-light">{formatTime(duration)}</span>
        </div>

        {/* Play Button */}
        <div className="flex justify-center">
          <button
            onClick={togglePlayPause}
            className="px-10 py-2.5 bg-primary text-primary-foreground rounded-full font-light hover:opacity-85 transition-opacity duration-200 text-sm active:scale-95 transition-transform"
          >
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </button>
        </div>
      </div>
    </div>
  );
}
