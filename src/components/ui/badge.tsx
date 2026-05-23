import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Badge — Status or category tags.
 */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-2.5 py-1 text-[10px] font-gotham font-bold uppercase tracking-widest bg-[var(--color-primary)] text-[var(--color-accent)] rounded-sm',
        className
      )}
    >
      {children}
    </span>
  );
}
