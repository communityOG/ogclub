import React from 'react'
import {HiOutlineForward} from "react-icons/hi2"
import DevGuild from "@/images/devGuild.png"
import FounderGuild from "@/images/founderGuild.png"
import WomenGuild from "@/images/womenGuild.png"
import GamerGuild from "@/images/gamerGuild.png"
import Image from 'next/image'
import {BsTriangleFill} from "react-icons/bs"

export default function GuildButton(props) {
    const photo = props.no === "1" ? FounderGuild : props.no === "2" ? DevGuild : props.no === "3" ? WomenGuild : props.no === "4" ? GamerGuild : FounderGuild
  return (
    <div className='flex w-52 md:w-auto relative group items-center hover:scale-105 duration-300 ease-in-out btn-pop gap-2 drop-shadow-xl shadow-xl p-2 border border-[#707070] bg-black/50 rounded-lg md:w-fit '>
        <div>
            <Image src={photo} alt={props.title} />
        </div>
        <div className='flex items-center text-sm md:text-xl gap-1 w-full justify-between'>
            <p className='font-Progress '>{props.title}</p>
            <HiOutlineForward />
        </div>  
        <div className='absolute hidden group-hover:block top-[3.2rem] text-white/50'>
            <BsTriangleFill />            
            <div>
                <p className='font-OssemRust'>Coming Soon</p>
            </div>
        </div>      
    </div>
  )
}
