import styled, { keyframes } from "styled-components";

const RotateAnimation = keyframes`
    0% {
        transform: rotate(0deg) scale(0);
    }
    100% {
        transform: rotate(360deg) scale(1);
    }
`

const RotateAnimationNeg = keyframes`
    0% {
        transform: rotate(0deg) scale(0);
    }
    100% {
        transform: rotate(-360deg) scale(1);
    }
`

export const BgItenAnimation = styled.div.attrs(props => ({
    top: `${+props.top}px`,
    left: `${+props.left}px`,
    animation: `${+props.animation}`,
    animationTime: `${+props.animationTime}`,
}))`

position: absolute;
width: 125px;
height: 225px;

top: ${props => props.top};
left: ${props => props.left};

border-radius: 25px;

animation: ${props => props.animationTime}s linear infinite;
animation-name: ${props => props.animation === 1 ? RotateAnimationNeg : RotateAnimation};

:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: ${props => props.theme.secondColor};
    border-radius: 45px;
    box-shadow: 0 0 0 5px ${props => props.theme.boxShadowAnimate}, 0 0 0 10px #e5216533, 
    0 0 0 20px #e5216522, 0 0 0 30px #e5216611;

}

`

export const StyledBgAnimation = styled.div`

height: 100vh;
width: 100vw;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 0;
left: 0;

overflow: hidden;

.bgAnimationContainers {
    margin: 5px;
    width: 100%;
    height: 100%;
}


`
