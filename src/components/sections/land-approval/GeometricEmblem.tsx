export default function GeometricEmblem({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-full bg-[#BFA052] text-brand-navy shadow-sm ${className}`}>
      <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        {/* Outer perfect circle */}
        <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1.5" />
        {/* Inner thin circle */}
        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
        
        {/* Architectural central Diamond (rhombus) */}
        <path d="M 50 15 L 85 50 L 50 85 L 15 50 Z" stroke="currentColor" strokeWidth="2.5" />
        
        {/* Core cross hairs */}
        <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="1.5" />
        <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Diagonal support lines */}
        <line x1="32.5" y1="32.5" x2="67.5" y2="67.5" stroke="currentColor" strokeWidth="0.75" />
        <line x1="32.5" y1="67.5" x2="67.5" y2="32.5" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    </div>
  );
}
