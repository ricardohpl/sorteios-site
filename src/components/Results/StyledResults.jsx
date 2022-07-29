import styled from "styled-components";

export const StyledResults = styled.div`

height: 100%;
color: ${props => props.theme.secondColor};
font-size: 32px;

.text {    
    margin-top: 45px;
    color: ${props => props.theme.secondColor};
}

.results {
    margin: 15px auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 80%;
    max-height: 75%;
    
    padding: 5px;
    color: ${props => props.theme.thirdColor};
    border-radius: 5px;
}

.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.displayItens {
    margin: 10px;
    width: 450px;
    height: 50px;
    padding: 15px;
    color: ${props => props.theme.thirdColor};

    z-index: 9;
}


.displayItens p {
    margin-top: 15px;
    text-align: center;
}

.displayNumbers {
    margin: 15px 25px 10px 5px;
    width: 400px;
    max-height: 185px;
    max-width: 650px;
    padding: 20px;
    color: ${props => props.theme.thirdColor};

    overflow: auto;
    z-index: 9;
    text-align: center;
}

.buttonsContainer {
    margin: 25px auto;
    display: flex;
    justify-content: space-around;
    z-index: 9;
}

@media (max-width: ${props => props.theme.mediumScreens}) {

font-size: 28px;

.text {    
    margin-top: 45px;
}

.displayItens {
    margin: 2px;
    width: 325px;
    height: 50px;
    padding: 5px;

.displayNumbers {
    margin: 5px 15px 5px 8px;
    max-height: 130px;
    max-width: 450px;
    padding: 15px;

    min-width: 125px;
    min-height: 80px;
}

}

.buttonsContainer {
    margin: 10px auto;
}


}

@media (max-width: ${props => props.theme.smallScreens}) {

font-size: 22px;

.text {    
    margin-top: 45px;
}

.displayItens {
    margin: 5px;
    width: 175px;
    height: 50px;
    padding: 2px;
}


.displayNumbers {
    margin: 5px 15px 5px 2px;
    max-width: 325px;
    padding: 10px;
    width: 80%;
    height: 90%;
    min-width: 125px;
    min-height: 80px;
}

.buttonsContainer {
    margin: 5px auto;
}

}

`