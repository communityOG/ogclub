/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {FaTelegram} from "react-icons/fa6"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import Link from "next/link"

export default function Footer() {
  return (
    <div className='bg-[#010101] px-6 md:px-40 pt-16  pb-10 font-Progress flex flex-col items-center gap-12'>
        <h3 className=' text-center text-[1.25rem] md:text-4xl'>Ready to join the ranks of the OGs? Membership is by application only, 'cause we're all about quality, not quantity</h3>
        <button className='md:mt-2  hover:scale-110  duration-300 ease-in-out  text-[14px] md:text-xl p-3 px-5 md:p-1.5 md:px-3.5 drop-shadow-xl shadow-xl bg-[#FA0300] w-fit btn-pop rounded-3xl'>JOIN THE NFT WAITLIST</button>
        <div className='flex gap-16 justify-center'>

        <Link className='hover:scale-125 duration-300 ease-in-out' aria-label='my-Link' href="https://t.me/ogconofficial" rel='noopener noreferrer' target='_blank'><FaTelegram className='text-white' fontSize={30} /></Link>
        {/* <Link className='hover:scale-125 duration-300 ease-in-out' aria-label='my-Link' href="https://www.instagram.com/ogconofficial/?hl=en" rel='noopener noreferrer' target='_blank'><AiOutlineInstagram className='text-white' fontSize={30} /></Link> */}
        <Link className='hover:scale-125 duration-300 ease-in-out' aria-label='my-Link' href="https://twitter.com/OGConOfficial" rel='noopener noreferrer' target='_blank'><AiOutlineTwitter className='text-white' fontSize={30} /></Link>
        {/* <Link className='hover:scale-125 duration-300 ease-in-out' aria-label='my-Link' href="https://twitter.com/OGConOfficial" rel='noopener noreferrer' target='_blank'><BsLinkedin className='text-white' fontSize={30} /></Link> */}

        </div>
    </div>
  )
}
