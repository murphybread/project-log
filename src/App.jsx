import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TabButton } from "./components/TabButton.jsx";
import { ProjectContainer } from "@components/ProjectContainer.jsx";
import { Timer } from "@components/Timer.jsx";
import { SideNavigation } from "@components/SideNavigation.jsx";

import DashboardLayout from "./layouts/DashboardLayout";

import Box from "./ui/Box.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(null);

  return (
    <DashboardLayout
      header={
        <div>
          {/* Header content goes here */}
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
      }
    >
      <SideNavigation id="project-1"></SideNavigation>
      <Timer></Timer>
    </DashboardLayout>
  );
}

export default App;
