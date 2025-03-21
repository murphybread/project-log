import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react"; // useState 추가
import DashboardLayout from "@layouts/DashboardLayout";
import { SideNavigation } from "@components/SideNavigation";
import useProjectStore from "@store/projectStore";
import { Timer } from "@components/Timer";
import { ClientApi } from "@api/ClientApi";

function DashboardPage() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { setSelectedProjectId } = useProjectStore();

  const [project, setProject] = useState(null);
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  // URL쿼리값에서 project Id 추출 후 Zustand 스토어에 projectId 설정
  useEffect(() => {
    if (projectId) {
      setSelectedProjectId(projectId);
    }
  }, [projectId, setSelectedProjectId]);

  // 프로젝트 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = new ClientApi();
        const projectData = await client.getProject(projectId); // id → projectId로 수정
        setProject(projectData);
        setCommits(await client.getCommitByProjectId(projectId)); // id → projectId로 수정
        setLoading(false);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    if (projectId) {
      // projectId가 있을 때만 실행
      fetchData();
    }

    let intervalId;
    if (loading) {
      intervalId = setInterval(() => {
        fetchData();
      }, 10000);
    }

    // Clean up function
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [loading, projectId]); // id → projectId로 수정

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (project === null) {
    return <div>프로젝트 fetch에 실패하였습니다! {new Date().toString()}</div>;
  }

  // project 객체가 속성을 가지고 있는지 확인하는 함수
  const hasProperty = (obj, prop) => {
    return Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop] !== null;
  };

  return (
    <DashboardLayout
      header={
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl font-bold">프로젝트 대시보드: {hasProperty(project, "name") ? project.name : "제목 없음"}</h1>
          <button onClick={() => navigate("/")} className="px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-300 transition-colors">
            홈으로 돌아가기
          </button>
        </div>
      }
      project={project}
    >
      <SideNavigation project={project} commits={commits} />
    </DashboardLayout>
  );
}

export default DashboardPage;
