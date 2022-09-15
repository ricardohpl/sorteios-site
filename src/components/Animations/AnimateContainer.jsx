import React from 'react'
import BgAnimation from './BgAnimation'
import BubblesContainer from './BubblesContainer'
import { StyledAnimateContainer } from './Styles/StyledAnimateContainer'

const AnimateContainer = () => {
    return (
        <StyledAnimateContainer>
            <div id='animateContainer'>
                <BgAnimation />
                <BubblesContainer />
            </div>
        </StyledAnimateContainer>
    )
}

export default AnimateContainer