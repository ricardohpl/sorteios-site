import React from 'react'
import { BgItenAnimation, StyledBgAnimation } from './StyledBgAnimation'

const BgAnimation = () => {
    return (
        <StyledBgAnimation>
            <div className="bgAnimationContainers">
                <BgItenAnimation top={100} left={500} animation={1} animationTime={3} />
                <BgItenAnimation top={300} left={200} animation={0} animationTime={5} />
                <BgItenAnimation top={75} left={1150} animation={1} animationTime={4} />
                <BgItenAnimation top={400} left={1450} animation={0} animationTime={8} />
                <BgItenAnimation top={650} left={250} animation={0} animationTime={6} />
                <BgItenAnimation top={250} left={950} animation={1} animationTime={5} />
                <BgItenAnimation top={400} left={650} animation={0} animationTime={3} />
                <BgItenAnimation top={750} left={1150} animation={1} animationTime={7} />
            </div>
        </StyledBgAnimation>
    )
}

export default BgAnimation