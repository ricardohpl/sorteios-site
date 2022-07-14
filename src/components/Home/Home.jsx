import React from 'react'
import { StyledHome } from './StyledHome'

import { StyledLink } from '../styles/StyledLink'
import Logo from '../Logo/Logo'
import Footer from '../Footer'


const Home = () => {
  return (
    <StyledHome>
      <Logo />
      <div className="center">
        <div className='highlights'>
          <h3>Seja bem vindo(a) !!!</h3>
          <p>Faça sorteios personalizados da forma mais prática para você. Selecione um sorteio abaixo e divirta-se!</p>
          {/* <p>Esolha o sorteio: </p> */}
        </div>
        <div className="links">
          <div className="linkSession border">
            <StyledLink to={'/numbers'}>
              <div className="linkContainer">
                <h3>SORTEAR NÚMEROS</h3>
                <p>Permite sorteio com quantos numeros desejar, podendo simular por exemplo o sorteio da mega-sena.</p>
              </div>
            </StyledLink>
          </div>
          <div className="linkSession">
            <StyledLink to={'/names'}>
              <div className="linkContainer">
                <h3>SORTEAR NOMES</h3>
                <p>Permite sorteio com quantos nomes quiser e se deseja ver o resultado um a um com animação ou todos de uma vez.</p>
              </div>
            </StyledLink>
          </div>
        </div>
      </div>
      <Footer />
    </StyledHome >
  )
}

export default Home