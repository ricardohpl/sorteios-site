import React from 'react'
import Border from '../Animations/Border'
import { StyledCounter } from './StyledCounter'

const Counter = (props) => {
    return (
        <StyledCounter>
            <Border>
                <div className='countContainer'>
                    <h3>
                        { props.count }
                    </h3>
                </div>
            </Border>
        </StyledCounter>
    )
}

export default Counter