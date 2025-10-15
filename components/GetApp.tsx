"use client"
import React from 'react'
import { Buttons } from '@/components/Buttons'
import { fadeIn, floating, pulse } from '@/components/Animations'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
export const GetApp = () => {
  return (
<motion.section   
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.3 }} className='flexCenter w-full flex-col pb-[100px] pt-10'>
<div className='get-app '>

  <div className=' z-20 flex flex-1 w-full items-start justify-center flex-col gap-12'>
    <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Get for free now!</h2>
    <p className='regular-16 text-gray-10'>Available on iOS and Android</p>
    <div className="flex flex-col xl:flex-row w-full gap-3 whitespace-nowrap">
      <motion.div  variants={pulse}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.3 }} >
        <Link href="/">
    <Buttons type="button" title="App Store" icon="/apple.svg" variant="btn_white" hover="hover:outline hover:outline-3 hover:outline-green-50"  full />
    </Link>
    </motion.div>
      <motion.div  variants={pulse}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.3 }} >
      <Link href="/">
    <Buttons type="button" title="Play Store" icon="/android.svg" variant="btn_dark_green_outline" hover="hover:bg-green-50 hover:border-none" full />
    </Link>
    </motion.div>
    </div>
  </div>
  <motion.div 
     variants={floating}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.3 }}
  className='flex flex-1 justify-end items-center'>
    <Image src="/phones.png" alt="phones" width={550} height={870} />
  </motion.div>

  </div>
</motion.section>
  )
}
