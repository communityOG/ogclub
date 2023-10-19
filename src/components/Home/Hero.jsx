import React from 'react'
import Image from 'next/image'
import HeroImage from "@/images/heroImage.png"
import HeroImageM from "@/images/heroImageMobile.png"
import PartnerModal from '../PartnerModal'
import WaitlistModal from '../WaitlistModal'

export default function Hero() {
  return (
    <div className='md:bg-homeHero1 min-h-[660px] pt-32 '>
        <div className='flex flex-col md:flex-row justify-center md:gap-5'>
            <div className='font-Progress basis-1/2 justify-center gap-2 md:gap-5 flex flex-col px-6 md:px-16'>
                <h1 className='text-2xl text-center md:text-3xl md:text-left lg:text-5xl'>OGCLUB: PIONEERING THE OG <span className='text-[#FA0300] '> DECENTRALIZED TOMORROW</span></h1>
                <p className='font-OssemRust text-center md:text-left my-3 md:my-0 text-[0.875rem] md:text-[1.0625rem] '>Join the OG Global Community of Innovators</p>
                <div className='flex flex-col justify-center gap-3  md:flex-none md:justify-start'>
                  <button className='mt-2 mb-10 md:mb-0 text-center hover:scale-110 duration-300 ease-in-out text-[0.875rem] md:text-xl p-1.5  px-10 md:px-3  drop-shadow-xl shadow-xl bg-[#FA0300] md:w-2/4 btn-pop rounded-3xl'
                  onClick={()=>document.getElementById('my_modal_3').showModal()}
                  >Become A Partner</button>

                  <dialog id="my_modal_3" className="modal">
                  <div className="modal-box bg-black border border-[#FA0300]">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost text-[#FA0300] absolute right-2 top-2">✕</button>
                      </form>
                      <PartnerModal />
                    </div>
                  </dialog>

                  
                
                </div>
                
            </div>
             {/* Use CSS media query to conditionally show the image */}
            <div className='hidden lg:block px-6 md:px-16 '> {/* Hidden on small screens */}
              <Image src={HeroImage} alt="EMBRACE OG INNOVATION" />
            </div>
      
            <div className='lg:hidden flex items-center justify-center'> {/* Shown only on small screens */}
              <Image src={HeroImageM} alt="EMBRACE OG INNOVATION" />
            </div>
        </div>    
    </div>
  )
}