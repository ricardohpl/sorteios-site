import styled, { keyframes } from "styled-components";

const UpAnimation = keyframes`
    0% {
        transform: translateY(100vh) scale(0);
    }
    100% {
        transform:  translateY(-10vh) scale(1);
    }
`

export const StyledBubbles = styled.div`
min-width: 1820px;


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
border-radius: 50%;
box-shadow: 0 0 0 5px ${props => props.theme.boxShadowAnimate}, 0 0 0 10px ${props => props.theme.boxShadowAnimate},
0 0 0 20px #e5216522, 0 0 0 30px #e5216611;
animation: 15s linear infinite;
animation-name: ${UpAnimation};
animation-duration: calc(80s / ${props => props.var});

:nth-child(even) {
    margin: 0 10px;
    background: ${props => props.theme.thirdColor};
    box-shadow: 0 0 0 5px ${props => props.theme.boxShadowAnimateTC},  0 0 0 15px ${props => props.theme.boxShadowAnimateTC},
    0 0 0 24px rgba(214, 214, 214, 0.22), 0 0 0 35px rgba(214, 214, 214, 0.11);
}


`
