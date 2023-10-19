import React from "react";
import Image from "next/image";
import PartnerModal from "../PartnerModal";

import PartnerLogo1 from "@/images/partnerLogo/partnerLogo1.png"
import PartnerLogo2 from "@/images/partnerLogo/partnerLogo2.png"
import PartnerLogo3 from "@/images/partnerLogo/partnerLogo3.png"
import PartnerLogo4 from "@/images/partnerLogo/partnerLogo4.png"
import PartnerLogo5 from "@/images/partnerLogo/partnerLogo5.png"
import PartnerLogo6 from "@/images/partnerLogo/partnerLogo6.png"
import PartnerLogo7 from "@/images/partnerLogo/partnerLogo7.png"
import PartnerLogo8 from "@/images/partnerLogo/partnerLogo8.png"
import PartnerLogo9 from "@/images/partnerLogo/partnerLogo9.png"
import PartnerLogo10 from "@/images/partnerLogo/partnerLogo10.png"
import PartnerLogo11 from "@/images/partnerLogo/partnerLogo11.png"
import PartnerLogo12 from "@/images/partnerLogo/partnerLogo12.png"
import PartnerLogo13 from "@/images/partnerLogo/partnerLogo13.png"
import PartnerLogo14 from "@/images/partnerLogo/partnerLogo14.png"
import PartnerLogo15 from "@/images/partnerLogo/partnerLogo15.png"
import PartnerLogo16 from "@/images/partnerLogo/partnerLogo16.png"


export default function Partners() {
  return (
    <div id="partners" className="pt-16  md:pt-32 px-12">
      <h1 className="font-Progress text-[20px] md:text-5xl text-center">OUR PARTNERS</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5 justify-items-center mt-12">
        <Image src={PartnerLogo1} alt="OG Partner" />
        <Image src={PartnerLogo2} alt="OG Partner" />
        <Image src={PartnerLogo3} alt="OG Partner" />
        <Image src={PartnerLogo4} alt="OG Partner" />
        <Image src={PartnerLogo5} alt="OG Partner" />
        <Image src={PartnerLogo6} alt="OG Partner" />
        <Image src={PartnerLogo7} alt="OG Partner" />
        <Image src={PartnerLogo8} alt="OG Partner" />
        <Image src={PartnerLogo9} alt="OG Partner" />
        <Image src={PartnerLogo10} alt="OG Partner" />
        <Image src={PartnerLogo11} alt="OG Partner" />
        <Image src={PartnerLogo12} alt="OG Partner" />
        <Image src={PartnerLogo13} alt="OG Partner" />
        <Image src={PartnerLogo14} alt="OG Partner" />
        <Image src={PartnerLogo15} alt="OG Partner" />
        <Image src={PartnerLogo16} alt="OG Partner" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[0.875rem]  md:text-3xl font-OssemRust text-center mt-12">And Many More....</p>
        <button className=' my-10 font-Progress md:mb-0 text-center hover:scale-110 duration-300 ease-in-out text-[0.875rem] md:text-xl p-1.5  px-10 md:px-12  drop-shadow-xl shadow-xl bg-[#FA0300] md:w-fit btn-pop rounded-3xl'
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
  );
}
