'use client'
import React from 'react'
import { InputAttributes, NumericFormat, NumericFormatProps } from 'react-number-format'

interface IInputNumberProps extends NumericFormatProps<InputAttributes> {}

const InputNumber = ({ className = '', ...rest }: IInputNumberProps) => {
  return <NumericFormat className={`input-number ${className}`.trim()} {...rest} />
}

export default React.memo(InputNumber)
