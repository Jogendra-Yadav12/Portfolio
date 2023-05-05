import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


export default function Footer() {
  return (
    <footer id='footer'>
      <a href='#header' className='footer_logo'>Jogendra Yadav</a>

      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
      <a href='https://facebook.com'><AiFillFacebook/></a>
      <a href='https://instagram.com'><BsInstagram/></a>
      <a href='https://twitter.com'><BsTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small> &copy; Jogendra Yadav. All rights reserved.</small>
      </div>
    </footer>
  )
}
