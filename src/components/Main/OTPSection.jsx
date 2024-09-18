import React, { useState } from 'react';
import Button from './Button';

const OTPSection = () => {
  const [mobileNo, setMobileNo] = useState('');

  const handleMobileNoChange = (e) => {
    setMobileNo(e.target.value);
  };

  const handleGetOTP = () => {
    console.log('Get OTP for mobile number:', mobileNo);
  };

  return (
    <div className="flex justify-center py-2">
      <div className="max-w-[328px] w-full bg-white shadow-lg p-6 rounded-md">
        <label htmlFor="mobile-no" className="block mb-2">Mobile No.</label>
        <input
          type="tel"
          id="mobile-no"
          value={mobileNo}
          onChange={handleMobileNoChange}
          className="w-full p-2 border rounded-md mb-4"
        />
        <Button type="button" className="bg-rose-900 w-full text-white" onClick={handleGetOTP}>
          Get OTP
        </Button>
      </div>
    </div>
  );
};

export default OTPSection;
