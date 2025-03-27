import { useState } from "react";
import { FaArrowLeft, FaEye } from "react-icons/fa";

export default function GetStartedPage() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col w-full min-h-screen p-6">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <FaArrowLeft className="text-gray-600 text-xl" />
        <span className="text-sm text-gray-500">Step 1/5</span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-300 mt-2">
        <div className="h-full w-1/5 bg-[#0A3A5A]"></div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-[#3a3c4c] mt-6">
        Get started with your <br /> account!
      </h2>

      {/* Input Fields */}
      <div className="mt-6">
        <label className="text-gray-500 text-sm">Email Address</label>
        <input
          type="email"
          className="w-full border-b border-gray-300 p-2 focus:outline-none"
        />

        <div className="relative mt-6">
          <label className="text-gray-500 text-sm">Password</label>
          <input
            type="password"
            className="w-full border-b border-gray-300 p-2 focus:outline-none"
          />
          <FaEye className="absolute right-2 top-8 text-gray-500" />
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex items-center mt-6">
        <input
          type="checkbox"
          id="terms"
          className="w-5 h-5 border-gray-300"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-500">
          I have read and I understand FastEGO Bank’s 
          <span className="text-[#18A0FB]"> Terms and conditions </span> 
          and <span className="text-[#18A0FB]"> Privacy Policy</span>.
        </label>
      </div>

      {/* Get Started Button */}
      <button
        className={`w-full h-12 mt-6 rounded-lg text-white font-semibold ${
          isChecked
            ? "bg-gradient-to-r from-[#0A3A5A] to-[#18A0FB]"
            : "bg-gray-300"
        }`}
        disabled={!isChecked}
      >
        Get Started
      </button>
    </div>
  );
}
