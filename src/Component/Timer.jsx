import React, { useEffect, useState } from "react";

export default function Timer() {
  const [sec, setSec] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>seconds:{sec}</h2>
    </div>
  );
}

//  setSec(prev=>prev+1)  + delay time---first iteration
//  setSec(prev=>prev+1)  + delay time---- second iteration
//  setSec(prev=>prev+1)  + delay time
//  setSec(prev=>prev+1)  + delay time
//  setSec(prev=>prev+1)  + delay time
//  setSec(prev=>prev+1)  + delay time
//  setSec(prev=>prev+1)  + delay time
//  setSec(prev=>prev+1)  + delay time
//  setSec(prev=>prev+1)  + delay time
