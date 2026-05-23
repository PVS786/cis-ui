import { icons } from 'lucide-react';

import { cn } from '@/lib/utils';

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  className?: string;
}

/**
 * Icon — Lucide icon wrapper with brand sizing.
 */
export function Icon({ name, size = 24, className }: IconProps) {
  const LucideIcon = icons[name];
  
  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon className={cn('text-current', className)} size={size} strokeWidth={2} />;
}
