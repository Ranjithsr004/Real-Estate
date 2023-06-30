import React from 'react'
import './Content.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion, spring} from 'framer-motion'

const Content = () => {
  return (
   <section className="content-wrap" id='Content'>
    <div className='content-container'>
        <div className='content-left'>
            <div className='content-title'>
                <div className='orange-circle'></div>
                <motion.h1
                initial={{y:"2rem",opacity:0}}
                animate={{y:0, opacity: 1}}
                transition= {{
                    duration:2,
                    type: "spring"
                }}
                >
                    Explore <br />most suitable <br/>property here!
                </motion.h1>
            </div>
            <div className='content-info'>
                <span className='secondary-text'>Find a variety of properties that suit you very easily </span>
                <span className='secondary-text'>Forget all problems in choosing a residence for you</span>
            </div>
            <div className='search-bar'>
                <HiLocationMarker color = "blue" size={25}/>
                <input type='text'
                placeholder='Enter text here'
                />
                <button className='button'>Search</button>
            </div>
            <div className='status'>
                <div className='status2'>
                    <span>
                        <CountUp start={8800} end={9000} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondary-text'>Premium Products</span>
                </div>
                <div className='status2'>
                    <span>
                        <CountUp start={1900} end={2000} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondary-text'>Happy Customers</span>
                </div>
                <div className='status2'>
                    <span>
                        <CountUp end={28}/>
                        <span>+</span>
                    </span>
                    <span className='secondary-text'>Award Winning</span>
                </div>
            </div>
        </div>
        <div className='content-right'>
            <motion.div 
            initial={{x:"7rem",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{
                duration:2,
                type:spring
            }}
            className='img-container'>
                <img src="./building.png" alt="building" />
            </motion.div>
        </div>
    </div>
   </section>
  )
}

export default Content