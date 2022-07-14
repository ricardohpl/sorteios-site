import styled from "styled-components"

export const StyledMain = styled.main`

display: grid;
overflow-x: auto;

grid-template-columns: 1fr;
grid-template-rows: 
    75px
    1fr
    30px;
    
grid-template-areas: 
    "header"
    "content"
    "footer";
    height: 100vh;


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
}

/* Footer */
footer.footer {
    grid-area: 'footer';
    width: 100VW;
    text-align: center;

    background-color: ${props => props.theme.mainColor};
    color:  ${props => props.theme.secondColor};
    padding: 5px;
    
    font-size: 14px;
}

/* Buttons */
button {
    margin: 15px;
    padding: 5px;
    border-radius: 5px;

}

button:hover {
    cursor: 'pointer'

}

/* Page Not Found */
.notFound {
    width: 55%;
    /* height: 80%; */
    color: ${props => props.theme.errorText};
    /* margin: auto; */
    text-align: center;
}

`
