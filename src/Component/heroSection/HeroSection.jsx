import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../photos/carousel1.jpg'
import carousel2 from '../../photos/carousel2.jpg'
import carousel3 from '../../photos/carousel3.jpg'
import carousel4 from '../../photos/carousel4.jpg'

export default function HeroSection() {
  return (
    <div>
         <Carousel className='sm:w-full md:w-full max-w-full'
         autoPlay={true}
         infiniteLoop={true}
         interval={2000}
         showThumbs={false}
         showStatus={false}
         >
            
                <div>
                    <img src={carousel1} className='max-h-[400px]  ' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={carousel2} className='h-[400px]' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={carousel3} className='h-[400px]'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={carousel4} className='h-[400px]'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
    </div>
  )
}
