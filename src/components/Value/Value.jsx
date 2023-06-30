import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../accordion'

const Value = () => {
  return (
    <section className='value-wrap' id='OurValue'>
        <div className='value-container'>
            <div className='value-left'>
                <div className='value-img-container'>
                    <img src="./value.png" alt="" />
                </div>
            </div>
            <div className='value-right'>
                    <span className='blueText'>Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>    
                    <br />
                    We provide a good place to live and make your life better
                    </span>
            <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
            >
                {
                    data.map((item,i) => {
                        return(
                            <AccordionItem
                            className='accordionItem' key={i} uuid={i}
                            >
                                <AccordionItemHeading>
                                    <AccordionItemButton className='accordionButton'>
                                        <div className='icon'>
                                            {item.icon}
                                        </div>
                                        <span className='primaryText'>
                                            {item.heading}
                                        </span>
                                        <div className='icon'>
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className='accordionPanel'>
                                    <p className='secondaryText'>{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value