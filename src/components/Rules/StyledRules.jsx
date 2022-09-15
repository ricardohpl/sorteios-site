import styled from 'styled-components'


export const StyledRules = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin: 10px 2px;
text-align: center;
padding: 10px;


.logoModal {
    color: ${props => props.theme.thirdColor}
}

div p.smallText {
    margin: 10px auto;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    padding: 10px;
    font-weight: 600;
    border-radius: 5px;
}

span.linkModal {
    text-decoration: underline;
    cursor: pointer;
}

.modalTitle {
    font-size: 16px;
    margin: 5px;
    margin-top: 20px;
    color: ${props => props.theme.secondColor};
}

.modalDescription {
    font-size: 14px;
    font-weight: 400;
}

@media (max-width: ${props => props.theme.smallScreens}) {

.modalTitle {
    font-size: 14px;
}

.modalDescription {
    font-size: 12px;
}

div p.smallText {
    font-size: 13px;
}

}

@media (max-width: ${props => props.theme.smallScreens}) {

    
.logoModal {
    font-size: 24px;

}

.modalTitle {
    font-size: 13px;
}

.modalDescription {
    font-size: 11px;
}

div p.smallText {
    font-size: 11px;
}

}

`