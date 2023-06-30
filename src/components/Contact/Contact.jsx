import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'


const Contact = () => {
  return (
    <section className='contact-wrap' id='Contactus'>
        <div className='contact-container'>
            <div className='contact-left'>
                <span className='blueText'>Our Contacts</span>
                <span className='primaryText'>Feel Free to Contact us</span>
                <span className='SecondaryText'>We are committed to assisting you by offering top-quality products 
                <br/>that meet your needs and expectations.</span>

                <div className='contactModes'>
                    <div className='row'>
                        <div className='mode'>
                            <div className='flexStart'>
                                <div className='icon'>
                                    <MdCall size={25} />
                                </div>
                                <div className='detail'>
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'> +915876543321</span>
                                </div>
                            </div>
                            <div className='button'>Call Now</div>
                        </div>
                            {/* 2 */}
                        <div className='mode'>
                            <div className='flexStart'>
                                <div className='icon'>
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className='detail'>
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'> +915876543321</span>
                                </div>
                            </div>
                            <div className='button'>Chat Now</div>
                        </div>
                        
                    </div>

                    {/* 3 */}

                    <div className='row'>
                        <div className='mode'>
                            <div className='flexStart'>
                                <div className='icon'>
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className='detail'>
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'> +915876543321</span>
                                </div>
                            </div>
                            <div className='button'>Video Call Now</div>
                        </div>
                            {/* 4 */}
                        <div className='mode'>
                            <div className='flexStart'>
                                <div className='icon'>
                                    <HiChatBubbleBottomCenter size={25} />
                                </div>
                                <div className='detail'>
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'> +915876543321</span>
                                </div>
                            </div>
                            <div className='button'>Message Now</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='conatct-right'>
                <div className='contact-img'>
                    <img src="./contact.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact