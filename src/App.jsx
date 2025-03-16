import { useState } from "react";
import "./App.css";
import HomeLayout from "@layouts/HomeLayout";
import DashboardLayout from "@layouts/DashboardLayout";
import { SideNavigation } from "@components/SideNavigation";
import useProjectStore from "@store/projectStore";

function App() {
  // 테스트용: 레이아웃 전환 위한 상태
  const [showHome, setShowHome] = useState(true);
  const { selectedProjectId, setSelectedProjectId } = useProjectStore();

  // 프로젝트 선택 시 대시보드로 전환하는 함수 (나중에 라우터로 대체)
  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId);
    setShowHome(false);
  };

  // 홈으로 돌아가는 함수
  const handleBackToHome = () => {
    setShowHome(true);
  };

  return (
    <>
      {showHome ? (
        // 홈 레이아웃 - 모든 프로젝트 표시
        <HomeLayout onProjectSelect={handleProjectSelect} />
      ) : (
        // 대시보드 레이아웃 - 선택된 프로젝트 상세 표시
        <DashboardLayout
          header={
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">프로젝트 대시보드</h1>
              <button onClick={handleBackToHome} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">
                홈으로 돌아가기
              </button>
            </div>
          }
        >
          <SideNavigation id={selectedProjectId}></SideNavigation>
        </DashboardLayout>
      )}
    </>
  );
}

export default App;
