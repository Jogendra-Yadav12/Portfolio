import React from 'react'
import './education.css'

export default function Education() {
  return (
    <section id='education'> 
        <h2>Qualification</h2>
        <h5>My Personal journey</h5>
      <div className='container education_container'>
      <div className='education_frontend'>
        <h2><span className='round'></span> Master's of Computer Application [2021-2023]</h2>
          <h3>Pranveer Singh Institute Of Technology <br/> Kanpur </h3>
          <h2><span className='round'></span> Bachelor of Science in Mathematics [2018-2021]</h2>
          <h3>CSJM University <br/> Kanpur </h3>
          <h2><span className='round'></span> Intermediate [2017-2018]</h2>
          <h3>Rosy Public School <br/> Farrukhabad </h3>
          <h2><span className='round'></span> High School [2015-2016]</h2>
          <h3>Rosy Public School <br/> Farrukhabad </h3>
      </div>
      </div>
    </section>
  )
}
