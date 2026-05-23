import { cn } from '@/lib/utils';

interface CardProps {
  accent?: boolean;
  accentPosition?: 'left' | 'top';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

/**
 * Card — Surface container used for various elements.
 */
export function Card({
  accent = true,
  accentPosition = 'left',
  hover = true,
  padding = 'md',
  children,
  className,
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6 lg:p-8',
    lg: 'p-8 lg:p-12',
  };

  return (
    <div
      className={cn(
        'relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm overflow-hidden transition-all duration-base',
        hover && 'hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5',
        paddingClasses[padding],
        className
      )}
    >
      {accent && (
        <div
          className={cn(
            'absolute bg-[var(--color-accent)]',
            accentPosition === 'left' ? 'left-0 top-0 bottom-0 w-[3px]' : 'top-0 left-0 right-0 h-[3px]'
          )}
        />
      )}
      {children}
    </div>
  );
}
