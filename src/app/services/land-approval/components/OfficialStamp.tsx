'use client';

interface OfficialStampProps {
  color?: 'gold' | 'bronze' | 'red';
  rotate?: number;
  className?: string;
}

export default function OfficialStamp({ color = 'gold', rotate = 12, className = '' }: OfficialStampProps) {
  const colorMap = {
    gold: 'border-[#bfa052] text-[#bfa052]',
    bronze: 'border-[#8d6d2b] text-[#8d6d2b]',
    red: 'border-[#991b1b] text-[#991b1b]',
  };

  return (
    <div
      className={`relative w-20 h-20 rounded-full border-2 border-dashed flex items-center justify-center p-1 select-none pointer-events-none ${colorMap[color]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="w-full h-full rounded-full border border-solid flex flex-col items-center justify-center text-center p-1">
        <span className="text-[7px] font-extrabold uppercase tracking-tighter leading-none mb-0.5">
          OFFICIALLY APPROVED
        </span>
        <span className="text-[9px] font-black uppercase tracking-widest leading-none my-0.5">
          SEAL
        </span>
        <span className="text-[6px] font-bold tracking-tighter opacity-75">
          VALIDATED
        </span>
      </div>
    </div>
  );
}
