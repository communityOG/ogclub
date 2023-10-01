import React, {useState} from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import Logo from '@/images/oglogo.png'
// import Hamburger from '@/assets/images/hamburger.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";
import {BsTriangleFill} from "react-icons/bs"


const NavbarItem = ({title, classProps}) => {
    const router = useRouter();    

    return(
      <Link href={"/home"} className={`mx-4 relative group  font-Progress cursor-pointer ${classProps}`}>
      <div className={`flex text-md lg:text-xl items-end ${
             router.asPath === "/"+title.toLowerCase() ? "text-[#FA0300]" : "text-[#868686]"
           } hover:text-white/80 `}> {title} </div>
           {title !== "HOME" ? 
           <div className='absolute hidden lg-block group-hover:block  text-white/50'>
           <div className='hidden lg:block'>

         <BsTriangleFill />            
           </div>
         <div className='hidden lg:block'>
             <p className='font-OssemRust'>Coming Soon</p>
         </div>
     </div> : ""}
     </Link>
 
)      };

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
  
    return (
      <nav className="w-full flex justify-between lg:justify-center items-center p-5 ">
        <Link href="/" className=" flex  justify-start items-center">
          <Image src={Logo} alt="logo" className=" cursor-pointer" />
        </Link>
        {/* Use CSS media query to conditionally show the image */}
        <div className='hidden lg:block'> {/* Hidden on small screens */}

                  <div className=' flex gap-1 ml-12 lg:ml-24'>
                      <ul className="text-white flex list-none  flex-row gap-3 items-center ">
                      {["HOME", "PARTNERS", "OG AFFAIRS", "OG OFFERINGS", "OG ACADEMY", "OG STORE"].map((item,index) => (
                          <NavbarItem key={item+index} title={item}/>
                      ))}
                      </ul>
                  </div>
        </div>

        <div className="flex relative lg:hidden">
        {!toggleMenu && (
            <button  className='font-Progress text-2xl text-[#868686]' onClick={(e) => (setToggleMenu(true))}>

                {/* <Image src={Hamburger} alt="more items"  className=" md:hidden cursor-pointer"  /> this is where menu will go in responsive view */}
          MENU
            </button>
          )}
          {/* {toggleMenu && (
            <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
          )} */}
          {toggleMenu && (
            <ul className='z-50 fixed -top-0 -right-2 p-3  h-screen shadow-2xl lg:hidden list-none
            flex flex-col justify-start items-center rounded-md  backdrop-blur-md text-white animate-slide-in'>
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={()=> setToggleMenu(false)}/></li>
                {["Home","About", "PARTNERS", "OG AFFAIRS", "OG OFFERINGS", "OG ACADEMY", "OG STORE", "Speakers"].map((item,index) =>
            <NavbarItem key={item+index} title={item} classProps="my-2 text-lg" />,
          )}
            <div className='mt-5'>
            <Link href="/Waitlist" className=' shadow hover:shadow-md mr-2 hover:shadow-white shadow-white px-2  duration-300 py-2 bg-white  font-Progress font-medium text-[#101828] rounded-3xl'>Join Waitlist</Link>
        </div>
            </ul>
            

          )}
        </div>
  
      </nav>
    );
  };
  