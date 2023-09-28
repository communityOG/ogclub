import React from "react";
import Image from "next/image";
import PartnerLogo1 from "@/images/partnerLogo1.png";
import PartnerLogo2 from "@/images/partnerLogo2.png";
import PartnerLogo3 from "@/images/partnerLogo3.png";
import PartnerLogo4 from "@/images/partnerLogo4.png";
import PartnerLogo5 from "@/images/partnerLogo5.png";
import PartnerLogo6 from "@/images/partnerLogo6.png";
import PartnerLogo7 from "@/images/partnerLogo7.png";
import PartnerLogo8 from "@/images/partnerLogo8.png";
import PartnerLogo9 from "@/images/partnerLogo9.png";
import PartnerLogo10 from "@/images/partnerLogo10.png";
import PartnerLogo11 from "@/images/partnerLogo11.png";

export default function Partners() {
  return (
    <div className="pt-32 px-12">
      <h1 className="font-Progress text-5xl text-center">OUR PARTNERS</h1>
      <div className="grid grid-cols-8 gap-5 justify-items-center mt-12">
        <Image src={PartnerLogo1} alt="OG Partner" />
        <Image src={PartnerLogo5} alt="OG Partner" />
        <Image src={PartnerLogo6} alt="OG Partner" />
        <Image src={PartnerLogo7} alt="OG Partner" />
        <Image src={PartnerLogo8} alt="OG Partner" />
        <Image src={PartnerLogo9} alt="OG Partner" />
        <Image src={PartnerLogo10} alt="OG Partner" />
        <Image src={PartnerLogo11} alt="OG Partner" />
      </div>
      <div className="flex justify-center gap-12 2xl:gap-16 mt-8">
        <Image src={PartnerLogo3} alt="OG Partner" />
        <Image src={PartnerLogo4} alt="OG Partner" />
        <Image src={PartnerLogo2} alt="OG Partner" />
      </div>
      <div>
        <p className="text-3xl font-OssemRust text-center mt-12">And Many More....</p>
      </div>
    </div>
  );
}
