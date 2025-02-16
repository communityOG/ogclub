import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import React from 'react'

export default function index() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>
      <div className="pt-20 flex-grow">
        <PrivacyPolicy />
      </div>
      <Footer />
    </div>
  )
}
