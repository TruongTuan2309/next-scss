'use client'
import React, { forwardRef, InputHTMLAttributes } from 'react'

interface IInputNormalProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputNormal = forwardRef<HTMLInputElement, IInputNormalProps>(({ className = '', ...rest }, ref) => {
  return (
    <div className='input-normal-custom'>
      <input className='input-normal' ref={ref} {...rest} autoComplete='off' />
    </div>
  )
})

InputNormal.displayName = 'InputNormal'

export default React.memo(InputNormal)
