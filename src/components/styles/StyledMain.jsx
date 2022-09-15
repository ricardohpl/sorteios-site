import styled from "styled-components"


export const StyledMain = styled.main`

display: grid;

grid-template-columns: 100%;
grid-template-rows: 
    65px
    1fr
    30px;
    
grid-template-areas: 
    "header"
    "content"
    "footer";
    height: 100vh;

overflow-x: hidden;

/* Header Grid */
header.header {
    grid-area: 'header';
    display: flex;
    justify-content: center;
}

/* Menu Grid */
aside.menu-area {
    grid-area: 'menu';
}

/* Content Grid */
div.content {
    grid-area: 'content';

    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;

}

/* Buttons */
button:hover {
    cursor: 'pointer'
}

/* Page Not Found */
.notFound {
    width: 55%;
    color: ${props => props.theme.errorText};
    text-align: center;
}

/* Responsive */
@media (max-width: ${props => props.theme.mediumScreens}) {

div.content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    margin: 1px;
}

}

@media (max-width: ${props => props.theme.smallScreens}) {

div.content {
    margin: 0;
}

}

`
