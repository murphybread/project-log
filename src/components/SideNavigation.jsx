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

import { TimeUtils } from "@utils/TimeUtils";

export function SideNavigation({ id }) {
  const [project, setProject] = useState(null);
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = new ClientApi();
        const projectData = await client.getProject(id);
        setProject(projectData);
        setCommits(await client.getCommitByProjectId(id));
        setLoading(false);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchData();

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
  }, [loading, id]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (project === null) {
    return <div>프로젝트 fetch에 실패하였습니다!</div>;
  }

  return (
    <>
      <Card variant="outlined">
        <CardHeader title={project.name} subtitle={project.description} />
        <Box direction="col">
          <Typography> 총 커밋 횟수: {commits.length}</Typography>
          <Typography> 총 커밋 시간: {TimeUtils.getAllCommitsTimes(commits)}</Typography>
          <Typography> 최근 커밋 날짜: {TimeUtils.getRecentCommitsDate(commits)}</Typography>
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
      {/* {JSON.stringify(commits, null, 2)} */}
    </>
  );
}
