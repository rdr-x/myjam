import React, { forwardRef, type PropsWithChildren } from 'react'
import cx from 'clsx'
import './index.css'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'white'
  variant?: 'contained' | 'outlined' | 'text'
  fullWidth?: boolean
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (
    {
      children,
      className,
      disabled = false,
      fullWidth = false,
      loading = false,
      variant = 'contained',
      color = 'primary',
      ...props
    },
    _forwardRef
  ) => {
    return (
      <button
        className={cx(
          `fui-button--${variant}`,
          `fui-button--${color}`,
          'px-[24px] flex flex-row justify-center items-center h-[48px] border-1px border-solid border-#000000 whitespace-nowrap cursor-pointer rounded-[45px]',
          (loading || disabled) &&
            'bg-gray-400 pointer-events-none cursor-not-allowed',
          fullWidth ? 'w-full' : 'w-fit',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

export default Button
