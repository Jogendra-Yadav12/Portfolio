import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiInstagram} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'


export default function Headersocial() {
  return (
    <div className='header_socials'>
    <a href='https://linkedin.com/in/jogendra-yadav-1b1a4b228' target='__blank'><BsLinkedin/></a>
    <a href='https://instagram.com/fire_boy_aj' target='__blank'><SiInstagram/></a>
    <a href='https://leetcode.com/jogendrayadav/' target='__blank'><SiLeetcode/></a>
    </div>
  )
}
