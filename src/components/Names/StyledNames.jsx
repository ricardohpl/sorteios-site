
import styled from 'styled-components'

export const StyledNames = styled.div`

display: flex;
justify-content: center;
align-items: center;
padding: 15px;
width: 60%;
height: 100%;
min-height: 600px;
min-width: 650px;
text-align: center;

color: ${props => props.theme.thirdColor};

.center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
}

.quantity {
    height: 40px;
    width: 90px;
    margin-left: 10px;
    padding: 2px 5px 0 10px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
}

.labelHelp {
    display: block;
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 14px;
    color: ${props => props.theme.secondColor};
}

.loading {
    margin: auto;
    font-size: 22px;
    font-weight: 500;
    color:  ${props => props.theme.mainColor};
}

.title {
    color:  ${props => props.theme.secondColor};
    font-family: 'Shadows Into Light', cursive;
    font-size: 42px;
    font-weight: 600;
    padding: 10px;
    margin-bottom: 15px;
}

.checkbox {
    margin: 15px 8px;
    color:  ${props => props.theme.thirdColor};
}

.displayCount {
    font-size: 66px;
    font-weight: 600;
    z-index: 2;
}

.namesContainer {
    position: relative;
    width: 60%;
    height: 150px;
    min-width: 450px;
    padding: 5px;
}

.namesArea {
    height: 75px;
    width: 100%;
    min-width: 450px;
    margin-top: 30px;
    padding: 35px 20px 10px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.thirdColor};
    background: transparent;
    font-size: 20px;
    color: ${props => props.theme.thirdColor};

    position: absolute;
    top: 0;
    left: 0;
}

.namesLabel {
    position: absolute;
    top: 20px;
    left: 8px;
    padding: 10px 5px;
    font-size: 16px;
    cursor: text;
    pointer-events: none;
    transition: 0.8s;
    opacity: 0.8;
    color: ${props => props.theme.secondColor};
}

.namesArea:focus ~ .namesLabel,
.namesArea:valid ~ .namesLabel {
    top: -42px;
    transform: scale(0.9);
    opacity: 1;
    padding: 5px 10px;
}

// Modal
.modalButtons {
    z-index: 9;
}


.logoModalName {
    color: ${props => props.theme.thirdColor}
}


/* Display Names Component */
.displayName {
    height: 70px;
    width: 100%;
    color:  ${props => props.theme.thirdColor};
    font-size: 28px;
    z-index: 99;

}

.displayName p {
    margin: auto;
    width: 100%;
    padding: 10px;
}

/* Responsivo */
@media (max-width: ${props => props.theme.mediumScreens}) {
    
min-width: 500px;

.quantity {
    height: 40px;
    width: 90px;
    margin-left: 10px;
    padding: 2px 5px 0 10px;
    font-size: 14px;
}

.labelHelp {
    margin-top: 3px;
    margin-bottom: 5px;
    font-size: 12px;
}

.loading {
    margin: auto;
    font-size: 18px;
}

.title {
    font-size: 36px;
    padding: 5px;
    margin-bottom: 10px;
}

.checkbox {
    margin: 10px 4px;
}

.checkboxLabel {
    font-size: 14px;
}

.displayCount {
    font-size: 52px;
}

.namesContainer {
    width: 80%;
    height: 120px;
    min-width: 350px;
    padding: 3px;
}

.namesArea {
    height: 75px;
    min-width: 350px;
    margin-top: 20px;
    padding: 25px 5px 5px;
    font-size: 16px;
}

.namesLabel {
    top: 20px;
    left: 4px;
    padding: 5px 1px;
    font-size: 14px;
}

}

@media (max-width: ${props => props.theme.smallScreens}) {
    
min-width: 300px;
min-height: 500px;
font-size: 14px;

.quantity {
    height: 30px;
    width: 65px;
    margin-left: 10px;
    padding: 2px 5px 0 10px;
    font-size: 12px;
}

.labelHelp {
    margin-top: 3px;
    margin-bottom: 5px;
    font-size: 11px;
}

.loading {
    margin: auto;
    font-size: 16px;
}

.title {
    font-size: 36px;
    padding: 5px;
    margin-bottom: 5px;
}

.checkbox {
    margin: 10px 4px;
}

.checkboxLabel {
    font-size: 14px;
}

.displayCount {
    font-size: 44px;
}

.namesContainer {
    width: 60%;
    height: 80px;
    min-width: 250px;
    padding: 3px;
    margin-top: 25px;
}

.namesArea {
    height: 75px;
    min-width: 250px;
    margin-top: 15px;
    padding: 25px 10px 5px;
    font-size: 14px;
}

.namesLabel {
    top: 18px;
    left: 5px;
    padding: 5px 1px;
    font-size: 11px;
}

}


`