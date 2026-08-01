export default function ArchitecturalLines() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-15">
      {/* Editorial Theme Specific Rotating Drafting Frames */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[500px] border border-[#BFA052] rotate-12 opacity-40" />
      <div className="absolute top-[20%] left-[8%] w-[400px] h-[500px] border border-brand-navy -rotate-3 opacity-30" />
      
      {/* Absolute Grid Axis lines */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-[#BFA052] opacity-30" />
      <div className="absolute left-0 top-1/2 h-px w-full bg-[#BFA052] opacity-30" />

      {/* Horizontal grid lines */}
      <div className="absolute top-[10%] left-0 right-0 h-[1px] bg-[#BFA052]/40" />
      <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-[#BFA052]/25" />
      <div className="absolute top-[70%] left-0 right-0 h-[1px] bg-[#BFA052]/30" />
      
      {/* Vertical grid lines */}
      <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-[#BFA052]/40" />
      <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[#BFA052]/25" />
      <div className="absolute left-[85%] top-0 bottom-0 w-[1px] bg-[#BFA052]/30" />

      {/* Overlapping draft circle */}
      <svg className="absolute top-[25%] left-[12%] w-[400px] h-[400px] text-[#BFA052]/25" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.25" />
        <path d="M 0 50 L 100 50 M 50 0 L 50 100" stroke="currentColor" strokeWidth="0.25" />
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1,3" />
      </svg>

      {/* Technical corner alignment marks */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#BFA052]/50" />
      <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#BFA052]/50" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#BFA052]/50" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#BFA052]/50" />

      {/* Tiny coordinates */}
      <div className="absolute bottom-6 left-12 font-mono text-[9px] text-brand-navy/40 tracking-widest uppercase">
        REF. COORD // 45.4012° N, 12.3456° E
      </div>
      <div className="absolute top-6 right-12 font-mono text-[9px] text-brand-navy/40 tracking-widest uppercase">
        DWG NO. L-102_REV4
      </div>
    </div>
  );
}
