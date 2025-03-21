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

export function SideNavigation({ project, commits }) {
  return (
    <>
      <Card variant="outlined">
        <CardHeader title={project.name || "제목 없음"} subtitle={project.description || "설명 없음"} />
        <Box direction="col">
          <Typography> 총 커밋 횟수: {commits.length}</Typography>
          <Typography> 총 커밋 시간: {TimeUtils.getAllCommitsTimes(commits)}</Typography>
          <Typography> 최근 커밋 날짜: {TimeUtils.formatDate(TimeUtils.getRecentCommitsDate(commits))}</Typography>
        </Box>
        <Box direction="col">
          <Typography> 프로젝트 소개: {project.contents || "내용 없음"}</Typography>
          <Chip variant="primary" label={project.status || "상태 없음"} />

          <Typography> 주요 기능</Typography>
          {Array.isArray(project.features) && project.features.length > 0 ? (
            <List>
              {project.features.map((feat, idx) => (
                <ListItem key={`feat-${idx}`} secondary={feat}></ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="caption">주요 기능 정보가 없습니다.</Typography>
          )}

          <Typography> 참여자</Typography>
          {Array.isArray(project.contributors) && project.contributors.length > 0 ? (
            <List>
              {project.contributors.map((people, idx) => (
                <ListItem key={`people-${idx}`} secondary={people}></ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="caption">참여자 정보가 없습니다.</Typography>
          )}

          {Array.isArray(project.tags) && project.tags.length > 0 ? (
            <Box variant="none">
              {project.tags.map((tag, idx) => (
                <Chip key={`tag-${idx}`} variant="primary" label={`#${tag}`} />
              ))}
            </Box>
          ) : (
            <Typography variant="caption">태그 정보가 없습니다.</Typography>
          )}
        </Box>

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
