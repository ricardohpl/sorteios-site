import React, { useState } from 'react'

import { StyledMain } from './styles/StyledMain'
import Footer from './Footer/Footer';
import Header from './Header';

import Menu from './Menu/Menu';
import Rules from './Rules/Rules';
import LinkRules from './Rules/LinkRules';

const Layout = (props) => {

  const [modal, setModal] = useState('none')

  return (
    <div className="App">
      <header className="App-header"></header>
      <StyledMain>
        <Header name={props.name} />
        <div className='content'>
          <Menu />
          {props.children}
        </div>
        <LinkRules
          text='Para visualizar todas as regras dos sorteios '
          setModal={setModal}
        />
        <Rules modal={modal} setModal={setModal} />
        <Footer />
      </StyledMain>
    </div>
  )
}

export default Layout