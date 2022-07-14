import styled from 'styled-components'


export const StyledHome = styled.div`

height: 100vh;
width: 100vw;
max-width: 100vw;
color: ${props => props.theme.secondColor};
text-align: center;
display: flex;
flex-direction: column;
align-items: center;


.center {
    height: 100%;
    width: 100%;
    max-width: 975px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 1%;
    
}

.highlights {
    /* background-color: ${props => props.theme.secondColor}; */
    
    /* width: 100vw; */
    width: 100%;
    padding: 20px;

    text-align: center;
    font-size: 22px;
    
    border-radius: 5px;
}

.highlights p {
    width: 70%;
    margin: auto;
    color: ${props => props.theme.mainColor};

}

.highlights h3 {
    color: ${props => props.theme.secondColor};
    width: 70%;
    margin: auto;
}

h3 {
    margin: 25px 15px;
    color: ${props => props.theme.secondColor};

}

p {
    margin: 5px 15px;
    color: ${props => props.theme.thirdColor};

}


.links {
    width: 100%;
    height: 250px;
    background-color: ${props => props.theme.mainColor};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 4%;
    border-radius: 5px;

}

.linkSession {
    width: 50%;
    height: 100%;
}

.linkSession.border {
    border-right: 2px solid ${props => props.theme.secondColor};

}


.linkContainer {
    display: flex;
    flex-direction: column;
    height: 225px;
    border-radius: 5px;

    color: ${props => props.theme.secondColor};
    text-align: center;
    background-color: ${props => props.theme.mainColor};
    transition: 1.2s ease-out;

}

.linkContainer:hover {
    transform: scale(1.3);

}

footer.footer {
    grid-area: 'footer';
    width: 100VW;
    text-align: center;

    background-color: ${props => props.theme.mainColor};
    color:  ${props => props.theme.secondColor};
    padding: 5px;

    font-size: 14px;
}

`