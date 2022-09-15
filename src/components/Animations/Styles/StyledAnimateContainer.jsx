import styled from "styled-components";

export const StyledAnimateContainer = styled.div`

#animateContainer {
    top: 0px;
    left: 0;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -5;
    border-radius: 12px;
    background-image: ${props => props.theme.bgGradient};
    min-height: 650px;

    overflow: hidden;
}

`