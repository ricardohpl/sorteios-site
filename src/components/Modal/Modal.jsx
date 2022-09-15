import React from 'react'
import { StyledModal } from './StyledModal'


const Modal = (props) => {
  return (
    <StyledModal display={ props.display } withBackground={props.withBackground} >
        { props.children }
    </StyledModal>
  )
}

export default Modal