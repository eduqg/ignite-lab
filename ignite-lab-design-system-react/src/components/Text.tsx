import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg',
  children: ReactNode,
  asChild?: boolean;
  className?: string
}

export function Text({ size = 'md', children, asChild, className }: TextProps) {
  // Se eu receber a props asChild, renderizar Slot, se não, span
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={clsx(
        "text-gray-100 font-sans",
        {
          // Aplicar text-xs caso o size seja sm
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className
      )}>
      {children}
    </Comp>
  )
}