import React from "react";
import { useState, useEffect } from "react";
import Button from "@ui/Button";

export function Timer({ initialTime = 0 }) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(initialTime);

  const displayTime = (time) => {
    return Math.min(time, 59.99).toFixed(0).padStart(2, "0");
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTime(0);
  };

  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const totalCentiseconds = Math.floor((time % (1000 * 60)) / 10);
  const secondsPart = Math.floor(totalCentiseconds / 100);
  const centisecondsPart = totalCentiseconds % 100;

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[350px] border border-black relative">
      <div className="flex gap-5 justify-center w-full">
        <div className="p-5 w-full border border-black bg-blue-200 text-2xl">
          {displayTime(hours)}:{displayTime(minutes)}:{String(secondsPart).padStart(2, "0")}.{String(centisecondsPart).padStart(2, "0")}
        </div>
      </div>

      <div className="flex gap-5 justify-center w-full">
        <Button
          className={`border border-black mb-2.5 w-[200px] cursor-pointer ${isRunning ? "bg-blue-500 text-gray-900" : "bg-white text-black"}`}
          onClick={toggleTimer}
        >
          {isRunning ? "Pause" : "Start"}
        </Button>

        <Button
          className="border border-black mb-2.5 w-[200px] cursor-pointer bg-white text-black active:bg-teal-600 active:text-gray-900"
          onClick={resetTimer}
        >
          Reset
        </Button>

        <Button className="border border-black rounded-lg bg-gray-200 cursor-pointer absolute bottom-2.5 right-2.5">Record</Button>
      </div>
    </div>
  );
}
