import React, { DetailedHTMLProps } from 'react'
import cn from 'classnames'

type NativeButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
export interface ButtonProps {
  children?: string
  className?: string
  id?: NativeButtonProps['id']
  onClick?: NativeButtonProps['onClick']
  onFocus?: NativeButtonProps['onFocus']
  onBlur?: NativeButtonProps['onBlur']
  type?: NativeButtonProps['type']
  variant?: keyof typeof variants
}

const variants = {
  primary:
    'bg-blue-400 text-white py-4.5 px-6 text-lg font-semibold leading-7 border rounded-lg',
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  ...buttonProps
}: ButtonProps) => (
  <button className={cn(className, variants[variant])} {...buttonProps}>
    {children}
  </button>
)
