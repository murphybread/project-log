import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import DashboardLayout from "@layouts/DashboardLayout";
import { SideNavigation } from "@components/SideNavigation";
import useProjectStore from "@store/projectStore";
import { Timer } from "@components/Timer";

function DashboardPage() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { setSelectedProjectId } = useProjectStore();

  useEffect(() => {
    if (projectId) {
      setSelectedProjectId(projectId);
    }
  }, [projectId, setSelectedProjectId]);

  return (
    <DashboardLayout
      header={
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">프로젝트 대시보드</h1>
          <button onClick={() => navigate("/")} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">
            홈으로 돌아가기
          </button>
        </div>
      }
    >
      <SideNavigation id={projectId} />
      <Timer></Timer>
    </DashboardLayout>
  );
}

export default DashboardPage;
