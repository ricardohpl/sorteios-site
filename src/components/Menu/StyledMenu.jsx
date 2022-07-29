
import styled from 'styled-components'

export const StyledMenu = styled.aside`

color: ${props => props.theme.secondColor};
border-radius: 5px;
margin: 5px;

.menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    height: 325px;
    width: 75px;
    background-color: ${props => props.theme.mainBg};
    border: 3px solid ${props => props.theme.secondColor};
    box-shadow: ${props => props.theme.mainBoxShadow};
    border-radius: 5px;
    transition: 0.7s;

    margin: 15px auto;
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
    margin: 20px 10px;
    font-size: 1.4rem;
    position: relative;
    border-radius: 5px;
    height: 40px;
}

.menuItem {
    margin-left: 15px;
    font-size: 1.4rem;
    position: absolute;
    top: 0;
    left: 45px;
    padding: 5px;
}

li:hover  {
    background-color: ${props => props.theme.secondColor};
    box-shadow: ${props => props.theme.mainBoxShadow};
}

/* Responsive */
@media (min-width: ${props => props.theme.mediumScreens}) {
.menu:hover {
    width: 215px;
}

}

@media (max-width: ${props => props.theme.mediumScreens}) {

.menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 90%;
}

.menuIcon {
    font-size: 2rem;
    margin: 25px 10px;
    height: 40px;
}

ul {
    display: flex;
    align-items: center;
    width: 450px;
}

li {
    margin: 5px auto;
    font-size: 1.5rem;
    padding: 5px 1px;
    
    height: 45px;
}

.menuItem {
    margin: 0;
    font-size: 1.0rem;
    opacity: 1;
    position: relative;
    left: 0;
    padding: 1px;
}

}


@media (max-width: ${props => props.theme.smallScreens}) {

margin: 0;
padding: 0;

.menu {
    min-width: 280px;
    justify-content: space-around;
    width: 95%;
    margin: 0 auto;
    height: 50px;
}

.menuIcon {
    font-size: 1.6rem;
    padding: 5px 0;
}

ul {
    width: 75%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    min-width: 255px;
}

li {
    font-size: 0.9rem;
    padding: 12px 0;
}

.menuItem {
    font-size: 0.75rem;
}

}

`