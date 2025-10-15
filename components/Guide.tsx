"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { fadeInDown, fadeInUp } from '@/components/Animations'
import Image from 'next/image'
export const Guide = () => {
  return (
    <section className='flexCenter flex-col pb-16'>

    <div className='w-full padding-container max-container'
    >
          <Image src="/camp.svg" alt="camp" width={50} height={50} className='' />
          <p className='regular-18 -mt-1 mb-3 text-green-50'
          >WE ARE HERE FOR YOU</p>
          <div className='flex flex-wrap justify-between gap-5 lg:gap-10 '>
          <motion.h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'     variants={fadeInDown}
          initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2 }}
                  transition= {{ duration: 1, ease: "easeOut" }}>Guide You to Easy Path</motion.h2>
          <motion.p className='regular-16 text-gray-30 xl:max-w-[520px]' variants={fadeInUp}
          initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2 }}
              transition= {{ duration: 1, ease: "easeOut" }}>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</motion.p>
          </div>
    </div>

      <div className='relative w-full max-container flexCenter lg:block py-16 md:py-8'>
        <motion.div variants={fadeInUp}
          initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.7 }}
              transition= {{ duration: 1, ease: "easeOut" }}>
        <Image src="/boat.png" alt="boat" width={1440} height={580} className='2xl:rounded-5xl object-cover object-center w-full' /></motion.div>
        <div className='absolute flex bg-white py-2 md:py-5 lg:py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
      <Image src="/meter.svg" alt='meter' width={16} height={158} className='h-full w-auto' />

      <div className='flexCenter gap-4 lg:gap-0 lg:flexBetween flex-col'>  
      <div className='flex w-full flex-col'>
          <div className='flexBetween w-full'>
            <p className='regular-16 text-gray-20'>Destination</p>
              <p className='bold-16 text-green-50'>48 min</p>
          </div>
              <p className='bold-20 mt-2'>Aguas Calientes</p>
      </div>
          
          <div className='flex w-full flex-col'>
            <p className='regular-16 text-gray-20'>Start track</p>
            <p className='bold-20 mt-2 whitespace-nowrap'>Wonorejo Pasuruan</p>
          </div>
</div>
        </div>
      </div>
    </section>
  )
}
