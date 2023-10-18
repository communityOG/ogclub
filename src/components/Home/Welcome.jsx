/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function Welcome() {

  

  return (
    <div className=' min-h-[305px] md:min-h-[434px] md:my-8 bg-homeWelcomeMobile md:bg-homeWelcome flex items-center px-6 text-center md:text-left md:px-32'>
      <h3 className='text-[0.875rem] font-OssemRust md:text-3xl  md:text-center hidden lg:block'>Welcome to OGCLUB, the global hub for decentralized innovation. With 300+ events across eight countries and a thriving community of web3 enthusiasts, we're your gateway to the <span className=' bg-[#FA0300]'>decentralized future.</span></h3>
      <h3 className='text-[0.875rem] font-OssemRust md:text-3xl  md:text-center lg:hidden block'>OGCLUB is the global hub for decentralized innovation. 300+ events across 8 countries and a thriving community of web3 enthusiasts.
        <span className=' bg-[#FA0300]'>web3 enthusiasts.</span></h3>
    </div>
  )
}
