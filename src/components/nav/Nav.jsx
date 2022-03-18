import './nav.css';
import { useState } from 'react';
import { BsFiles } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';

export const Nav = () => {

  const [activeNav , setActiveNav ] = useState('#')
  
  const handleClick = (value) => {
    setActiveNav(value);
  }
  
  return (
    <nav >
      <a 
        href='#'
        className={ activeNav === '#' ? 'active' : '' }
        onClick={ () => handleClick('#') }
      >
        <AiOutlineHome/>
      </a>
      <a 
        href='#about'
        onClick={ () => handleClick('#about') }
        className={ activeNav === '#about' ? 'active' : '' }
      >
          <AiOutlineUser/>
      </a>
      <a 
        href='#experience'
        className={ activeNav === '#experience' ? 'active' : '' }
        onClick={ () => handleClick('#experience') }
      >
        <BiBook/>
      </a>
      <a 
        href='#portfolio'
        className={ activeNav === '#portfolio' ? 'active' : '' }
        onClick={ () => handleClick('#portfolio') }
      >
        <BsFiles/>
      </a>
      <a 
        href='#contact'
        className={activeNav === '#contact' ? 'active' : '' }
        onClick={ () => handleClick('#contact') }
      >
        <BiMessageSquareDetail/>
      </a> 
    </nav>
  )
}
