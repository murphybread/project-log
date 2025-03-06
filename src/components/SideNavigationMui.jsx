import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

export function SideNavigationMui() {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 300,
        height: 650,
        border: "1px solid black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "2rem",
          backgroundColor: "primary.main",
          color: "white",
          padding: 1,
        }}
      >
        <Typography variant="h6">Side Navigation Title</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "4rem",
          border: "1px solid black",
          textAlign: "left",
          fontSize: "0.7rem",
          padding: 2,
        }}
      >
        <Typography color="textPrimary" sx={{ paddingBottom: 2 }}>
          통계 요약
        </Typography>
        <Typography color="textPrimary" sx={{ fontSize: "0.8rem" }}>
          총 커밋 시간: 00.0시간
        </Typography>
        <Typography color="textPrimary" sx={{ fontSize: "0.8rem" }}>
          총 커밋 횟수: N회
        </Typography>
        <Typography color="textPrimary" sx={{ fontSize: "0.8rem" }}>
          최근 커밋 날짜: "YYYY-MM-DD"
        </Typography>
      </Box>
      <Typography color="textPrimary" sx={{ fontSize: "0.8rem" }}>
        - 프로젝트 소개 - 프로젝트 상태 - 주요 기능 - 참여자 - 태그
      </Typography>
    </Paper>
  );
}
