import React from 'react'
import Image from 'next/image'
import HeroImage from "@/images/heroImage.png"
import HeroImageM from "@/images/HeroImageM.png"

export default function Hero() {
  return (
    <div className='bg-homeHero1 min-h-[660px] pt-32'>
        <div className='flex flex-col md:flex-row justify-center px-6 md:px-16'>
            <div className='font-Progress basis-1/2 justify-center gap-2 md:gap-5 flex flex-col'>
                <h1 className='text-2xl text-center md:text-left md:text-5xl'>OGCLUB: PIONEERING THE OG <span className='text-[#FA0300]'> DECENTRALIZED TOMORROW</span></h1>
                <p className='font-OssemRust text-center md:text-left my-3 md:my-0 text-[0.875rem] md:text-[1.0625rem] '>Join the OG Global Community of Innovators</p>
                <div className='flex justify-center items-center md:flex-none md:justify-start'>

                <button className='mt-2 mb-10 md:mb-0 text-center hover:scale-110 duration-300 ease-in-out text-[0.875rem] md:text-xl p-1.5  px-10 md:px-3  drop-shadow-xl shadow-xl bg-[#FA0300] md:w-fit btn-pop'>EMBRACE OG INNOVATION</button>
                </div>
            </div>
             {/* Use CSS media query to conditionally show the image */}
            <div className='hidden md:block'> {/* Hidden on small screens */}
              <Image src={HeroImage} alt="EMBRACE OG INNOVATION" />
            </div>
            <div className='md:hidden flex items-center justify-center'> {/* Shown only on small screens */}
              <Image src={HeroImageM} alt="EMBRACE OG INNOVATION" />
            </div>
        </div>
    </div>
  )
}