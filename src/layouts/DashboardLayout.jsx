import React from "react";

const DashboardLayout = ({ children, sidebar, header }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1/4 bg-stone-400 z-0"></div>
      <div className="absolute top-0 left-0 w-1/4 h-screen bg-gray-600 z-0"></div>

      {/* Sidebar content */}
      {sidebar && <div className="absolute top-0 left-0 w-1/4 h-screen z-10 p-4 text-white">{sidebar}</div>}

      {/* Header content */}
      {header && <div className="absolute top-0 left-1/4 w-3/4 h-1/4 z-10 p-4">{header}</div>}

      {/* Main content area */}
      <div className="absolute top-1/4 left-1/4 z-10 p-4 w-3/4 h-3/4 overflow-auto">
        <div className="bg-white rounded-lg shadow-lg p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
