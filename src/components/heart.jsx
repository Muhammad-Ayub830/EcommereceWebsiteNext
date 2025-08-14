"use client";
import React from "react";
import Wave from "react-wavify";

const Heart = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Define the heart mask */}
      <mask id="heartMask">
        <path
          d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 
             Q90,65,50,95 Q10,65,10,35 Z"
          fill="white"
        />
      </mask>

      {/* Waves inside the heart */}
      <foreignObject width="100%" height="100%" mask="url(#heartMask)">
        <Wave
          fill="#e62315"
          paused={false}
          options={{
            height: 20,
            amplitude: 10,
            speed: 0.3,
            points: 5,
          }}
        />
      </foreignObject>
    </svg>
  );
};

export default Heart;
