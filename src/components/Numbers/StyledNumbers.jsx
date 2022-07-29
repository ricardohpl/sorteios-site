
import styled from 'styled-components'

export const StyledNumbers = styled.div`

display: flex;
justify-content: center;

padding: 10px;
margin: 5px 30px;
height: 100%;
min-height: 500px;
min-width: 450px;
width: 60%;
text-align: center;

color: ${props => props.theme.thirdColor};

.loading {
    margin: auto;
    font-size: 22px;
    font-weight: 500;
    color:  ${props => props.theme.mainColor};
}

.center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    color: ${props => props.theme.secondColor};
    font-family: 'Shadows Into Light', cursive;
    font-size: 42px;
    font-weight: 600;
    padding: 10px;
}

.numbers {
    margin: 15px 10px 0 5px;
}

.quantity {
    margin-left: 25px;
}


.center .input {
    height: 30px;
    width: 125px;
    margin-left: 10px;
    padding: 2px 5px 0 5px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
}

.labelHelp {
    display: block;
    margin-top: 2px;
    font-size: 14px;
    text-align: center;
    color: ${props => props.theme.secondColor};
}

.checkbox {
    color:  ${props => props.theme.thirdColor};
    cursor: pointer;
}

.checkboxLable {
    margin-left: 10px;
    cursor: pointer;
    text-align: center;
}


// Modal
#animateContainer {
    top: 0px;
    left: 0;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -5;
    border-radius: 12px;
    background-image: ${props => props.theme.bgGradient};
    min-width: 800px;
    min-height: 650px;

    overflow: hidden;
}


.logoModalName {
    color: ${props => props.theme.thirdColor};
    margin-top: 20px;
}

@media (max-width: ${props => props.theme.mediumScreens}) {

/* min-width: 450px; */
padding: 5px;

.title {
    font-size: 32px;
    padding: 5px;
}

.center .input {
    height: 25px;
    width: 95px;
    margin-left: 5px;
    padding: 2px 5px 0 5px;
    
    font-size: 12px;
}

.numbers {
    margin: 5px 5px 0 5px;
}

.numbersLabel {
    font-size: 14px;
}

.labelHelp {
    font-size: 12px;
}

}


@media (max-width: ${props => props.theme.smallScreens}) {

min-width: 300px;
padding: 5px;

.title {
    font-size: 30px;
    padding: 5px;
}

.center .input {
    height: 20px;
    width: 85px;
    margin-left: 5px;
    padding: 1px 3px 0 5px;
    
    font-size: 10px;
}

.numbers {
    margin: 5px 5px 0 5px;
}

.quantity {
    margin-left: 25px;
}

.numbersLabel {
    font-size: 12px;
}

.labelHelp {
    font-size: 12px;
}

.checkbox {
    margin-left: 5px;
}

.checkboxLable {
    margin-left: 5px;
    font-size: 12px;
}

.logoModalName {
    font-size: 20px;
}

}

`
