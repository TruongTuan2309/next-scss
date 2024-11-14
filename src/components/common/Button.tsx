'use client'
import React, { ButtonHTMLAttributes, useState } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  fullWidth?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  fullWidth,
  className = '',
  onClick,
  size = 'lg',
  ...rest
}: IButtonProps) => {
  const [loading, setLoading] = useState(false)
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return

    if (onClick.constructor.name === 'AsyncFunction') {
      setLoading(true)
      try {
        await onClick(e)
      } finally {
        setLoading(false)
      }
    } else {
      onClick(e)
    }
  }
  return (
    <button
      className={`btn btn-custom-${size} ${variant} ${fullWidth ? 'w-full' : ''} ${loading ? 'loading' : ''} ${className}`.trim()}
      onClick={handleClick}
      {...rest}
    >
      {loading && <div className='spinner' />}
      <span>{children}</span>
    </button>
  )
}

export default React.memo(Button)
