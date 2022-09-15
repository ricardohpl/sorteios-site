import styled, { keyframes } from "styled-components"


const RotationBorder = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`


export const StyledBorder = styled.div`

.border {
    position: relative;
    width: 99%;
    height: 99%;
    margin-top: 45px;
    padding: 8px;

    background: rgba(0, 0, 0, 0.75);
    box-shadow: ${props => props.theme.secondBoxShadow};
    
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    overflow: hidden;
}

.border::after {
    content: '';
    position: absolute;
    width: 400%;
    height: 400%;
    background-image: conic-gradient(transparent, transparent, transparent, ${props => props.theme.thirdColor});
    animation: 4s linear infinite;
    animation-name: ${RotationBorder};
    animation-delay: -2s;
}


.border::before {
    content: '';
    position: absolute;
    width: 400%;
    height: 400%;
    background-image: conic-gradient(transparent, transparent, transparent, ${props => props.theme.secondColor});
    animation: 4s linear infinite;
    animation-name: ${RotationBorder};
}

.border span {
    position: absolute;
    inset: 5px;
    background: ${props => props.theme.mainBg};
    border-radius: 16px;
    z-index: 1;
}

`

