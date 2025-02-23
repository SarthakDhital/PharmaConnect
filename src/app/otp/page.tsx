"use client"
import { useState } from 'react';

const OtpPage = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Only allow numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`)?.focus(); // Focus next input
    }
  };

  // Handle backspace to move to the previous input
  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`)?.focus(); // Focus previous input
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-semibold mb-8">Enter OTP</h1>
      <div className="flex space-x-4 justify-center mt-10">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            className="w-12 h-12 text-center border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      <button className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Verify OTP
      </button>
    </div>
  );
};

export default OtpPage;