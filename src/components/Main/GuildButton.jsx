import React from 'react'
import {HiOutlineForward} from "react-icons/hi2"
import DevGuild from "@/images/devGuild.png"
import FounderGuild from "@/images/founderGuild.png"
import WomenGuild from "@/images/womenGuild.png"
import GamerGuild from "@/images/gamerGuild.png"
import Image from 'next/image'

export default function GuildButton(props) {
    const photo = props.no === "1" ? FounderGuild : props.no === "2" ? DevGuild : props.no === "3" ? WomenGuild : props.no === "4" ? GamerGuild : FounderGuild
  return (
    <div className='flex items-center hover:scale-105  duration-300 ease-in-out btn-pop gap-2 drop-shadow-xl shadow-xl p-2 border border-[#707070] bg-black/50 rounded-lg w-fit'>
        <div>
            <Image src={photo} alt={props.title} />
        </div>
        <div className='flex items-center text-xl gap-1'>
            <p className='font-Progress '>{props.title}</p>
            <HiOutlineForward />
        </div>
        
    </div>
  )
}
