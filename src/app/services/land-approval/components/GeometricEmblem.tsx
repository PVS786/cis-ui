'use client';

export default function GeometricEmblem({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg className="w-full h-full text-[#BFA052]" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <polygon points="50,15 82,72 18,72" stroke="currentColor" strokeWidth="2" fill="none" />
        <polygon points="50,85 18,28 82,28" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
        <circle cx="50" cy="50" r="8" fill="currentColor" />
      </svg>
    </div>
  );
}
