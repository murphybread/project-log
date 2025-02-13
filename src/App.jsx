import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TabButton } from "./components/TabButton.jsx";
import { ProjectContainer } from "@components/ProjectContainer.jsx";
import { Timer } from "@components/Timer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TabButton name="Home" />
      <TabButton name="Page1" />
      <button
        className="
    px-6 
    py-3 
    bg-blue-500 
    text-white 
    rounded-lg 
    shadow-md 
    transition-all 
    duration-300 
    ease-in-out 
    transform 
    hover:-translate-y-4 
    hover:shadow-xl
    hover:delay-100
  "
      >
        Hover Me
      </button>
      <ProjectContainer />
      <Timer />
    </>
  );
}

export default App;
