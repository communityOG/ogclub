/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import WaitlistModal from '../WaitlistModal'

export default function Vision() {
  return (
    <div className='min-h-[278px] md:min-h-[505px] my-8 bg-homeVisionMobile md:bg-homeVision font-Progress text-center flex flex-col justify-evenly items-center px-2 md:px-24'>
        <h1 className='text-2xl md:text-5xl'>OUR VISION: A DECENTRALISED <span className='text-[#FA0300]'>EMPIRE</span></h1>
        <div className='flex flex-col gap-4 md:gap-10  items-center'>

        <p className='font-OssemRust  text-[0.875rem] md:text-2xl   px-4 md:px-36 hidden lg:block'>Our vision at OGCLUB is to lead the way in the decentralized era, where innovation knows no bounds. We aspire to create a world where Web3 technologies empower individuals, fostering a global community that collaborates seamlessly and inclusively. Together, we're building a decentralized future that's open to all, transcending borders and barriers.</p>

        <p className='font-OssemRust md:hidden text-[0.875rem] md:text-2xl   px-4 md:px-36 lg:hidden flex'>OGCLUB aims to lead in the decentralized era, creating a world where Web3 empowers all.</p>
      
        <button className='mt-2 mb-10 md:mb-0 text-center hover:scale-110 duration-300 ease-in-out text-[0.875rem] md:text-xl p-1.5  px-10 md:px-12  drop-shadow-xl shadow-xl bg-[#FA0300] md:w-fit btn-pop rounded-3xl'
                  onClick={()=>document.getElementById('my_modal_4').showModal()}
                  >Join The Waitlist</button>

                  <dialog id="my_modal_4" className="modal">
                  <div className="modal-box bg-black border border-[#FA0300]">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost text-[#FA0300] absolute right-2 top-2">✕</button>
                      </form>
                      <WaitlistModal />
                    </div>
                  </dialog>
        </div>
    </div>
  )
}
