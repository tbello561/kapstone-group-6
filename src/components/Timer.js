import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
// import audio from "../assets/electronic-intro-music.mp3";

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
    const buzzerSound = new Audio("src/assets/clock-tick9.wav");
    if (counter === 0) {
      buzzerSound.play();
    }
    if (isOn && counter > 0) {
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
        <button className="btn  " onClick={toggle}>
          {isOn ? "Stop" : "Start"}
        </button> 
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
