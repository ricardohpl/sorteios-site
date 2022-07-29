import React from 'react'

import { StyledMain } from './styles/StyledMain'
import Footer from './Footer/Footer';
import Header from './Header';

import Menu from './Menu/Menu';

const Layout = (props) => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <StyledMain>
        <Header name={props.name} />
        <div className='content'>
          <Menu />
          {props.children}
        </div>
        <Footer />
      </StyledMain>
    </div>
  )
}

export default Layout