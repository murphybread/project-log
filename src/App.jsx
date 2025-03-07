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
import Card from "@ui/Card.jsx";
import CardHeader from "@ui/CardHeader.jsx";
import CardContent from "@ui/CardContent.jsx";
import CardMedia from "@ui/CardMedia.jsx";
import Button from "@ui/Button";
import Divider from "@ui/Divider.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <MuiComponents /> */}
      <main style={{ display: "flex", gap: 30 }}>
        <Button> Button Default</Button>
        <Card variant="outlined" elevation={4} className="px-0">
          <CardHeader title="타이틀" subtitle="subtitle" />
          <Divider />
          <CardContent>카드 컨텐츠</CardContent>
          <CardMedia type="image" alt="react logo" />
        </Card>

        {/* <SideNavigation />  */}
        {/* <SideNavigationMui /> */}
      </main>
    </>
  );
}

export default App;
