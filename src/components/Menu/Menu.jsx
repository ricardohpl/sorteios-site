import React from 'react'

import { StyledLink } from '../styles/StyledLink'
import { StyledMenu } from './StyledMenu'

import { FaHome, FaClipboardList, FaSortNumericUp } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";


const Menu = () => {
  return (
    <StyledMenu >
      <div className="menu">
        <p className='menuIcon'> <IoMenuOutline /> </p>
        <ul className='itens'>
          <li ><StyledLink to={'/'} > <FaHome /> <span className='menuItem'>SORTEIA</span>  </StyledLink></li>
          <li ><StyledLink to={'/numbers'} > <FaSortNumericUp /> <span className='menuItem'>NÚMEROS</span>  </StyledLink></li>
          <li ><StyledLink to={'/names'} > <FaClipboardList /> <span className='menuItem'>NOMES</span>  </StyledLink></li>
        </ul>
      </div>
    </StyledMenu>
  )
}

export default Menu