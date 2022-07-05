import React from 'react'
import { StyledLogo } from './StyledLogo'

const Logo = (props) => {
  return (
    <StyledLogo className={`logo ${props.className}`}> SORTEIA !!!</StyledLogo>
  )
}

export default Logo