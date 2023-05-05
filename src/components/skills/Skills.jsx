import React from 'react'
import './skills.css'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {SiPython} from 'react-icons/si' 
import {SiDjango} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'

export default function Skills() {
  return (
    <section id='skills'>
      <h2>My Skills</h2>
      <div className='container skills_container'>
        <div className='skills_frontend'>
          <h3>Frontend Development</h3>
          <div className='skills_content'>
            <article className='skills_details'>
            <AiFillHtml5/>
            <h4>HTML</h4>
            <small className='text-light'>Beginner</small>
            </article>
            <article className='skills_details'>
            <FaCss3Alt/>
            <h4>CSS</h4>
            <small className='text-light'>Beginner</small>
            </article>
            <article className='skills_details'>
            <SiJavascript/>
            <h4>Javascript</h4>
            <small className='text-light'>Beginner</small>
            </article>      
            <article className='skills_details'>
            <SiBootstrap/>
            <h4>Bootstrap</h4>
            <small className='text-light'>Beginner</small>
            </article> 
          </div>
        </div>


        <div className='skills_frontend'>
          <h3>Backend Development</h3>
          <div className='skills_content'>
            <article className='skills_details'>
            <SiPython/>
            <h4>Python</h4>
            <small className='text-light'>Beginner</small>
            </article>
            <article className='skills_details'>
            <SiDjango/>
            <h4>Django</h4>
            <small className='text-light'>Beginner</small>
            </article>
            <article className='skills_details'>
            <SiMysql/>
            <h4>SQL</h4>
            <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
