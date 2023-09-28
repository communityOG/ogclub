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
          <Image src={OGmain} alt="OG CLUB DAO" />
        </div>
        <div className="absolute top-[50%] flex justify-center w-full ">
          <Link
            href="home"
            className="hover:scale-110  duration-300 ease-in-out font-Progress text-2xl p-1.5 px-3.5 drop-shadow-xl shadow-xl bg-[#FA0300] btn-pop"
          >
            EXPERIENCE THE OG WORLD
          </Link>
        </div>
        <div className="absolute top-60 left-24">
          <GuildButton title="FOUNDER GUILD" no="1" />
        </div>
        <div className="absolute bottom-40 left-48">
          <GuildButton title="DEV GUILD" no="2" />
        </div>
        <div className="absolute top-72 right-24">
          <GuildButton title="WOMEN GUILD" no="3" />
        </div>
        <div className="absolute bottom-40 right-32">
          <GuildButton title="GAMER GUILD" no="4" />
        </div>
      </div>
    </div>
  );
}
