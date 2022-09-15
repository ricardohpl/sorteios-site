import styled from 'styled-components'

export const StyledHome = styled.div`

height: 100vh;

min-width: 800px;
max-width: 100vw;
min-height: 750px;

display: flex;
text-align: center;
flex-direction: column;
align-items: center;
color: ${props => props.theme.secondColor};


.center {
    height: 100%;
    width: 100%;
    max-width: 975px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 1%;
}

.highlights {
    width: 100%;
    padding: 20px;

    text-align: center;
    font-size: 22px;
    
    border-radius: 5px;
    
}

.highlights p {
    width: 90%;
    margin: auto;
    color: ${props => props.theme.mainColor};
    font-weight: 500;
}

.highlights h3 {
    color: ${props => props.theme.secondColor};
    width: 70%;
    margin: 15px auto;
}

h3 {
    margin: 25px 15px;
    color: ${props => props.theme.secondColor};
}

p {
    margin: 5px 10px;
    color: ${props => props.theme.thirdColor};
}

.links {
    width: 100%;
    background-color: ${props => props.theme.mainColor};
    display: flex;
    justify-content: space-between;
    /* flex-wrap: wrap; */
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
    /* height: 225px; */
    border-radius: 5px;

    color: ${props => props.theme.secondColor};
    text-align: center;
    background-color: ${props => props.theme.mainColor};
    transition: 1.2s ease-out;
}

.linkContainer p {
    padding: 10px;
}


/* Responsive */
@media (min-width: ${props => props.theme.mediumScreens}) {
    
.linkContainer.left:hover {
    transform: scale(1.4) translateX(-75px) translateY(-30px);
}
    
.linkContainer.right:hover {
    transform: scale(1.4) translateX(75px) translateY(-30px);
}

}

@media (max-width: ${props => props.theme.mediumScreens}) {

font-size: 85%;
min-width: 500px;

.center {
    width: 95%;
}

.highlights {
    margin-top: 45px;
    width: 95%;
    padding: 5px;
    font-size: 18px;
}

.links {
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-bottom: 15px;
}

.linkSession {
    width: 100%;
    padding: 10px;
}

.linkSession.border {
    border-right: none;
    border-bottom: 2px solid ${props => props.theme.secondColor};
}

}

@media (max-width: ${props => props.theme.smallScreens}) {

min-width: 300px;

.highlights {
    font-size: 14px;
}

.links {
    width: 98%;
}

.linkSession {
    padding: 5px;
}

}

`