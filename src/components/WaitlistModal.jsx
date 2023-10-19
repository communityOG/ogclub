import React, { useState } from "react";


export default function WaitlistModal() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");  
  const [wallet, setWallet] = useState("")
  const [referral, setReferral] = useState("")
  const [newsletter, setNewsletter] = useState("")
  const [marketing, setMarketing] = useState("")
  

  const HandleSubmit = () =>{

  }

  return (
    <div>
      <div>
        <h1 className=" text-center font-extrabold  text-2xl md:text-4xl w-full">
          Waitlist FORM
        </h1>
        <div className="flex justify-center mt-2">
          <div className=" rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 z-20   justify-items-center">
              <div className="text-white w-full">
                <label className=" ">First Name</label>
                <input
                  type="text"
                  placeholder="Please enter your first name"
                  className="bg-[#1E1E1E] py-4 rounded-lg text-sm  font-OssemRegular w-full p-3 "
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="text-white w-full">
                <label className=" ">Last Name</label>
                <input
                  type="text"
                  placeholder="Please enter your first name"
                  className="bg-[#1E1E1E] py-4 rounded-lg w-full text-sm p-3 font-OssemRegular"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="text-white w-full">
                <label className=" ">Email</label>
                <input
                  type="email"
                  placeholder="Please enter your first name"
                  className="bg-[#1E1E1E] py-4 rounded-lg w-full text-sm p-3 font-OssemRegular"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="text-white w-full">
                <label className=" ">Wallet Address</label>
                <input
                  type="text"
                  placeholder="Please enter your first name"
                  className="bg-[#1E1E1E] py-4 rounded-lg w-full text-sm p-3 font-OssemRegular"
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                />
              </div>
              <div className="text-white w-full">
                <label className=" ">Referral (if any)</label>
                <input
                  type="text"
                  placeholder="Please enter your first name"
                  className="bg-[#1E1E1E] py-4 rounded-lg w-full text-sm p-3 font-OssemRegular"
                  value={referral}
                  onChange={(e) => setReferral(e.target.value)}
                />
              </div>
              
              
            </div>
            <div className="text-white w-full flex h-fit   mt-5 gap-2 items-center">
                <input
                  type="checkbox"                  
                  className="bg-[#1E1E1E]"
                  value={newsletter}
                  onChange={(e) => setNewsletter(e.target.value)}
                />
                <label className="font-OssemRegular ">Recieve updates via the OG Newsletter?</label>
              </div>
            <div className="text-white w-full flex h-fit   mt-3 gap-2 items-center">
                <input
                  type="checkbox"                  
                  className="bg-[#1E1E1E]"
                  value={marketing}
                  onChange={(e) => setMarketing(e.target.value)}
                />
                <label className="font-OssemRegular ">Recieve updates via the OG Marketing Channels?</label>
              </div>
            <div className="flex items-center justify-center">
              <button
                className=" font-medium  text-[#101828] rounded-3xl px-7 py-3 bg-white shadow hover:shadow-md shadow-white hover:shadow-white duration-300 mt-8 text-xl hover:scale-105"
                onClick={HandleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
