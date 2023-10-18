/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex items-center justify-center h-screen flex-col gap-3'>
        <h1 className='font-Progress md:text-5xl text-3xl'>You're Somewhere You Shouldn't be</h1>
        <Link href="/home" className='font-OssemRust text-xl md:text-3xl text-[#FA0300] underline underline-offset-4 hover:scale-105 duration-200 ease-in-out'>        
            Get Back to Web3 Now!            
        </Link>
    </div>
  )
}
