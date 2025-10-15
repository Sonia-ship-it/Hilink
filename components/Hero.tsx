"use client"
import React from 'react'
import Image from 'next/image'
import { Buttons } from '@/components/Buttons'
import {motion} from "framer-motion"
import Link from 'next/link'
import { fadeInDown } from '@/components/Animations'
export const Hero = () => {
  return (
     <motion.section
      className="max-container padding-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20 xl:flex-row"
      variants={fadeInDown}
      initial="initial"
      animate="animate"
      transition= {{ duration: 0.8, ease: "easeOut" }}
    >
        <div className='hero-map '/>
        <div className='relative flex  flex-col flex-1 xl:w-1/2'>
          <Image src="/camp.svg" alt="camp" width={50} height={50} className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]" />
          <h1 className='bold-52 lg:bold-88'>Putuk Truno Camp Area</h1>
          <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature, We can help you on adventure around the world in just one app</p>
          <div className='my-11 flex items-center flex-wrap gap-5'>
            <div className='flex items-center gap-2'>
              {Array(5).fill(1).map((_, index) => (<Image src="/star.svg" key={index} alt="star" width={24} height={24}/>))
              }
            </div>
            <p className='bold-16 lg:bold-20 text-blue-70'>198k <span className='regular-16 lg:regular-20 ml-1'>Excellent Reviews</span></p>
            </div>
            <div className='flex flex-col gap-3  sm:flex-row'>
              <Link href="#getapp">
              <Buttons type='button' title='Download App' variant="btn_green"
              hover="hover:btn_green_hover"/>
              </Link>
              <Buttons type='button' title='How we work' icon='/play.svg' variant='btn_white_text'
              />
            </div>
        </div>
    <div className='relative flex flex-1 items-start'>
          <div className='relative bg-green-90 px-7 py-8 w-[268px] rounded-3xl z-20  hover:bg-transparent hover:border-2 hover:border-green-70 transition-all duration-300 ease-in-out group'>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-col'>
                <div className='flexBetween'>
                  <p className='regular-16 text-gray-20'>Location</p>
                  <Image src="/close.svg" alt="close" width={24} height={24} className='transition-colors duration-300 ease-in-out group-hover:filter group-hover:invert' />
                </div>
                    <p className='bold-20 text-white transition-colors duration-300 ease-in-out group-hover:text-gray-50'>Aguas Calientes</p></div>
                  <div className='flexBetween gap-3'>
                    <div className='flex flex-col'>
                  <p className='regular-16 text-gray-20'>Distance</p>
                  <p className='bold-20 text-white transition-colors duration-300 ease-in-out group-hover:text-gray-50'>173.28 mi</p>
                  </div>
                             <div className='flex flex-col'>
                  <p className='regular-16 text-gray-20'>Elevation</p>
                  <p className='bold-20 text-white transition-colors duration-300 ease-in-out group-hover:text-gray-50'>2.040km</p>
                  </div>
                </div>
              </div>
          </div>
    </div>
       </motion.section>
  )
}
