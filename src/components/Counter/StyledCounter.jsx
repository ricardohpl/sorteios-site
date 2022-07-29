import styled from "styled-components";

export const StyledCounter = styled.div`

margin: auto;
font-size: 52px;

.countContainer {
    position: relative;
    width: 190px;
    height: 225px;
    margin-top: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    z-index: 9;

}

@media (max-width: ${props => props.theme.mediumScreens}) {

font-size: 42px;
    
.countContainer {

    width: 175px;
    height: 200px;

}

}

`