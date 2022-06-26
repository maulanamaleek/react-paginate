import React from 'react'
import { StyledLabel } from './style'

interface LabelProps {
  children?: React.ReactNode
}

export const Label: React.FC<LabelProps> = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>
}
