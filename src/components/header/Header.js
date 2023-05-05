import React from 'react'
import './header.css'
import CTA from './CTA'
import IMG from '../../assets/Photo.jpg'
import Headersocial from './Headersocial'



export default function Header() {
  return (
    <header id='header'>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Jogendra Yadav</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <Headersocial/>
        <div className='me header_container'>
        <img src={IMG} alt='profile'/>
        </div>

        <a href='#contact' className='scroll_bar'>Scroll Down</a>
      </div>
    </header>
  )
}
