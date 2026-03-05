'use client';

export default function PixelHeart() {
  return (
    <div className="flex items-center justify-center animate-pulse-heart">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 8-bit pixel art heart */}
        {/* Top left rounded section */}
        <rect x="20" y="30" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="30" y="20" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="40" y="20" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="50" y="30" width="10" height="10" fill="currentColor" className="text-primary" />

        {/* Top right rounded section */}
        <rect x="60" y="30" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="70" y="20" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="80" y="20" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="90" y="30" width="10" height="10" fill="currentColor" className="text-primary" />

        {/* Upper middle section */}
        <rect x="20" y="40" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="30" y="30" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="40" y="30" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="50" y="40" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="60" y="40" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="70" y="30" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="80" y="30" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="90" y="40" width="10" height="10" fill="currentColor" className="text-primary" />

        {/* Middle section */}
        <rect x="10" y="50" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="20" y="50" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="30" y="40" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="40" y="40" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="50" y="50" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="60" y="50" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="70" y="40" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="80" y="40" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="90" y="50" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="100" y="50" width="10" height="10" fill="currentColor" className="text-primary" />

        {/* Lower middle section */}
        <rect x="10" y="60" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="20" y="60" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="30" y="50" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="40" y="50" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="50" y="60" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="60" y="60" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="70" y="50" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="80" y="50" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="90" y="60" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="100" y="60" width="10" height="10" fill="currentColor" className="text-primary" />

        {/* Bottom point sections */}
        <rect x="20" y="70" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="30" y="60" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="40" y="60" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="50" y="70" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="60" y="70" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="70" y="60" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="80" y="60" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="90" y="70" width="10" height="10" fill="currentColor" className="text-primary" />

        {/* Lower point */}
        <rect x="30" y="70" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="40" y="70" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="50" y="80" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="60" y="80" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="70" y="70" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="80" y="70" width="10" height="10" fill="currentColor" className="text-primary" />

        {/* Bottom point tip */}
        <rect x="40" y="80" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="50" y="90" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="60" y="90" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="70" y="80" width="10" height="10" fill="currentColor" className="text-primary" />

        {/* Final point */}
        <rect x="50" y="100" width="10" height="10" fill="currentColor" className="text-primary" />
        <rect x="60" y="100" width="10" height="10" fill="currentColor" className="text-primary" />
      </svg>
    </div>
  );
}
