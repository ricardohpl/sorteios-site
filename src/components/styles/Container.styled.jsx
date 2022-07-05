
import styled from 'styled-components'

export const Container = styled.div`

width: ${(props) => props.w};
min-width: ${(props) => props.minW};
height: ${(props) => props.h};
overflow-y: auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin-top: 7%;
padding: 20px;

background-color: ${props => props.theme.mainBg};
border: 3px solid ${props => props.theme.secondColor};
box-shadow: ${props => props.theme.mainBoxShadow};
border-radius: 5px;

color: ${props => props.theme.thirdColor};
font-weight: 600;

position: relative;

`