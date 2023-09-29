/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function Vision() {
  return (
    <div className='min-h-[505px] bg-homeVision font-Progress text-center flex flex-col justify-evenly items-center px-2 md:px-24'>
        <h1 className='text-2xl md:text-5xl'>OUR VISION: A DECENTRALISED <span className='text-[#FA0300]'>EMPIRE</span></h1>
        <div className='flex flex-col gap-4 md:gap-10  items-center'>

        <p className='font-OssemRust  text-[14px] md:text-2xl   px-4 md:px-36'>Our vision at OGCLUB is to lead the way in the decentralized era, where innovation knows no bounds. We aspire to create a world where Web3 technologies empower individuals, fostering a global community that collaborates seamlessly and inclusively. Together, we're building a decentralized future that's open to all, transcending borders and barriers.</p>
        <button className='mt-2 hover:scale-110  duration-300 ease-in-out  text-xl p-1.5 px-3.5 drop-shadow-xl shadow-xl bg-[#FA0300] w-fit btn-pop'>JOIN WAITLIST</button>
        </div>
    </div>
  )
}
