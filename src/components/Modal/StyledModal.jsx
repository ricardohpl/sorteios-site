import styled from "styled-components";

export const StyledModal = styled.div`
    
height: 100vh;
min-height: 550px;
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
/* cursor: pointer; */


.modal {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    min-width: 600px;


    margin-top: 2vh;
    padding: 1px;

    backdrop-filter: blur(5px);
    
    position: relative;
    cursor: default;

    background: ${props => props.theme.mainBg};
    
}


.botaoFechar {
    position: absolute;
    top: 5px;
    right: 5px;
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

`