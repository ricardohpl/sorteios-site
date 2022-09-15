
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`

text-decoration: none;
color: ${props => props.color || props.theme.thirdColor};
text-decoration:  ${props => props.underline ? 'underline' : ''};
cursor: pointer;

margin: 8px;


`
