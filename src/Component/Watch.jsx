import React, { useState, useEffect } from "react";

export default function Watch() {
  const [sec, setSec] = useState(0);
  const [Running, setRunning] = useState(false);

  useEffect(() => {
    let intervalID;
    if (Running) {
      intervalID = setInterval(() => {
        setSec((perv) => perv + 1);
      }, 1000);
    }
    return () => clearInterval(intervalID);
  }, [Running]);
  const handlestart = () => {
    setRunning(true);
  };
  //   console.log(Running);
  const handleStop = () => {
    setRunning(false);
  };
  const handlereset = () => {
    setRunning(false);
    setSec(0);
  };

  return (
    <div>
      <h2>timer:{sec}</h2>
      <button onClick={handlestart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handlereset}>reset</button>
    </div>
  );
}
