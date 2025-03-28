import { FaArrowLeft, FaLock } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserInfoForm() {
  const navigate = useNavigate();

  // Load existing data from localStorage (if available)
  const [formData, setFormData] = useState(() => {
    return {
      firstName: localStorage.getItem("firstName") || "",
      lastName: localStorage.getItem("lastName") || "",
      username: localStorage.getItem("username") || "",
    };
  });

  // Check if form is valid
  const isFormValid = formData.firstName && formData.lastName && formData.username;

  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("firstName", formData.firstName);
    localStorage.setItem("lastName", formData.lastName);
    localStorage.setItem("username", formData.username);
  }, [formData]);

  const handleSubmit = () => {
    if (isFormValid) {
      // Navigate to the next step
      navigate("/Submit"); 
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen p-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <FaArrowLeft
          className="text-gray-600 text-xl cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <span className="text-sm text-gray-500">Step 4/5</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-300 mt-2">
        <div className="h-full w-4/5 bg-[#18A0FB]"></div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-[#3a3c4c] mt-6">
        Just a little bit more about yourself
      </h2>
      <p className="text-gray-500 text-sm mt-2">
        We need some additional information from you to secure your account.
      </p>

      {/* Input Fields */}
      <div className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="First name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="text"
          placeholder="Last name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="text"
          placeholder="Create your username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />
      </div>

      {/* Security Notice */}
      <div className="flex flex-col items-center mt-6 text-gray-500 text-sm">
        <FaLock className="text-xl mb-1" />
        <p>Your information is secured with encryption.</p>
      </div>

      {/* Submit Button */}
      <button
        className={`w-full h-12 mt-6 rounded-lg text-white font-semibold ${
          isFormValid ? "bg-[#18A0FB]" : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!isFormValid}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
