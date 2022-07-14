import styled from "styled-components";

export const StyledButton = styled.button`
    
border-radius: 10px;

padding: 10px 25px;

font-size: 16px;
font-weight: bold;
color: ${props => props.theme.mainColor};

cursor: pointer;

background-color: ${props => props.theme.secondColor};
border: 2px solid ${props => props.theme.mainColor};
box-shadow: ${props => props.theme.secondBoxShadow};

:hover {
    color:  ${props => props.theme.secondColor};
    background-color: ${props => props.theme.thirdColor} !important;
    border: 2px solid ${props => props.theme.secondColor};

}

:active {
    box-shadow: inset 1px 1px 4px 0px rgba(0, 0, 0, 0.8);
    opacity: 0.9;

}
`