// Timer.jsx
import React from "react";
import { useState, useEffect, useRef } from "react";
import Button from "@ui/Button";

export function Timer({ initialTime = 0 }) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(initialTime);
  const startTimeRef = useRef(null);
  const pausedTimeRef = useRef(initialTime);
  const requestRef = useRef(null);

  const displayTime = (time) => {
    return Math.min(time, 59.99).toFixed(0).padStart(2, "0");
  };

  useEffect(() => {
    let animationFrameId = null;

    if (isRunning) {
      // 시작 시간 저장 (현재 시간)
      startTimeRef.current = Date.now() - pausedTimeRef.current;

      const updateTimer = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTimeRef.current;
        setTime(elapsedTime);
        animationFrameId = requestAnimationFrame(updateTimer);
      };

      animationFrameId = requestAnimationFrame(updateTimer);
    } else {
      // 멈췄을 때 총 경과 시간 저장
      pausedTimeRef.current = time;
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTime(0);
    pausedTimeRef.current = 0;
    if (isRunning) {
      startTimeRef.current = Date.now();
    }
  };

  const handleRecordClick = () => {
    // 시간을 형식화
    const totalSeconds = Math.floor(time / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    let formattedTime = "";
    if (hours > 0) {
      formattedTime += `${hours}h `;
    }

    // 최소 1분 보장
    const displayMinutes = minutes > 0 ? minutes : 1;
    formattedTime += `${displayMinutes}m`;

    // 커스텀 이벤트를 통해 시간 데이터 전달
    const recordEvent = new CustomEvent("timer:record", {
      detail: { timeSpent: formattedTime.trim() },
    });
    window.dispatchEvent(recordEvent);
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
          className={`border border-black mb-2.5 w-[200px] cursor-pointer ${isRunning ? "bg-blue-600 text-gray-900" : "bg-sky-700 text-black"}`}
          onClick={toggleTimer}
        >
          {isRunning ? "Pause" : "Start"}
        </Button>

        <Button
          className="border border-black mb-2.5 w-[200px] cursor-pointer bg-sky-700 text-black active:bg-teal-600 active:text-gray-900"
          onClick={resetTimer}
        >
          Reset
        </Button>

        <Button className="border border-black rounded-lg bg-sky-600 cursor-pointer absolute bottom-2.5 right-2.5" onClick={handleRecordClick}>
          Record
        </Button>
      </div>
    </div>
  );
}
