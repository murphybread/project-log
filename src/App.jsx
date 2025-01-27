import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TabButton } from "./components/TabButton.jsx";
import { ProjectContainer } from "@components/ProjectContainer.jsx";

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
