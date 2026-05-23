'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

/**
 * AnimateIn — Wraps children with Framer Motion fade-up-on-scroll animation.
 */
export function AnimateIn({ children, delay = 0, direction = 'up', className }: AnimateInProps) {
  const directionOffsets = {
    up: { y: 16, x: 0 },
    down: { y: -16, x: 0 },
    left: { x: 16, y: 0 },
    right: { x: -16, y: 0 },
  };

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...directionOffsets[direction] }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-50px' }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
    >
      {children}
    </motion.div>
  );
}
