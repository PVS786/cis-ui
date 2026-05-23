import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'default' | 'narrow' | 'wide';
  className?: string;
}

/**
 * Container — Consistent max-width and horizontal padding wrapper.
 */
export function Container({ children, size = 'default', className }: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-content mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-3xl mx-auto px-4 sm:px-6',
    wide: 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8',
  };

  return <div className={cn(sizeClasses[size], className)}>{children}</div>;
}
