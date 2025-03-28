import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import balloonImage from "../assets/balloon.png"; // Import the balloon image

export default function AccountConfirmation() {
  const navigate = useNavigate();

  // State to store user details
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    accountNumber: "",
  });

  // Load user details from localStorage
  useEffect(() => {
    const firstName = localStorage.getItem("firstName") || "User";
    const lastName = localStorage.getItem("lastName") || "";
    const username = localStorage.getItem("username") || "unknown";

    // Generate an account number (random for now)
    const accountNumber = localStorage.getItem("accountNumber") || Math.floor(1000000000 + Math.random() * 9000000000).toString();
    localStorage.setItem("accountNumber", accountNumber); // Save it if not already stored

    setUserDetails({ firstName, lastName, username, accountNumber });
  }, []);

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-6 bg-white">
      {/* Balloon Image */}
      <img src={balloonImage} alt="Celebration Balloons" className="w-24 h-24 mt-6" />

      {/* Header */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold text-[#3a3c4c]">
          Your FastEGO account is open, {userDetails.firstName}!
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Great news, you’ve joined FastEGO. You can now make transfers and more.
        </p>
      </div>

      {/* Account Information */}
      <div className="w-full mt-6 space-y-4">
        <div className="flex justify-between items-center p-3 border rounded-lg bg-gray-100">
          <span>Account Number</span>
          <span className="font-semibold">{userDetails.accountNumber}</span>
          <button onClick={() => copyToClipboard(userDetails.accountNumber)}>📋</button>
        </div>

        <div className="flex justify-between items-center p-3 border rounded-lg bg-gray-100">
          <span>Account Name</span>
          <span className="font-semibold">{userDetails.firstName} {userDetails.lastName}</span>
          <button onClick={() => copyToClipboard(`${userDetails.firstName} ${userDetails.lastName}`)}>📋</button>
        </div>

        <div className="flex justify-between items-center p-3 border rounded-lg bg-gray-100">
          <span>Institution Name</span>
          <span className="font-semibold">FastEGO</span>
        </div>
      </div>

      {/* Continue Button */}
      <button
        className="w-full h-12 mt-6 rounded-lg text-white font-semibold bg-[#18A0FB]"
        onClick={() => navigate("/home")}
      >
        Continue to the app
      </button>
    </div>
  );
}
