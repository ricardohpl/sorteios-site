import React from 'react'

import Modal from '../Modal/Modal'
import Logo from '../Logo/Logo'
import { StyledButton } from '../styles/StyledButton'
import { Container } from '../styles/Container.styled'
import { StyledRules } from './StyledRules'

const Rules = (props) => {
    return (
        <StyledRules>
            <Modal display={props.modal} >
                <Container w='75%' h='85%' minW='480px' minH='550px'>
                    <Logo className='logoModal' />
                    <div className='rulesContainer'>
                        <h3 className='modalTitle'>Sorteio de nomes:</h3>
                        <p className='modalDescription'>
                            Cada nome digitado na área de nomes separados por "Enter" (quebra de linha) ou vírgula será armazenado em uma lista para gerar o
                            sorteio de forma randômica, espaço não conta como separação para permitir nomes compostos. É possível sortear todos os nomes
                            gerando uma lista reordenada, somente um ou quantos nomes desejar.
                            Por padrão o site realiza o sorteio de todos os nomes digitados, como é possível visualizar no campo "Nomes sorteados" que
                            contabiliza automaticamente a quantidade total de nomes de acordo com os nomes inseridos, nesse caso o sorteio irá gerar uma nova lista
                            reordenada com todos os nomes digitados.
                            Para não sortear todos, basta alterar a quantidade no campo "Nomes Sorteados", por exemplo se alterar o campo para 1 será sorteado somente
                            um nome na lista.
                        </p>
                        <h3 className='modalTitle'>Sorteio de números:</h3>
                        <p className='modalDescription'>
                            Os campos Número Inicial e Número Final definem o range de números para realizar o sorteio. O site realiza o sorteio baseado na quantidade
                            de números definidos no campo Números Sorteados.
                            Por padrão o site já preenche dados para simular o sorteio igual ao sorteio da Mega-Sena!
                        </p>

                        <h3 className='modalTitle'>Outras Configurações: </h3>
                        <p className='modalDescription'>
                            <u>Visualizar os resultados todos de uma vez:</u> Se este campo estiver marcado e tiver mais de um nome ou número sorteado o resultado irá
                            aparecer em uma lista todos de uma vez na tela. Se este campo não estiver marcado o resultado será exibido um por vez com botões que
                            permitem navegar por todos os nomes ou números sorteados. <br />
                            <u>Contagem regressiva:</u> Se este campo estiver marcado será exibido uma contagem regressiva de 5 segundos antes de exibir o resultado final.
                        </p>
                        <p className='modalDescription'>
                        </p>

                        <br />

                        <div>
                            <StyledButton onClick={() => props.setModal('none')} > Sair </StyledButton>
                        </div>
                    </div>
                    <button className='botaoFechar' onClick={() => props.setModal('none')} > X </button>
                </Container>
            </Modal>
        </StyledRules>
    )
}

export default Rules