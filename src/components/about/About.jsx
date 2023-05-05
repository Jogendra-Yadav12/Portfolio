import React from 'react'
import './About.css'
import ME from '../../assets/IMG_20181125_015823.jpg'
import { FaAward } from 'react-icons/fa'
import {GrCertificate} from 'react-icons/gr'


export default function About(){
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='about profile' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h3>Achivements</h3>
              <ol>
              <li>5 Stars Python on HacherRank</li>
              <li>3 Stars SQL on HacherRank</li>
              <li>100+ Questions on Leetcode</li>
              <li>3 Stars Problem Solving on HacherRank</li>
              </ol>
            </article>
            <article className='about_card'>
              <GrCertificate className='about_icon' />
              <h3>Certificates</h3>
              <li><dl><dt>CCC [05-feb-2020]</dt>
              <dd>Certificate approoved by NIELIT</dd>
              </dl></li>
              <li><d1><dt>HTML [05-May-2022]</dt>
              <dd>Certificate Issued by w3docs
              </dd>
              </d1></li>
              <li><d1><dt>Python [20-May-2022]</dt>
              <dd>Certificate Issued by HackerRank
              </dd>
              </d1></li>
              <li><d1><dt>SQL [15-June-2022]</dt>
              <dd>Certificate Issued by HackerRank</dd>
              </d1></li>
            </article>
          </div>

          <p>
          Looking for an opportunity to gain new experience
          and enhance my abilities in order to learn and
          contribute to the company's growth.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
