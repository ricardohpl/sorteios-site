
import styled from 'styled-components'


export const StyledNames = styled.div`

display: flex;
justify-content: center;
padding: 15px;
width: 60%;
height: 100%;
min-height: 600px;
min-width: 650px;

color: ${props => props.theme.thirdColor};

.center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    
}

.loading {
    margin: auto;
    font-size: 22px;
    color:  ${props => props.theme.mainColor};
}

.title {
    color:  ${props => props.theme.secondColor};
    font-family: 'Shadows Into Light', cursive;
    font-size: 42px;
    font-weight: 600;
    padding: 20px;
}

.checkbox {
    margin: 5px 8px;
    color:  ${props => props.theme.thirdColor};
}

.displayCount {
    font-size: 46px;
    font-weight: 600;
    
}

.namesContainer {
    position: relative;
    width: 60%;
    height: 150px;
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
#videoModal {
    top: 0px;
    left: -45px;
    position: absolute;
    width: 110vw;
    z-index: -5;
    border-radius: 12px;
    background-image: ${props => props.theme.bgGradient};
}

#videoModal video {
    width: 110vw;

}

.results {
    margin: auto;
    width: 60%;
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid ${props => props.theme.secondColor};
    box-shadow: ${props => props.theme.secondBoxShadow};
    border-radius: 5px;
    padding: 10px 25px;
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
    color:  ${props => props.theme.mainColor};
    z-index: 5;
    
}

.displayName p {
    margin: auto;
    width: 100%;
    font-weight: 600;
    padding: 10px;

}

`