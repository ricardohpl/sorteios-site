
import styled from 'styled-components'

export const StyledMenu = styled.aside`

margin: 15px;
color: ${props => props.theme.secondColor};
border-radius: 5px;

.menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding: 5px;
    height: 325px;
    width: 75px;
    background-color: ${props => props.theme.mainBg};
    border: 3px solid ${props => props.theme.secondColor};
    box-shadow: ${props => props.theme.mainBoxShadow};
    border-radius: 5px;
    transition: 0.7s;
    overflow: hidden;
}

.menuIcon {
    font-size: 36px;
    margin: 20px auto;
}

ul {
    list-style: none;
}

li {
    margin: 20px 5px;
    font-size: 28px;
    position: relative;
    border-radius: 5px;
}

.menuItem {
    margin-left: 15px;
    font-size: 22px;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 45px;
    padding: 5px;
}

.menu:hover {
    width: 215px;
}


li:hover  {
    background-color: ${props => props.theme.secondColor};
    box-shadow: ${props => props.theme.mainBoxShadow};
}


`