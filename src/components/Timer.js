import React, { useState, useEffect } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(60);
  const [isOn, setIsOn] = useState(false);

  function toggle() {
    setIsOn(!isOn);
  }

  function reset() {
    setCounter(60);
    setIsOn(false);
  }

  useEffect(() => {
    let interval = null;
    if (isOn) {
      interval = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
    } else if (!isOn && counter !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOn, counter]);

  return (
    <div className="app">
      <div className="time">Timer: {counter}</div>
      <div className="rowTimer">
        <button className="timerButton" onClick={toggle}>
          {isOn ? "Stop" : "Start"}
        </button>
        <button className="timerButton" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
