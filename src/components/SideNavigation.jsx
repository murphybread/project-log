// SideNavigation.jsx
import "./SideNavigation.css";

export function SideNavigation() {
  return (
    <div className="side-navigation-container">
      <div className="side-navigation-title">Side Navigation Title</div>
      <div className="side-navigation-title-items-container">
        <div className="side-navigation-items">타이틀 아이템1</div>
        <div className="side-navigation-items">타이틀 아이템2</div>
      </div>

      <h3>Side Navigation item</h3>
      <div className="side-navigation-items">아이템</div>
    </div>
  );
}
