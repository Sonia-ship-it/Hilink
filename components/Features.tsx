"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInDown2 } from '@/components/Animations'
export const Features = () => {
  return (
    <motion.section className=' flexCenter flex-col my-10  xl:mb-20 bg-feature-bg bg-center bg-no-repeat py-10'   variants={fadeInDown2}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.1 }}
      >
    <div className=' relative max-container padding-container w-full flex gap- justify-end'>
      <div className='flex flex-1 min-h-[900px]'>
        <Image src="/phone.png" alt="phone" width={440} height={1000} className='feature-phone' />
        </div>

          <div className='z-20 flex w-full flex-col lg:w-[60%]'>

            <div className='relative'>
              <Image src="/camp.svg" alt="camp" width={50} height={50} className='absolute top-[-28px] left-[-5px] w-10 lg:w-[50px]' />
              <h2 className='bold-40 lg:bold-64'>Our Features</h2>
            </div>
            
  <div className='grid gap-10 mt-10 md:grid-cols-2 lg:mt-20 lg:gap-20 items-center'>
    <div className='flex flex-1 items-start flex-col gap-4'>
  <div className='bg-green-50 w-20 h-20 rounded-full flexCenter'>
      <Image src="/map.svg" alt="map" width={28} height={28} />
  </div>
    <h2 className='bold-20 lg:bold-32'>Real Maps Can Be Offline</h2>
    <p className='regular-16 text-gray-30'>We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location</p>
</div>


<div className='flex items-start flex-1 flex-col gap-4'>

<div className='bg-green-50 w-20 h-20 rounded-full flexCenter'>
<Image src="/calendar.svg" alt="map" width={28} height={28} />
</div>
<h2 className='bold-20 lg:bold-32'>Set An Adventure Schedule</h2>
<p className='regular-16 text-gray-30'>Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion</p>
</div>

    <div className='flex flex-1  flex-col items-start gap-4'>
<div className='bg-green-50 w-20 h-20 rounded-full flexCenter'>
    <Image src="/tech.svg" alt="map" width={28} height={28} />
</div>
  <h2 className='bold-20 lg:bold-32'>Technology Using Augment Reality</h2>
  <p className='regular-16 text-gray-30'>Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection</p>
</div>

  <div className='flex items-start flex-1 flex-col gap-4 '>
  <div className='bg-green-50 w-20 h-20 rounded-full flexCenter'>
  <Image src="/location.svg" alt="map" width={28} height={28} />
  </div>
  <h2 className='bold-20 lg:bold-32'>Many New Locations Every Month</h2>
  <p className='regular-16 text-gray-30'>Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing</p>
  </div>
          </div>

          </div>
    </div>

    </motion.section>
  )
}
