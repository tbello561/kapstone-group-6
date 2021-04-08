import React from "react";
import { useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(60);
  const [isOn, setIsOn] = useState(false);

  function startTimer() {
    setIsOn(true);
    //  const timeHolder = setInterval(() =>{
    //         //setTimer(timeHolder)
    //          if(timer > 0) {
    //           setTimer(timer - 1)
    //          }
    //         }, 1000)
    const countDown = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
  }

  function stopTimer() {
    setIsOn(false);

    clearInterval(timer);
    Timer();
  }

  const start = timer > 0 ? <button onClick={startTimer}>Start</button> : null;
  const stop = isOn ? <button onClick={stopTimer}>Stop</button> : null;

  return (
    <div>
      <h4>Timer:{timer}</h4>
      {start}
      {stop}
    </div>
  );
}

export default Timer;
