
import styled from 'styled-components'


export const StyledNames = styled.div`

display: flex;
justify-content: center;
padding: 15px;
width: 60%;
height: 100%;
min-height: 600px;

min-width: 650px;

.center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    
}

.title {
    color:  ${props => props.theme.secondColor};
    font-family: 'Shadows Into Light', cursive;
    font-size: 42px;
    font-weight: 600;
}

.checkbox {
    margin: 5px 8px;
    color:  ${props => props.theme.thirdColor};
}

.namesContainer {
    position: relative;
    width: 60%;
    height: 150px;
    /* width: 55%; */
    min-width: 450px;
    margin: 25px 10px;
    padding: 10px;
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
    top: -25px;
    font-size: 14px;
    opacity: 1;
    padding: 5px 20px;
}

// Modal
.modal {
    min-width: 660px;
    width: 82vw;
    max-width: 1050px;
    height: 45vw;
    min-height: 300px;
    max-height: 600px;

    text-align: center;
    border-radius: 4%;
}

#videoModal {
    top: -5px;
    left: -15px;
    position: absolute;
    width: 85vw;
    max-width: 1100px;
    z-index: -5;
    border-radius: 12px;
    border: 2px solid ${props => props.theme.secondColor};
}

.results {
    margin: auto;
    width: 40%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding: 10px;
}

.modalButtons {
    display: flex;
    justify-content: space-around;
}

.logoModalName {
    color: ${props => props.theme.thirdColor}
}


/* Display Names Component */
.text {
    color: ${props => props.theme.thirdColor};
    font-size: 36px;
    margin-top: 20px;
}

.displayName {
    height: 70px;
    width: 100%;
    font-size: 36px;
    color: ${props => props.theme.thirdColor};
    z-index: 5;
    
}

.displayName p {
    margin: auto;
    width: 100%;
    font-weight: 600;
    padding: 10px;

}

`