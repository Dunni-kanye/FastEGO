import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePasscode() {
  const navigate = useNavigate();
  const [passcode, setPasscode] = useState("");

  // Allowed characters: A-Z, a-z, 0-9
  const handleKeyPress = (char) => {
    if (passcode.length < 6) {
      setPasscode(passcode + char);
    }
  };

  const handleBackspace = () => {
    setPasscode(passcode.slice(0, -1));
  };

  return (
    <div className="flex flex-col w-full min-h-screen p-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <FaArrowLeft
          className="text-gray-600 text-xl cursor-pointer"
          onClick={() => navigate("/secure-access")}
        />
        <span className="text-sm text-gray-500">Step 3/5</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-300 mt-2">
        <div className="h-full w-3/5 bg-[#18A0FB]"></div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-[#3a3c4c] mt-6">Create your passcode</h2>
      <p className="text-gray-500 text-sm mt-2">
        This will be used for logging in, so please don’t share it with anyone.
      </p>

      {/* Passcode Dots */}
      <div className="flex justify-center space-x-3 my-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border-2 ${
              passcode.length > index ? "bg-[#18A0FB] border-[#18A0FB]" : "border-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Alphanumeric Keyboard */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {[
          ..."1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
          "←", // Backspace
        ].map((char, index) => (
          <button
            key={index}
            onClick={() => (char === "←" ? handleBackspace() : handleKeyPress(char))}
            className="w-full h-12 flex items-center justify-center rounded-lg text-lg font-semibold bg-gray-200"
          >
            {char}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        className={`w-full h-12 mt-6 rounded-lg text-white font-semibold ${
          passcode.length === 6
            ? "bg-gradient-to-r from-[#18A0FB] to-[#0A3A5A]"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={passcode.length < 6}
        onClick={() => navigate("/confirm-passcode")}
      >
        Next
      </button>
    </div>
  );
}
