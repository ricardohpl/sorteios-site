import React from 'react'
import { StyledModal } from './StyledModal'


const Modal = (props) => {
  return (
    <StyledModal display={ props.display } >
        { props.children }
    </StyledModal>
  )
}

export default Modal