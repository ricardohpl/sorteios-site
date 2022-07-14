import React from 'react'
import { Container } from './styles/Container.styled'

const NotFound = () => {
  return (
    <Container w='25%' h='20%' minW='125px'>
      <div className="notFound">Erro: página não encontrada</div>
    </Container>
  )
}

export default NotFound