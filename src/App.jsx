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

  return (
    <DashboardLayout
      sidebar={
        <div>
          {/* Sidebar content goes here */}
          <h2 className="text-xl font-bold mb-4">Project Log</h2>
          <nav className="mt-6">{/* Sidebar navigation items */}</nav>
        </div>
      }
      header={
        <div>
          {/* Header content goes here */}
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
      }
    >
      <SideNavigation id="project-1"></SideNavigation>
    </DashboardLayout>
  );
}

export default App;
