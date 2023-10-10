import Footer from '@/components/Footer'
import Hero from '@/components/Home/Hero'
import Mission from '@/components/Home/Mission'
import MissionBanner from '@/components/Home/MissionBanner'
import Partners from '@/components/Home/Partners'
import Roadmap from '@/components/Home/Roadmap'
import Vision from '@/components/Home/Vision'
import Welcome from '@/components/Home/Welcome'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function index() {
  return (
    <div>
        <div className='absolute top-0 w-full'>
            <Navbar />
        </div>
        <div className=''>
            <Hero />
            <Welcome />
            <MissionBanner />
            <Mission />
            <Vision />
            <div className='md:bg-gradient-to-b from-[#010101] to-[#1D2735] py-16'>
                <Roadmap />
                <Partners />
            </div>
        </div>
        <Footer />
    </div>
  )
}
