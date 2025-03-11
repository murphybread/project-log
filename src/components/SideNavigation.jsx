import { useState, useEffect } from "react";

import CardHeader from "@ui/CardHeader";
import "./SideNavigation.css";
import Card from "@ui/Card";
import Box from "@ui/Box";
import Typography from "@ui/Typography";
import Chip from "@ui/Chip";

import List from "@ui/List";
import ListItem from "@ui/ListItem";

import { ClientApi } from "@api/ClientApi";

export function SideNavigation({ id }) {
  const [project, setProject] = useState(null);
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  const client = new ClientApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = new ClientApi();
        const projectData = await client.getProject("project-1");
        setProject(projectData);
        setLoading(false);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행됨을 의미

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      {JSON.stringify(project, null, 2)}
      <Card variant="outlined">
        <CardHeader title="proejctName" subtitle="totalCommit" />
        <Box>
          <Typography> 총 커밋 횟수</Typography>
          <Typography> 총 커밋 시간</Typography>
          <Typography> 최근 커밋 날짜</Typography>
        </Box>
        <Box>
          <Typography> 프로젝트 소개 Description</Typography>
          <Typography> 프로젝트 상태</Typography>
          <Typography> 주요 기능</Typography>
          <Typography> 참여자</Typography>
          <Typography> 태그</Typography>
        </Box>
        <Chip variant="primary" label="프로젝트상태" />
        <List>
          <ListItem secondary="첫 번째 항목" />
          <ListItem secondary="두 번째 항목" />
          <ListItem secondary="세 번째 항목" />
        </List>
        <Box>
          <Typography> 참여자 목록: A B C D</Typography>
        </Box>
        <Box>
          <Chip size="sm" variant="primary" label="태그1" />
          <Chip size="sm" variant="success" label="태그2" />
          <Chip size="sm" variant="error" label="태그3" />
          <Chip size="sm" variant="warning" label="태그4" />
        </Box>
      </Card>
    </>
  );
}
