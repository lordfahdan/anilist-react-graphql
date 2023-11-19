/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react'
import { InputSearch } from '../styled'

const Input = forwardRef((props, ref) => {
  return (
    <InputSearch ref={ref} {...props}  />
  )
})

export default Input