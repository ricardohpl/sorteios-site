import styled from 'styled-components'


export const StyledFooter = styled.footer`

grid-area: 'footer';
width: 100vw;
text-align: center;
min-height: 60px;

background-color: ${props => props.theme.mainColor};
color:  ${props => props.theme.secondColor};
padding: 10px;

font-size: 14px;


/* Responsivo */
@media (max-width: ${props => props.theme.smallScreens}) {
min-height: 50px;
padding: 8px;
font-size: 12px;

}

@media (max-width: ${props => props.theme.smallScreens}) {
min-height: 40px;
padding: 5px;
font-size: 11px;

}

`