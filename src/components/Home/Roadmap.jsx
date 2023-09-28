import React from 'react'
import Image from 'next/image'
import RoadmapHexagon from './RoadmapHexagon'


export default function Roadmap() {
  return (
    <div className='px-12'>
        <h1 className='font-Progress text-5xl text-center '>
            OG ROADMAP
        </h1>
        <div className='flex justify-evenly gap-4 pt-12'>
            <div className='z-40'>
                <RoadmapHexagon no="1" year="2020" />
            </div>
            <div className='w-[0.5px] h-52 mt-24 z-20  -rotate-45 bg-white ' />
            <div className='z-40 mt-32'>
                <RoadmapHexagon no="2" year="2021" />
            </div>
            <div className='w-[0.5px] h-52 mt-24 z-20  rotate-45 bg-white ' />
            <div className='z-40 '>
                <RoadmapHexagon no="3" year="2022" />
            </div>
            <div className='w-[0.5px] h-52 mt-24 z-20  -rotate-45 bg-white ' />
            <div className='z-40 mt-32'>
                <RoadmapHexagon no="4" year="2022" />
            </div>
            <div className='w-[0.5px] h-52 mt-24 z-20  rotate-45 bg-white ' />
            <div className='z-40 '>
                <RoadmapHexagon no="5" year="2023" />
            </div>
            <div className='w-[0.5px] h-52 mt-24 z-20  -rotate-45 bg-white ' />
            <div className='z-40 mt-32'>
                <RoadmapHexagon no="6" year="2024" />
            </div>
        </div>
    </div>
  )
}
