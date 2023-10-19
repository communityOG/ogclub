import React, { useState } from "react";

export default function PartnerModal() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [formData, setFormData] = useState({
    "entry.2037917220": "",
    "entry.1146839265": "",
    "entry.1451219623": ""
  });

  const HandleSubmit =() =>{

    // https://docs.google.com/forms/u/3/d/e/1FAIpQLScamHdrRNJ4ur9V7PVH4d9Y-vqQHKtBSu_c6wODK37fNlC0VQ/formResponse
    
  }
  return (
    <div>
      <h1 className=" text-center font-extrabold  text-2xl md:text-4xl w-full">
        Partner FORM
      </h1>
      <div className="flex justify-center mt-2">        
        <div className=" rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 z-20   justify-items-center">
            <div className="text-white w-full">
              <label className="font-GilroyMedium ">First Name</label>
              <input
                type="text"
                placeholder="Please enter your first name"
                className="bg-[#1E1E1E] py-4 rounded-lg text-sm  font-OssemRegular w-full p-3 "
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="text-white w-full">
              <label className="font-GilroyMedium ">Last Name</label>
              <input
                type="text"
                placeholder="Please enter your first name"
                className="bg-[#1E1E1E] py-4 rounded-lg w-full text-sm p-3 font-OssemRegular"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="text-white w-full">
              <label className="font-GilroyMedium ">Email</label>
              <input
                type="email"
                placeholder="Please enter your first name"
                className="bg-[#1E1E1E] py-4 rounded-lg w-full text-sm p-3 font-OssemRegular"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="text-white w-full">
              <label className="font-GilroyMedium ">Company</label>
              <input
                type="text"
                placeholder="Please enter your first name"
                className="bg-[#1E1E1E] py-4 rounded-lg w-full text-sm p-3 font-OssemRegular"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="text-white w-full ">
              <label className="font-GilroyMedium ">Position</label>
              <select
                name="positions"
                className="bg-[#1E1E1E] rounded-lg w-full py-4 p-3 text-sm font-OssemRegular"
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value="" className="text-[#ffffff74]">
                  Select Position
                </option>
                {[
                  "Investor",
                  "Founder",
                  "Developer",
                  "Product Manager",
                  "Student",
                  "Builder",
                ].map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
            <div className='flex items-center justify-center'>
                    <button className='font-GilroyMedium font-medium  text-[#101828] rounded-3xl px-7 py-3 bg-white shadow hover:shadow-md shadow-white hover:shadow-white duration-300 mt-8 text-xl hover:scale-105' onClick={HandleSubmit}>Submit</button>
                </div>
        </div>
      </div>
    </div>
  );
}
