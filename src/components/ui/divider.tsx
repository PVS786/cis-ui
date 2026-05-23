import { cn } from '@/lib/utils';

interface DividerProps {
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Divider — Golden horizontal accent line.
 */
export function Divider({ align = 'left', className }: DividerProps) {
  return (
    <div
      className={cn(
        'h-px w-16 bg-[var(--color-accent)] mb-4',
        align === 'center' && 'mx-auto',
        className
      )}
    />
  );
}
