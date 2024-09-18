import React from 'react';

const RailMadad = () => {
  return (
    <header className="bg-white px-4 py-3 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28ef304b5e858a05aa2e60105cb8efcadc4e0bf281f34f14c1c98e3c2b93eaae?placeholderIfAbsent=true&apiKey=b15609f616694ef19fbcd9e8c68bf22d"
            alt="RailMadad Logo"
            className="h-16 w-auto"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-rose-900">RailMadad</h1>
            <p className="text-xs md:text-sm text-black">For Inquiry, Assistance & Grievance Redressal</p>
          </div>
        </div>

        {/* Contact and Assistance */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2 bg-rose-800 text-white text-lg md:text-xl font-semibold px-4 py-2 rounded-md">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/37399a8a88540a1e62e44c67a493a6228ae3f92c55f14110b70fcd3d16847f79?placeholderIfAbsent=true&apiKey=b15609f616694ef19fbcd9e8c68bf22d"
              alt="139"
              className="w-6 h-6"
            />
            139
          </div>
          <p className="text-xs md:text-base text-black">for Security/Medical Assistance</p>

          {/* Login and Signup */}
          <div className="flex gap-2">
            <button className="px-4 py-1 bg-violet-200 rounded-md text-xs md:text-sm">Log In</button>
            <button className="px-4 py-1 bg-stone-200 rounded-md text-xs md:text-sm">Sign Up</button>
          </div>

          {/* Language and Accessibility */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba33a681214f647b46dd82407f227f52274b928ccee8915cae3267a283d3660f?placeholderIfAbsent=true&apiKey=b15609f616694ef19fbcd9e8c68bf22d"
                alt="Language"
                className="h-6 w-auto"
              />
              <span className="text-xs md:text-sm">English</span>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7f31f172ec308aac5ede0d348ec979e17f80e480ab25ec76d2249f0b5160a74?placeholderIfAbsent=true&apiKey=b15609f616694ef19fbcd9e8c68bf22d"
              alt="Accessibility"
              className="h-8 w-8"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default RailMadad;
