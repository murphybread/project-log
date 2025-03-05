import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TabButton } from "./components/TabButton.jsx";
import { ProjectContainer } from "@components/ProjectContainer.jsx";
import { Timer } from "@components/Timer.jsx";
import { SideNavigation } from "@components/SideNavigation.jsx";
import { MuiComponents } from "@components/MuiComponents.jsx";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SideNavigationMui } from "@components/SideNavigationMui.jsx";

const theme = createTheme({
  pallete: {
    primary: {
      main: "#3b82f6",
    },
  },
  projectStatuses: {
    success: {
      label: "success",
    },
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      {/* <MuiComponents /> */}
      <main style={{ display: "flex", gap: 30 }}>
        <SideNavigation />
        <SideNavigationMui />
      </main>
    </ThemeProvider>
  );
}

export default App;
