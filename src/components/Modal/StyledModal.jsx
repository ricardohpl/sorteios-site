import styled from "styled-components";

export const StyledModal = styled.div`
    
min-height: 100vh;
width: 100vw;
min-width: 650px;

display: ${props => props.display};
justify-content: center;
align-items: center;
position: absolute;

top: 0;
left: 0;
z-index: 9999;

background: ${props => props.theme.modalBackground}; 
background-image: ${props => props.withBackground ? props.theme.bgGradient : ''};

padding: 10px 5px;

.modal {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1px;
    margin: auto;
    
    position: relative;
    cursor: default;

    min-width: 660px;
    width: 85vw;
    max-width: 950px;
    height: 50vh;
    min-height: 550px;

    text-align: center;
    border-radius: 25px;
    background: ${props => props.theme.mainBg};
    box-shadow: ${props => props.theme.secondBoxShadow};
    border: 2px solid ${props => props.theme.secondColor};

    overflow: auto;
}


.botaoFechar {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 25px;
    width: 25px;
    cursor: pointer;
    border: none;
    background: transparent;
    font-size: 26px;
    color: ${props => props.theme.thirdColor};
    padding: 1px;
}

.botaoFechar:hover {
    opacity: 0.7;
}

@media (max-width: ${props => props.theme.mediumScreens}) {

min-width: 500px;

.modal {
    min-width: 480px;
    min-height: 500px;
}

.botaoFechar {
    font-size: 20px;
}

}

@media (max-width: ${props => props.theme.smallScreens}) {

    
min-width: 275px;

.modal {
    min-width: 280px;
}

.botaoFechar {
    top: 1px;
    right: 1px;
    font-size: 16px;
}


}


`