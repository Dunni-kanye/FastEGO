import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import nigeriaFlag from "../assets/nigeria-flag.png"; // Make sure to add the flag image

export default function MobileNumberPage() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex flex-col w-full min-h-screen p-6">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <FaArrowLeft className="text-gray-600 text-xl" />
        <span className="text-sm text-gray-500">Step 2/5</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-300 mt-2">
        <div className="h-full w-2/5 bg-[#18A0FB]"></div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-[#3a3c4c] mt-6">
        What’s your mobile <br /> number?
      </h2>
      <p className="text-gray-500 text-sm mt-2">
        We’ll use this to generate a FastEGO wallet account number.
      </p>

      {/* Phone Input Section */}
      <div className="flex items-center border-b border-gray-300 mt-6 pb-2">
        {/* Country Code */}
        <div className="flex items-center space-x-2 border-r pr-4">
          <img src={nigeriaFlag} alt="Nigeria Flag" className="w-6 h-4" />
          <span className="text-lg text-gray-700">+234</span>
        </div>
        {/* Phone Number Input */}
        <input
          type="tel"
          className="flex-1 ml-4 p-2 focus:outline-none text-lg text-gray-700"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      {/* Disclaimer Text */}
      <p className="text-gray-500 text-xs mt-6">
        By providing your phone number, you agree that we may contact you by SMS/text messaging.
        Carrier messaging and data rates may apply.
      </p>

      {/* Submit Button */}
      <button
        className={`w-full h-12 mt-6 rounded-lg text-white font-semibold ${
          phoneNumber.length >= 10
            ? "bg-gradient-to-r from-[#18A0FB] to-[#0A3A5A]"
            : "bg-gray-300"
        }`}
        disabled={phoneNumber.length < 10}
      >
        Submit
      </button>
    </div>
  );
}
