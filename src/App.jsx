import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TabButton } from "./components/TabButton.jsx";
import { ProjectContainer } from "@components/ProjectContainer.jsx";
import { Timer } from "@components/Timer.jsx";
import { SideNavigation } from "@components/SideNavigation.jsx";
import { MuiComponents } from "@components/MuiComponents.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MuiComponents />
      {/* <SideNavigation /> */}
    </>
  );
}

export default App;
