import React from "react";

const Header = ({ logo }) => {
  return (
    <div className="absolute top-44 bg-gradient-to-r from-white/80 via-white/80 to-transparent w-[60%] py-2 2xl:py-5 flex items-center justify-center lg:justify-end select-none">
      <div className="lg:mr-20 xl:mr-36 py-8 ml-4">
        <div className="flex items-end mb-1">
          <img src={logo} alt="logo-image" className="w-[180px] lg:w-[260px]" />
          <p className="text-[#3f3f3f] text-lg md:text-2xl lg:text-3xl ml-2 md:leading-none">
            The
          </p>
        </div>
        <h1 className="text-[#8bc540] italic text-2xl lg:text-[3.2rem] md:text-3xl md:leading-none font-medium">
          Fastest, Most Accurate
        </h1>
        <p className="text-xl lg:text-4xl text-[#3f3f3f] italic md:text-2xl">
          Way to Close Your Books!
        </p>
      </div>
    </div>
  );
};

export default Header;
