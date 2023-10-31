import React, { useState } from "react";


export default function WaitlistModal() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("")
  const [referral, setReferral] = useState("")
  const [newsletter, setNewsletter] = useState("no")
  const [marketing, setMarketing] = useState("no")

  const [isCheckedNewsletter, setisCheckedNewsletter] = useState(false);

  const handleCheckboxChangeNewsletter = (event) => {
    setisCheckedNewsletter(event.target.checked);
    if (!isCheckedNewsletter) {
      setNewsletter("yes")
    }
    else {
      setNewsletter("no")
    }
  };



  const [isCheckedMarketing, setisCheckedMarketing] = useState(false);

  const handleCheckboxChangeMarketing = (event) => {
    setisCheckedMarketing(event.target.checked);

    if (!isCheckedMarketing) {
      setMarketing("yes")
    }
    else {
      setMarketing("no")
    }
  };

  const dataSend = async () => {
    const url = `https://docs.google.com/forms/d/e/1FAIpQLSffxKUlMeKecCBr93vPHBEE0WmcRqsWeS-FUjvcOj6LKtWvEA/formResponse?entry.677866763=${firstName}&entry.708861375=${lastName}&entry.965794500=${email}&entry.83898953=${wallet}&entry.2112217598=${referral}&entry.841665813=${newsletter}&entry.578617732=${marketing}`
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

  }

  return (
    <div>
      <form>
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
                  placeholder="Please enter your last name"
                  className="bg-[#1E1E1E] py-4 rounded-lg w-full text-sm p-3 font-OssemRegular"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="text-white w-full">
                <label className=" ">Email</label>
                <input
                  type="email"
                  placeholder="Please enter your email"
                  className="bg-[#1E1E1E] py-4 rounded-lg w-full text-sm p-3 font-OssemRegular"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="text-white w-full">
                <label className=" ">Wallet Address</label>
                <input
                  type="text"
                  placeholder="Please enter your wallet address"
                  className="bg-[#1E1E1E] py-4 rounded-lg w-full text-sm p-3 font-OssemRegular"
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                />
              </div>
              <div className="text-white w-full">
                <label className=" ">Referral (if any)</label>
                <input
                  type="text"
                  placeholder="Enter the referrer's name"
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
                checked={isCheckedNewsletter}
                onChange={handleCheckboxChangeNewsletter}
              />
              <label className="font-OssemRegular ">Recieve updates via the OG Newsletter?</label>
            </div>
            <div className="text-white w-full flex h-fit   mt-3 gap-2 items-center">
              <input
                type="checkbox"
                className="bg-[#1E1E1E]"
                value={marketing}
                checked={isCheckedMarketing}
                onChange={handleCheckboxChangeMarketing}
              />
              <label className="font-OssemRegular ">Recieve updates via the OG Marketing Channels?</label>
            </div>
            <div className="flex items-center justify-center">
              <button
                className=" font-medium  text-[#101828] rounded-3xl px-7 py-3 bg-white shadow hover:shadow-md shadow-white hover:shadow-white duration-300 mt-8 text-xl hover:scale-105"
                onClick={(e) => { dataSend() }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
