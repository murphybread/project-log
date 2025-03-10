import CardHeader from "@ui/CardHeader";
import "./SideNavigation.css";
import Card from "@ui/Card";
import Box from "@ui/Box";
import Typography from "@ui/Typography";
import Chip from "@ui/Chip";
import XIcon from "@/assets/XIcon";

export function SideNavigation() {
  return (
    <>
      <Card variant="outlined" height="lg">
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
        <Chip variant="primary" label="test" rightIcon={<XIcon />} />
      </Card>
      {/* <div className="side-navigation-container">
        <div className="side-navigation-title">Side Navigation Title</div>
        <div className="side-navigation-title-items-container">
          <div className="side-navigation-items">타이틀 아이템1</div>
          <div className="side-navigation-items">타이틀 아이템2</div>
        </div>
        <h3>Side Navigation item</h3>
        <div className="side-navigation-items">프로젝트설명</div>
      </div> */}
    </>
  );
}
