
import styled from 'styled-components'

export const Container = styled.div`

width: ${(props) => props.w};
min-width: ${(props) => props.minW};
min-height: ${(props) => props.minH};
height: ${(props) => props.h};
overflow-y: auto;

display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

margin: 2% auto 0;
padding: 15px;

background-color: ${props => props.theme.mainBg};
border: 3px solid ${props => props.theme.secondColor};
box-shadow: ${props => props.theme.mainBoxShadow};
border-radius: 5px;

color: ${props => props.theme.thirdColor};
font-weight: 600;

position: relative;


@media (max-width: ${props => props.theme.mediumScreens}) {

min-width: 490px;
margin-top: 1%;

}


@media (max-width: ${props => props.theme.smallScreens}) {

min-width: 300px;
padding: 10px;

}


`