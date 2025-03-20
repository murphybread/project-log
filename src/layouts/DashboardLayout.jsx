import React, { useState } from "react";
import { ArrowLeftIcon } from "../assets/ArrowLeftIcon";

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
    <div className="flex min-h-screenl overflow-auto">
      {/* Sidebar Column */}
      <div className="relative flex flex-col w-1/4 min-h-screen bg-gray-600 z-10">
        {/* Sidebar content */}
        <div className="flex-grow p-4 text-white">
          {sidebar}

          {/* 메인 컨텐츠가 사이드바로 이동되었을 때 */}
          {contentInSidebar && (
            <div className="mt-4">
              <button onClick={moveToMain} className="mb-2 p-2 bg-indigo-300 hover:bg-gray-200 text-stone-800 rounded-md transition-colors">
                메인으로 돌아가기
              </button>
              <div className="p-2 max-h-[70vh] pointer-events-none  ">{children}</div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Column */}
      <div className="relative flex flex-col w-3/4 h-full">
        {/* Background element - 상단 배경 */}
        <div className="absolute top-0 left-0 w-full h-[10%] bg-stone-400 z-0"></div>

        {/* Header 영역 */}
        {header && <div className="w-full h-[10%] z-10 p-4 relative">{header}</div>}

        {/* Main content area */}
        {!contentInSidebar && (
          <div className="flex-grow flex justify-center p-4 z-10">
            {/* 실제 컨텐츠를 담는 컨테이너 - 높이는 부모의 50%만 차지하지만 가운데 정렬 */}
            <div className="relative rounded-lg shadow-lg w-full max-w-4xl h-1/2 mx-auto">
              {/* 프로젝트 선택 버튼 - 상단에 명확하게 표시 */}
              <div className="absolute top-0 left-0 right-0 flex justify-end items-center">
                <button
                  onClick={moveToSidebar}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center"
                >
                  <span>프로젝트 선택</span>
                  <ArrowLeftIcon></ArrowLeftIcon>
                </button>
              </div>

              {/* children 컨텐츠 - 버튼 영역을 고려한 패딩 */}
              <div className="p-4 pt-20">{children}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
