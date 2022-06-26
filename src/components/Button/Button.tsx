// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import { StyledButton } from './style'

interface ButtonProps {
  text: string | JSX.Element
  onClick?: VoidFunction
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  const _handleClick = () => {
    if (onClick) onClick()
  }
  return <StyledButton onClick={_handleClick}>{text}</StyledButton>
}

export default Button
