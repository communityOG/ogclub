import React from 'react'
import Head from 'next/head'


export default function layout({children}) {
  return (
    <div className='text-white'>
        <Head >
        <title>
          OGClub DAO
        </title>
        </Head>        
        <main>{children}</main>
    </div>
  )
}
