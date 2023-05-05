import React from 'react'
import './projects.css'
import AV from '../../assets/Photo.jpg'
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar:AV,
    name:'Grocery Store',
    review:`Grocery Store is an e-commerce website template designed for online grocery stores.
    This beautifully crafted template makes use of clean HTML5, CSS3, and Bootstrap in a Frontend
    & Python, Django, SQLite.This grocery template will be a perfect fit.`
  },
  {
    avatar:AV,
    name:'Portfolio',
    review:`Project-based portfolios are created around a specific project or assignment. 
     They are useful for showcasing student progress on a particular task or goal.`
  }
]

export default function Portfolio() {
  return (
    <section id='projects'>
      <h2>I have done these projects</h2>
      <h5>Swap for more</h5>

      <Swiper className='container projects_container'
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide key={index} className='projects'>
              <div className='client_avatar'>
              <img src={avatar} alt=''/>
              </div>
              <h5 className='client_name'>{name}</h5>
                <small className='client_review'> {review} </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
