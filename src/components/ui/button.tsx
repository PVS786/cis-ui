import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Button — Primary interactive element across the site.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  disabled,
  loading,
  children,
  className,
  onClick,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-gotham font-semibold uppercase tracking-wider transition-all duration-base outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-none';

  const variantClasses = {
    primary:
      'bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent-dark)] hover:scale-[1.02]',
    secondary:
      'bg-transparent text-[var(--color-accent)] border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]',
    ghost:
      'bg-transparent text-current hover:underline underline-offset-4 decoration-2 decoration-current',
  };

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-[13px]',
    md: 'px-8 py-4 text-[15px]',
    lg: 'px-10 py-5 text-[16px]',
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    variant !== 'ghost' && sizeClasses[size],
    className
  );

  const content = (
    <>
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          />
        </svg>
      )}
      {children}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a className={classes} href={href} rel="noopener noreferrer" target="_blank">
          {content}
        </a>
      );
    }
    return (
      <Link className={classes} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} onClick={onClick}>
      {content}
    </button>
  );
}
