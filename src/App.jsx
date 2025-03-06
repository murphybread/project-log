import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TabButton } from "./components/TabButton.jsx";
import { ProjectContainer } from "@components/ProjectContainer.jsx";
import { Timer } from "@components/Timer.jsx";
import { SideNavigation } from "@components/SideNavigation.jsx";
import { MuiComponents } from "@components/MuiComponents.jsx";

import { SideNavigationMui } from "@components/SideNavigationMui.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <MuiComponents /> */}
      <main style={{ display: "flex", gap: 30 }}>
        <SideNavigation />
        <SideNavigationMui />
      </main>
    </>
  );
}

export default App;
