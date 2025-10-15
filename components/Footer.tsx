import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
export const Footer = () => {
  return (
<section className='padding-container max-container pt-16'>
   <div className='py-6'>
  <Link href="/">
  <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
  </Link>
  </div>
  <div className='flex flex-col lg:flex-row w-full md:grid md:grid-cols-2 lg:grid-cols-4  gap-28 md:gap-14'> 
    <div className='flex flex-col gap-4'>
      <h2 className='bold-20'>Learn More</h2>
      <ul className='regular-14 text-gray-30 flex flex-col gap-3'>
        <li>About Hilink</li>
        <li>Press Releases</li>
        <li>Environment</li>
        <li>Jobs</li>
        <li>Privary Policy</li>
        <li>Contact Us</li>
      </ul>
    </div>

      <div className='flex flex-col gap-4'>
      <h2 className='bold-20'>Our Community</h2>
      <ul className='regular-14 text-gray-30 flex flex-col gap-3'>
        <li>Climbing xixixi</li>
        <li>Hiking hilink</li>
        <li>Hilink kinthill</li>
      </ul>
    </div>

      <div className='flex flex-col gap-4'>
  <h2 className='bold-20'>Contact Us</h2>
      <ul className=' text-gray-30 flex flex-col gap-5'>
        <li className='text-black regular-16'>Admin Officer: &nbsp;<span className='text-sm text-blue-70 font-semibold'>123-456-7890</span></li>
        <li className='text-black regular-16'>Email Officer: &nbsp;<span className='text-sm text-blue-70 font-semibold'>123hilink@akinthil.com</span></li>
      </ul>
    </div>

        <div className='flex flex-col gap-4'>
  <h2 className='bold-20'>Social</h2>
  <div className='flex gap-4'>
  <Image src="/facebook.svg" alt="facebook" width={28} height={28} />
  <Image src="/instagram.svg" alt="instagram" width={28} height={28} />
  <Image src="/twitter.svg" alt="twitter" width={28} height={28} />
  <Image src="/youtube.svg" alt="youtube" width={28} height={28} />
  <Image src="/wordpress.svg" alt="wordpress" width={28} height={28} />
  </div>
    </div>

  </div>
  <div className='bg-gray-20 w-full h-full p-[0.1px] mt-12'></div>
  <div className='flex items-center justify-center py-14'>
  <p className='regular-14 text-gray-30'>2023 Hilink | All rights reserved</p></div>
</section>
  )
}
