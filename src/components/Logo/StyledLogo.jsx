
import styled from 'styled-components'

export const StyledLogo = styled.div`

margin-top: 1%;
font-family: 'Rubik Moonrocks', cursive;
font-size: 42px;
letter-spacing: 7px;

padding: 5px;
color:  ${props => props.theme.mainColor};


@media (max-width: ${props => props.theme.mediumScreens}) {

font-size: 36px;

}

@media (max-width: ${props => props.theme.smallScreens}) {

font-size: 30px;

}

`