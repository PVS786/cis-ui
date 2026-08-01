'use client';

export default function ArchitecturalLines() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      <svg className="w-full h-full text-brand-gold/30" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <pattern id="arch-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arch-grid)" />
        <circle cx="200" cy="300" r="180" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="800" cy="700" r="250" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
        <line x1="0" y1="200" x2="1000" y2="800" stroke="currentColor" strokeWidth="0.5" />
        <line x1="200" y1="0" x2="800" y2="1000" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 3" />
      </svg>
    </div>
  );
}
