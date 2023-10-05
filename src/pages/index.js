import Image from "next/image";
import { Inter } from "next/font/google";
import OGmain from "@/images/ogmain.svg";
import Link from "next/link";
import GuildButton from "@/components/Main/GuildButton";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-SC0QDW83KR" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-SC0QDW83KR');
        `}
      </Script>
      <div className="h-screen bg-cover bg-no-repeat bg-center w-screen bg-main relative">
        <div className="flex items-center justify-center pt-12">
          <Image src={OGmain} alt="OG CLUB DAO" className=' w-[65%] md:w-auto '  />
        </div>
        <div className="absolute top-[80%] md:top-[50%] flex justify-center w-full ">
          <Link
            href="Home"
            className="hover:scale-110  duration-300 ease-in-out font-Progress text-lg md:text-2xl p-1.5 px-3.5 drop-shadow-xl shadow-xl bg-[#FA0300] btn-pop"
          >
            EXPERIENCE THE OG WORLD
          </Link>
        </div>
        <div className="absolute top-[30%] left-4 md:top-60 md:left-24">
          <GuildButton title="FOUNDER GUILD" no="1" />
        </div>
        <div className="absolute top-[54%] left-4 md:bottom-40 md:left-48">
          <GuildButton title="DEV GUILD" no="2" />
        </div>
        <div className="absolute top-[42%] right-4 md:top-72 md:right-24">
          <GuildButton title="WOMEN GUILD" no="3" />
        </div>
        <div className="absolute top-[66%] right-4 md:bottom-40 md:right-32">
          <GuildButton title="GAMER GUILD" no="4" />
        </div>
      </div>
    </div>
  );
}
