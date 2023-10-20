import React, { forwardRef, type PropsWithChildren } from 'react'
import cx from 'clsx'

export interface FunctionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  curPath: boolean
  //   Icon: React.ReactNode
}

//TODO: icon can be within
const FunctionButton = forwardRef<HTMLButtonElement, FunctionButtonProps>(
  ({ children, className, curPath, ...props }, _forwardRef) => {
    return (
      <button
        ref={_forwardRef}
        className={cx(
          'relative flex items-center justify-center w-[48px] h-[48px] rounded-[24px]',
          curPath ? 'bg-[#ffffff]' : 'bg-[rgba(255,255,255,0.12)]',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

export default FunctionButton
