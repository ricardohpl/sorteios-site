import React from 'react'
import { StyledHome } from './StyledHome'

import { StyledLink } from '../styles/StyledLink'
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <StyledHome>
      <Logo />

      <div className="center">
        <div className='highlights'>
          <h3>Seja bem vindo(a) !!!</h3>
          <p>
            Faça sorteios personalizados da forma mais prática para você, com animações e possibilidade de exibir resultados todos de uma vez ou um por vez.
            Selecione um sorteio abaixo e divirta-se!
          </p>
        </div>

        <div className="links">
          <div className="linkSession border">
            <StyledLink to={'/names'}>
              <div className="linkContainer right">
                <h3>SORTEAR NOMES</h3>
                <p>
                  Permite realizar sorteio de nomes, pode ser usado por exemplo para ordenar uma lista de forma randômica ou
                  sortear somente um nome dentro de uma lista.
                </p>
              </div>
            </StyledLink>
          </div>

          <div className="linkSession">
            <StyledLink to={'/numbers'}>
              <div className="linkContainer left">
                <h3>SORTEAR NÚMEROS</h3>
                <p>
                  Permite realizar sorteio de números, podendo simular por exemplo o sorteio da mega-sena.
                  Range de números personalizável.
                </p>
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