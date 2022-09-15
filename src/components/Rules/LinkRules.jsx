import React from 'react'
import { StyledRules } from './StyledRules'

const LinkRules = (props) => {
    return (
        <StyledRules>
            <div>
                <p className='smallText'>
                    {props.text} <span className='linkModal' onClick={() => props.setModal('block')}>clique aqui!</span>
                </p>
            </div>
        </StyledRules>
    )
}

export default LinkRules