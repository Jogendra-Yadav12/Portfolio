import React from 'react'
import './nav.css'
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";

export default function Nav() {
  return (
    <nav>
      <a href='#header' className='active'><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#skills'><BiBook/></a>
      <a href='#projects'><RiServiceLine/></a>
      <a href='#contact'><BiMessageSquareDetail/></a>
    </nav>
  )
}
