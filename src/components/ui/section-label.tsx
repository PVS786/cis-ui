import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * SectionLabel — Small category label with Golden Beige accent line.
 */
export function SectionLabel({ children, align = 'left', className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3',
        align === 'center' ? 'justify-center' : 'justify-start',
        className
      )}
    >
      <div className="h-px w-12 bg-[var(--color-accent)]" />
      <span className="font-gotham text-[12px] font-medium uppercase tracking-widest text-[var(--color-accent)]">
        {children}
      </span>
      {align === 'center' && <div className="h-px w-12 bg-[var(--color-accent)]" />}
    </div>
  );
}
