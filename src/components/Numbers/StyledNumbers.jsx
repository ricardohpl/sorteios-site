
import { keyframes } from "styled-components"
import styled from 'styled-components'
// tem que refatorar


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

const UpAnimation = keyframes`
    0% {
        transform: translateY(100vh) scale(0);
    }
    100% {
        transform:  translateY(-10vh) scale(1);
    }
`
const RotationBorder = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const StyledNumbers = styled.div`

color: ${props => props.theme.thirdColor};

display: flex;
justify-content: center;

padding: 15px;
height: 100%;
min-height: 500px;
min-width: 650px;
width: 60%;

.loading {
    margin: auto;
    font-size: 22px;
    font-weight: 500;
    color:  ${props => props.theme.mainColor};
}

.center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    
}

.title {
    color: ${props => props.theme.secondColor};
    font-family: 'Shadows Into Light', cursive;
    font-size: 42px;
    font-weight: 600;
    padding: 10px;
}

.numbers {
    margin: 15px;
}

.displayCount {
    font-size: 66px;
    font-weight: 600;
    z-index: 2;
    
}

.center .input {
    height: 30px;
    width: 75px;
    margin-left: 10px;
    padding-left: 10px;
    border-radius: 5px;
}

.labelHelp {
    display: block;
    margin: 2px;
    font-size: 14px;
    text-align: right;
    color: ${props => props.theme.secondColor};

}

.checkbox {
    margin: 15px 8px;
    color:  ${props => props.theme.thirdColor};
}

// Modal
#animateContainer {
    top: 0px;
    left: -45px;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -5;
    border-radius: 12px;
    background-image: ${props => props.theme.bgGradient};
    min-width: 800px;
    min-height: 650px;

}

.results {
    margin: 5px auto;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 450px;
    height: 200px;
    max-width: 55%;
    max-height: 65%;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
    
    font-size: 32px;
    color: ${props => props.theme.thirdColor};
    box-shadow: ${props => props.theme.secondBoxShadow};
    border-radius: 5px;
    padding: 10px 25px;
    z-index: 5;

    animation: 5s ease-out;
}

.results::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 525px;
    background-image: conic-gradient(transparent, transparent, transparent, ${props => props.theme.thirdColor});
    animation: 4s linear infinite;
    animation-name: ${RotationBorder};
    animation-delay: -2s;
}

.results::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 525px;
    background-image: conic-gradient(transparent, transparent, transparent, ${props => props.theme.secondColor});
    animation: 4s linear infinite;
    animation-name: ${RotationBorder};
}

.results span {
    position: absolute;
    inset: 5px;
    background: ${props => props.theme.mainBg};
    border-radius: 16px;
    z-index: 1;
}

.displayNumbers {
    overflow: auto;
    z-index: 9;
    color: ${props => props.theme.thirdColor};
}


.text {
    color: ${props => props.theme.secondColor};
    font-size: 36px;
    margin-top: 20px;
}

.logoModalName {
    color: ${props => props.theme.thirdColor}
}

/* Square Animation */
.squareContainers {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.squareContainers .square {
    position: relative;
    width: 125px;
    height: 225px;
    margin: -30px;

    border-radius: 25px;
    border: 4px solid transparent;

}

.squareContainers .square::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: ${props => props.theme.secondColor};
    border-radius: 45px;
    right: 5px;
    box-shadow: 0 0 0 5px ${props => props.theme.boxShadowAnimate}, 0 0 0 10px ${props => props.theme.boxShadowAnimate}, 
    0 0 0 20px ${props => props.theme.boxShadowAnimate}, 0 0 0 30px ${props => props.theme.boxShadowAnimate};

}

.squareContainers .square:nth-child(1) {
    left: -275px;
    animation: 3s linear infinite;
    animation-name: ${RotateAnimationNeg};
}

.squareContainers .square:nth-child(2) {
    top: 250px;
    left: -125px;
    animation: 2s linear infinite;
    animation-name: ${RotateAnimation};

}

.squareContainers .square:nth-child(3) {
    top: -275px;
    left: -75;
    animation: 4s linear infinite;
    animation-name: ${RotateAnimation};
}

.squareContainers .square:nth-child(4) {
    top: 150px;
    left: 75px;
    animation: 5s linear infinite;
    animation-name: ${RotateAnimation};
}

.squareContainers .square:nth-child(5) {
    top: -175px;
    left: 175px;
    animation: 7s linear infinite;
    animation-name: ${RotateAnimation};
}

.squareContainers .square:nth-child(6) {
    top: 275px;
    left: 245px;
    animation: 2s linear infinite;
    animation-name: ${RotateAnimationNeg};
}

.squareContainers .square:nth-child(7) {
    top: -115px;
    left: 365px;
    animation: 5s linear infinite;
    animation-name: ${RotateAnimationNeg};
}

.squareContainers .square:nth-child(8) {
    top: 175px;
    left: 245px;
    animation: 3s linear infinite;
    animation-name: ${RotateAnimation};
}

/* Count Animation */
.countContainer {
    position: relative;
    width: 275px;
    height: 350px;
    margin-top: 45px;

    background: rgba(0, 0, 0, 0.75);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.countContainer::after {
    content: '';
    position: absolute;
    width: 450px;
    height: 450px;
    background-image: conic-gradient(transparent, transparent, transparent, ${props => props.theme.thirdColor});
    animation: 4s linear infinite;
    animation-name: ${RotationBorder};
    animation-delay: -2s;
}


.countContainer::before {
    content: '';
    position: absolute;
    width: 450px;
    height: 450px;
    background-image: conic-gradient(transparent, transparent, transparent, ${props => props.theme.secondColor});
    animation: 4s linear infinite;
    animation-name: ${RotationBorder};
}

.countContainer span {
    position: absolute;
    inset: 5px;
    background: ${props => props.theme.mainBg};
    border-radius: 16px;
    z-index: 1;
}

/* Bubbles Animation */
.bubbleContainer {
    top: 0;
    left: 0;
    position: absolute;
    width: 125vw;
    height: 100vh;
    
    min-width: 800px;
    min-height: 650px;
    overflow: hidden;

}

.bubbles {
    position: relative;
    display: flex;
}

`

export const Bubbles = styled.span.attrs(props => ({
    var: `${props.var}`
}))`

position: relative;
width: 22px;
height: 16px;
background: ${props => props.theme.secondColor};
margin: 0 4px;
border-radius: 50%;
box-shadow: 0 0 0 5px ${props => props.theme.boxShadowAnimate}, 0 0 0 12px ${props => props.theme.boxShadowAnimate}, 
0 0 0 20px ${props => props.theme.boxShadowAnimate};
animation: 15s linear infinite;
animation-name: ${UpAnimation};
animation-duration: calc(80s / ${props => props.var});

:nth-child(even) {
    background: ${props => props.theme.thirdColor};
    box-shadow: 0 0 0 5px ${props => props.theme.boxShadowAnimateTC}, 0 0 0 12px ${props => props.theme.boxShadowAnimateTC}, 
    0 0 0 20px ${props => props.theme.boxShadowAnimateTC};

}

`