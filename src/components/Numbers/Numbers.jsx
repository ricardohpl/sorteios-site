import React from 'react'
import { StyledNumbers } from './StyledNumbers'
import { Container } from '../styles/Container.styled'

const Numbers = () => {
    return (
        <StyledNumbers>

            <div className='center'>
                <Container w='650px' h='350px'>
                    <p>Números</p>
                    <textarea className='textArea' type="text" placeholder='Números' /> <br />
                    
                </Container>
            </div>
        </StyledNumbers>
    )
}

export default Numbers