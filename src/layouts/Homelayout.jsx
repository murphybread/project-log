import { useState, useEffect } from "react";
import { ClientApi } from "@api/ClientApi";
import Card from "@ui/Card";
import CardHeader from "@ui/CardHeader";
import CardContent from "@ui/CardContent";
// CardAction은 사용하지 않음
import Box from "@ui/Box";
import Typography from "@ui/Typography";
import Chip from "@ui/Chip";
import { TimeUtils } from "@utils/TimeUtils";
// Add these imports at the top of HomeLayout.jsx
import ProjectFormModal from "@components/ProjectFormModal";

const HomeLayout = ({ onProjectSelect }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 필터링 상태 추가
  const [statusFilter, setStatusFilter] = useState("진행중");
  const [sortOption, setSortOption] = useState("최신순");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const client = new ClientApi();
        const projectsData = await client.getAllProjects();

        // 각 프로젝트에 대한 커밋 정보 가져오기
        const projectsWithCommitCounts = await Promise.all(
          projectsData.map(async (project) => {
            const commits = await client.getCommitByProjectId(project.id);
            return {
              ...project,
              commitCount: commits.length,
              totalTime: TimeUtils.getAllCommitsTimes(commits),
              recentCommitDate: TimeUtils.getRecentCommitsDate(commits),
            };
          })
        );

        setProjects(projectsWithCommitCounts);
        setLoading(false);
      } catch (error) {
        console.error("프로젝트 데이터를 가져오는 중 오류 발생:", error);
        setError("프로젝트를 불러오는데 실패했습니다.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // 프로젝트 카드를 클릭했을 때 해당 프로젝트 페이지로 이동하는 함수
  const handleProjectClick = (projectId) => {
    if (onProjectSelect) {
      onProjectSelect(projectId);
    } else {
      // onProjectSelect prop이 없을 경우 콘솔에만 출력
      console.log(`Navigate to project: ${projectId}`);
    }
  };

  // 상태 필터 변경 핸들러
  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  // 정렬 옵션 변경 핸들러
  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Typography variant="h4">프로젝트 로딩 중...</Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Typography variant="h4" color="error">
          {error}
        </Typography>
      </div>
    );
  }

  // 프로젝트 객체가 속성을 가지고 있는지 확인하는 함수
  const hasProperty = (obj, prop) => {
    return Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop] !== null;
  };

  // 상태에 따라 프로젝트 필터링
  const filteredProjects = projects.filter((project) => {
    if (statusFilter === "모든 상태") return true;
    if (statusFilter === "진행중") return project.status !== "완료";
    if (statusFilter === "완료됨") return project.status === "완료";
    return true;
  });

  // 정렬 옵션에 따라 프로젝트 정렬
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortOption === "최신순") {
      const dateA = a.recentCommitDate || new Date(0);
      const dateB = b.recentCommitDate || new Date(0);
      return dateB - dateA;
    } else if (sortOption === "오래된순") {
      const dateA = a.recentCommitDate || new Date(0);
      const dateB = b.recentCommitDate || new Date(0);
      return dateA - dateB;
    } else if (sortOption === "커밋 많은순") {
      return (b.commitCount || 0) - (a.commitCount || 0);
    }
    return 0;
  });

  const handleProjectCreated = async (newProject) => {
    // Refetch projects after creation
    setLoading(true);
    try {
      const client = new ClientApi();
      const projectsData = await client.getAllProjects();

      // Each project needs commit data
      const projectsWithCommitCounts = await Promise.all(
        projectsData.map(async (project) => {
          const commits = await client.getCommitByProjectId(project.id);
          return {
            ...project,
            commitCount: commits.length,
            totalTime: TimeUtils.getAllCommitsTimes(commits),
            recentCommitDate: TimeUtils.getRecentCommitsDate(commits),
          };
        })
      );

      setProjects(projectsWithCommitCounts);
    } catch (error) {
      console.error("프로젝트 데이터를 가져오는 중 오류 발생:", error);
      setError("프로젝트를 불러오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleNewProjectClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <Box direction="col" gap="md">
          <Typography variant="h2" className="text-center mb-2">
            내 모든 프로젝트
          </Typography>
          <Typography variant="body1" className="text-center text-gray-600 mb-6">
            진행 중인 프로젝트와 완료된 프로젝트를 모두 확인하세요
          </Typography>
        </Box>

        {/* 필터링 및 정렬 옵션 - 이벤트 핸들러 연결 */}
        <div className="flex justify-end gap-2 mb-4">
          <select className="p-2 border rounded bg-blue-300" value={sortOption} onChange={handleSortOptionChange}>
            <option className="bg-blakc">최신순</option>
            <option>오래된순</option>
            <option>커밋 많은순</option>
          </select>
          <select className="p-2 border rounded bg-blue-300" value={statusFilter} onChange={handleStatusFilterChange}>
            <option>모든 상태</option>
            <option>진행중</option>
            <option>완료됨</option>
          </select>
        </div>
      </div>
      <button className="mt-4 px-6 py-3 bg-lime-500 text-black rounded-md hover:bg-emerald-600 transition-colors" onClick={handleNewProjectClick}>
        새 프로젝트 생성
      </button>
      <ProjectFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onProjectCreated={handleProjectCreated} />

      {/* 프로젝트 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.length > 0 ? (
          sortedProjects.map((project) => (
            <div key={project.id} className="cursor-pointer transition-transform hover:scale-[1.02]" onClick={() => handleProjectClick(project.id)}>
              <Card variant="outlined" className="h-full">
                <CardHeader
                  title={hasProperty(project, "name") ? project.name : "제목 없음"}
                  subtitle={hasProperty(project, "description") ? project.description : "설명 없음"}
                />
                <CardContent>
                  <Box direction="col" className="mb-4">
                    <Chip
                      variant={project.status === "완료" ? "success" : "primary"}
                      label={hasProperty(project, "status") ? project.status : "상태 없음"}
                    />
                    <Typography variant="subtitle2">
                      <span className="font-semibold">커밋 횟수:</span> {project.commitCount || 0}
                    </Typography>
                    <Typography variant="subtitle2">
                      <span className="font-semibold">총 작업 시간:</span> {project.totalTime || "0h 0m"}
                    </Typography>
                    <Typography variant="subtitle2">
                      <span className="font-semibold">최근 커밋:</span> {TimeUtils.formatDate(project.recentCommitDate)}
                    </Typography>
                    {hasProperty(project, "tags") && Array.isArray(project.tags) && project.tags.length > 0 && (
                      <Box direction="row" variant="outlined">
                        {project.tags.map((tag, idx) => (
                          <Typography key={`${project.id}-tag-${idx}`} variant="caption">
                            #{tag}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Box>

                  {/* "자세히 보기" 버튼 */}
                  <div className="mt-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">자세히 보기</button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <Typography variant="h4">등록된 프로젝트가 없습니다</Typography>
            <Typography variant="body1" className="mt-2">
              새 프로젝트를 시작해보세요!
            </Typography>
            <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">새 프로젝트 생성</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeLayout;
