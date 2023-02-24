import React from "react";

import simple from "../../Assets/simple.png";
import valentine from "../../Assets/valent.png";
import shield from "../../Assets/shield.png";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        The value that holds us true and to continue
      </h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singlegrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[14px] text-textColor opacity-[.7] py-[1rem]">
            Things being made beautiful simple area at the heart of everthing we
            do.
          </p>
        </div>

        <div className="singlegrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={valentine} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[14px] text-textColor opacity-[.7] py-[1rem]">
            We belive in making thing better for everyone, even if just a little
            bit!!!
          </p>
        </div>

        <div className="singlegrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={shield} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[14px] text-textColor opacity-[.7] py-[1rem]">
            We work on the basic creating trust whic can be natured through
            authenticity and transparency
          </p>
        </div>
      </div>

      <div className="card mt-[2rem] flex justify-between bg-bluecolor p-[5rem] rounded-[10px]">
        <div>
          <h1 className="text-bluecolor text-[30px] font-bold">
            ready to switch a career
          </h1>
          <h2 className="text-textColor text-[25px] font-bold">
            Let's get started!
          </h2>
        </div>
        <button
          className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-bluecolor
         hover:bg-blue-700 hover:text-white border-bluecolor"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Value;
