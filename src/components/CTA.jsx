import React from "react";

const CTA = () => {
  return (
    <div className="flex bg-white rounded-md mx-auto w-[95%] md:w-[80%] lg:max-w-[980px] overflow-hidden  absolute bottom-20 :left-1/4 select-none">
      <div className="bg-[#8bc540] demo py-5 px-2 md:px-8 text-white items-center flex flex-col justify-center text-center md:text-left">
        <h1 className="font-semibold text- md:text-2xl">SCHEDULE A DEMO</h1>
        <p className="text-sm md:text-base">Learn More About FloQast.</p>
      </div>

      <div className=" flex flex-col items-center mx-auto justify-center py-4 md:px-5 px-2 text-center md:text-left">
        <h1 className="text-[#6d6e70] text-lg md:text-2xl font-semibold mb-2">
          Learn How FloQast Can{" "}
          <span className="text-[#8bc540]">Improve Your Month-End</span>
        </h1>
        <div className="flex flex-col lg:flex-row space-x-0 space-y-2 lg:space-y-0 lg:space-x-5 w-full justify-between">
          <input
            type="text"
            placeholder="First Name*"
            className="border-2 border-neutral-100 px-2 py-1 rounded-md focus:border-[#8bc540] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name *"
            className="border-2 border-neutral-100 px-2 py-1 rounded-md focus:border-[#8bc540] focus:outline-none"
          />
          <button className="bg-[#8bc540] text-white font-bold px-8 rounded-md border-2 border-[#6f973b]">
            SCHEDULE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
