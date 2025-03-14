import React, { useState } from "react";

const DashboardLayout = ({ children, sidebar, header }) => {
  const [contentInSidebar, setContentInSidebar] = useState(false);

  // 컨텐츠를 사이드바로 이동시키는 함수
  const moveToSidebar = () => {
    setContentInSidebar(true);
  };

  // 컨텐츠를 메인 영역으로 되돌리는 함수
  const moveToMain = () => {
    setContentInSidebar(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Column */}
      <div className="relative flex flex-col w-1/4 h-full bg-gray-600 z-10">
        {/* Sidebar content */}
        <div className="flex-grow p-4 text-white pointer-events-none">
          {sidebar}

          {/* 메인 컨텐츠가 사이드바로 이동되었을 때 */}
          {contentInSidebar && (
            <>
              <button
                onClick={moveToMain}
                className="mt-4 mb-2 p-2 pointer-events-auto bg-indigo-300 hover:bg-gray-200 text-stone-800 rounded-md transition-colors"
              >
                메인으로 돌아가기
              </button>
              {children}
            </>
          )}
        </div>
      </div>

      {/* Main Content Column */}
      <div className="relative flex flex-col w-3/4 h-full">
        {/* Background element - 상단 1/4 배경 */}
        <div className="absolute top-0 left-0 w-full h-1/4 bg-stone-400 z-0"></div>

        {/* Header content */}
        <div className="w-full h-1/4 z-10 p-4 relative">{header}</div>

        {/* Main content area */}
        {!contentInSidebar && (
          <div className="flex-grow p-2 flex items-center justify-center z-10">
            <div className="bg-white rounded-lg shadow-lg w-full h-1/2  cursor-pointer" onClick={moveToSidebar}>
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
