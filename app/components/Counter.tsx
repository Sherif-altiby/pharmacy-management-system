"use client";

import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
 
    const [counterOn, setCounterOn] = useState(false)

  return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
             <div>
                {counterOn && ( <CountUp start={0} end={10000} duration={1} delay={0} />) }
             </div>
        </ScrollTrigger>
  )
}

export default Counter