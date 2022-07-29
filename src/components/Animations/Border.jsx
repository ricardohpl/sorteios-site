import React from 'react'
import { StyledBorder } from './StyledBorder'

const Border = (props) => {
    return (
        <StyledBorder height={props.height} width={props.width} >
            <div className='border'>
                <span></span>
                {props.children}
            </div>
        </StyledBorder>
    )
}

export default Border