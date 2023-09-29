import React from 'react'
import Image from 'next/image'
import RoadmapHexagon1 from "@/images/roadmapHexagon1.png"
import RoadmapHexagon2 from "@/images/roadmapHexagon2.png"
import RoadmapHexagon3 from "@/images/roadmapHexagon3.png"
import RoadmapHexagon4 from "@/images/roadmapHexagon4.png"
import RoadmapHexagon5 from "@/images/roadmapHexagon5.png"
import RoadmapHexagon6 from "@/images/roadmapHexagon6.png"

export default function RoadmapHexagon(props) {
    const photo = props.no === "1" ? RoadmapHexagon1 : props.no === "2" ? RoadmapHexagon2 : props.no === "3" ? RoadmapHexagon3 : props.no === "4" ? RoadmapHexagon4 : props.no === "5" ? RoadmapHexagon5 : props.no === "6" ? RoadmapHexagon6 : RoadmapHexagon1 
  return (
    <div className='z-40 items-center hover:translate-y-3 duration-300 ease-in-out hover:shadow-stone-100 '>
        <Image src={photo}  alt="The OGClub DAO roadmap " className='hover:shadow-stone-100 ' />
        <p className='text-center font-OssemRust text-xl mt-4 md:mt-0  md:text-4xl '>{props.year}</p>
    </div>
  )
}
