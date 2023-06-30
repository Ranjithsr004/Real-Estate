import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./Residency.css"
import data from '../../slider.json'
import { sliderSettings } from '../../common.js'


const Residency = () => {
  return (
    <section className='res-wrap' id='Residencies'>
        <div className='res-container'>
            <div className='res-head'>
               <span className='res-text'>Best Choices</span> 
               <span className='res-text2'>Popular Residencies</span>
            </div>
            <Swiper {...sliderSettings}>
              <SlidersButtons />
              {
                data.map((card,i) => (
                  <SwiperSlide key={i}>
                    <div className='res-card'>
                      <div className='res-img-container'>
                      <img src={card.image} alt="house" />
                      </div>
                      <span className='res-price'>
                        <span style={{color: "blue"}}>₹</span>
                        <span>{card.price}</span>
                      </span>
                      <span className='res-text2'>{card.name}</span>
                      <span className=''>{card.detail}</span>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
        </div>
    </section>
  )
}

export default Residency

const SlidersButtons = () => {
  const swiper = useSwiper()
  return (
    <div className='res-button'>
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}