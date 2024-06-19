"use client";

import { useState } from "react";
import CountUp from "react-countup";

const Counter: React.FC = () => {
  const [counterOn, setCounterOn] = useState(false);

  const value = 300;
  const total = 300;
  const deg = ((value / total) * 270 ) + 45;

  const style: React.CSSProperties = {
    transform: `rotate(${deg}deg)`,
  };

  return (
    <>
      <div className="w-full">
        <div className="w-[300px] h-[300px] rounded-full border-[20px] border-slate-600 border-b-transparent mx-auto mt-28 relative">
          <div className="absolute text-xl font-semibold bottom-[37px] left-[37px]">0</div>
          <div className="absolute text-xl font-semibold top-[137px] left-[5px]">1</div>
          <div className="absolute text-xl font-semibold top-[70px] left-[15px]">5</div>
          <div className="absolute text-xl font-semibold left-[55px] top-[23px]">10</div>
          <div className="absolute text-xl font-semibold top-0 left-1/2 translate-x-[-50%]">20</div>
          <div className="absolute text-xl font-semibold top-[23px] right-[55px]">30</div>
          <div className="absolute text-xl font-semibold top-[70px] right-[15px]">50</div>
          <div className="absolute text-xl font-semibold top-[137px] right-[5px]">75</div>
          <div className="absolute text-xl font-semibold bottom-[37px] right-[37px]">100</div>

          <div className="absolute counter w-[10px] h-[80px] top-[48%] left-[47%]" style={style} ></div>

          <div className="numbers absolute bottom-0 text-3xl left-1/2 translate-x-[-50%]">
            <CountUp start={0.00} end={1000} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
