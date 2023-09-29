import React from 'react'
import Image from 'next/image'
import RoadmapHexagon from './RoadmapHexagon'


export default function Roadmap() {
  return (
    <div className=' md:px-12'>
        <h1 className='font-Progress text-[20px] md:text-5xl text-center '>
            OG ROADMAP
        </h1>
        <div className='md:flex  md:justify-evenly md:gap-4 md:pt-12'>
            <div className='z-40 flex justify-center items-center'>
                <RoadmapHexagon no="1" year="2020"  />
            </div>

            <div className='hidden md:block'> {/* Hidden on small screens */}
                    <div className='w-[0.5px]   md:h-52 mt-10 md:mt-24 z-20 border -rotate-[45] md:-rotate-45 bg-white ' /> {/* <Image src={HeroImage} alt="EMBRACE OG INNOVATION" /> */}
            </div>
            <div className='md:hidden flex items-center justify-center'> {/* Shown only on small screens */}
               <div className='w-[0.5px] h-40  z-20 border -rotate-[45] md:-rotate-45 bg-white ' />
            </div>



            <div className='z-40  mt-4 md:mt-32  flex justify-center items-center'>
                <RoadmapHexagon no="2" year="2021" />
            </div>

            <div className='hidden md:block'> {/* Hidden on small screens */}
                <div className='w-[0.5px] md:h-52 md:mt-24 z-20  md:rotate-45 bg-white ' /> {/* <Image src={HeroImage} alt="EMBRACE OG INNOVATION" /> */}
            </div>

            <div className='md:hidden flex items-center justify-center'> {/* Shown only on small screens */}
               <div className='w-[0.5px] h-40  z-20 border -rotate-[45] md:-rotate-45 bg-white ' />
            </div>
            
            <div className='z-40 flex justify-center items-center'>
                <RoadmapHexagon no="3" year="2022" />
            </div>


             <div className='hidden md:block'> {/* Hidden on small screens */}
                    <div className='w-[0.5px]   md:h-52 mt-10 md:mt-24 z-20 border -rotate-[45] md:-rotate-45 bg-white ' /> {/* <Image src={HeroImage} alt="EMBRACE OG INNOVATION" /> */}
            </div>
            <div className='md:hidden flex items-center justify-center'> {/* Shown only on small screens */}
               <div className='w-[0.5px] h-40  z-20 border -rotate-[45] md:-rotate-45 bg-white ' />
            </div>



            <div className='z-40  mt-4 md:mt-32  flex justify-center items-center'>
                <RoadmapHexagon no="4" year="2022" />
            </div>
            
            <div className='hidden md:block'> {/* Hidden on small screens */}
                <div className='w-[0.5px] md:h-52 md:mt-24 z-20  md:rotate-45 bg-white ' /> {/* <Image src={HeroImage} alt="EMBRACE OG INNOVATION" /> */}
            </div>

            <div className='md:hidden flex items-center justify-center'> {/* Shown only on small screens */}
               <div className='w-[0.5px] h-40  z-20 border -rotate-[45] md:-rotate-45 bg-white ' />
            </div>

            <div className='z-40 mt-4 flex justify-center items-center'>
                <RoadmapHexagon no="5" year="2023" />
            </div>




            
            <div className='hidden md:block'> {/* Hidden on small screens */}
                    <div className='w-[0.5px]   md:h-52 mt-10 md:mt-24 z-20 border -rotate-[45] md:-rotate-45 bg-white ' /> {/* <Image src={HeroImage} alt="EMBRACE OG INNOVATION" /> */}
            </div>

            <div className='md:hidden flex items-center justify-center'> {/* Shown only on small screens */}
               <div className='w-[0.5px] h-40  z-20 border -rotate-[45] md:-rotate-45 bg-white ' />
            </div>



            <div className='z-40  mt-4 md:mt-32  flex justify-center items-center'>
                <RoadmapHexagon no="6" year="2024" />
            </div>
        </div>
    </div>
  )
}
