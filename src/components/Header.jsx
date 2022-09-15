import React from 'react'
import Logo from './Logo/Logo'
import styled from 'styled-components'

const HeaderLogo = styled(Logo)`
  color: ${props => props.theme.mainColor};
`

const Header = () => {
  return (
    <header className="header">
      <HeaderLogo /> 
    </header>
  )
}

export default Header