import React from 'react'
import Image from 'next/image'
import HeroImage from "@/images/heroImage.png"

export default function Hero() {
  return (
    <div className='bg-homeHero1 min-h-[660px] pt-32'>
        <div className='flex justify-center px-16'>
            <div className='font-Progress basis-1/2 justify-center gap-5 flex flex-col'>
                <h1 className='text-5xl'>OGCLUB: PIONEERING THE OG <span className='text-[#FA0300]'> DECENTRALIZED TOMORROW</span></h1>
                <p className='font-OssemRust'>Join the OG Global Community of Innovators</p>
                <button className='mt-2 hover:scale-110  duration-300 ease-in-out  text-xl p-1.5 px-3.5 drop-shadow-xl shadow-xl bg-[#FA0300] w-fit btn-pop'>EMBRACE OG INNOVATION</button>
            </div>
            <div>
                <Image src={HeroImage} alt="EMBRACE OG INNOVATION" />
            </div>
        </div>
    </div>
  )
}
