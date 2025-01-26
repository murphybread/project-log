import { useState } from "react";
import "./TabButton.css";

export function TabButton({ name }) {
  const [isActive, setIsActive] = useState(false);
  const buttonClass = isActive ? "tab-button active" : "tab-button";
  function handleState() {
    setIsActive(!isActive);
  }
  return (
    <button role="tab" className={buttonClass} onClick={handleState}>
      {name}
    </button>
  );
}
