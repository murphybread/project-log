// MuiComponents.stories.jsx
import React from "react";
import { MuiComponents } from "@components/MuiComponents";

// 필요한 import 추가
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default {
  title: "MUI/Components", // 스토리북에서 보여질 그룹 및 이름
  component: MuiComponents,
  // 컴포넌트에 대한 추가 정보를 제공할 수 있습니다
  parameters: {
    componentSubtitle: "Material UI 기본 컴포넌트 모음",
  },
};

// 기본 스토리 생성
export const All = () => <MuiComponents />;

const ButtonTemplate = (args) => <Button {...args} />;
export const ConfigurableButton = ButtonTemplate.bind({});
ConfigurableButton.args = {
  variant: "contained",
  color: "primary",
  children: "버튼 텍스트",
  disabled: false,
  size: "medium",
};

// 컨트롤 옵션 추가
ConfigurableButton.argTypes = {
  variant: {
    control: "select",
    options: ["text", "contained", "outlined"],
    description: "버튼의 변형 스타일",
  },
  color: {
    control: "select",
    options: ["primary", "secondary", "success", "error", "info", "warning", "inherit"],
    description: "버튼의 색상",
  },
  size: {
    control: "radio",
    options: ["small", "medium", "large"],
    description: "버튼의 크기",
  },
  disabled: {
    control: "boolean",
    description: "버튼 비활성화 여부",
  },
  children: {
    control: "text",
    description: "버튼 텍스트",
  },
};

// 각 개별 컴포넌트에 대한 스토리를 따로 생성할 수도 있습니다
export const Buttons = () => (
  <>
    <h3>variant text color is ...</h3>
    <Button color="primary">primary</Button>
    <Button color="secondary">secondary</Button>
    <Button color="success">success</Button>
    <Button color="error">error</Button>
    <Button color="info">info</Button>
    <Button color="warning">warning</Button>
    <Button color="inherit">inherit</Button>

    <h3>variant contained color is ...</h3>
    <Button variant="contained" color="primary">
      primary
    </Button>
    <Button variant="contained" color="secondary">
      secondary
    </Button>
    <Button variant="contained" color="success">
      success
    </Button>
    <Button variant="contained" color="error">
      error
    </Button>
    <Button variant="contained" color="info">
      info
    </Button>
    <Button variant="contained" color="warning">
      warning
    </Button>
    <Button variant="contained" color="inherit">
      inherit
    </Button>

    <h3>variant outlined color is ...</h3>
    <Button variant="outlined" color="primary">
      primary
    </Button>
    <Button variant="outlined" color="secondary">
      secondary
    </Button>
    <Button variant="outlined" color="success">
      success
    </Button>
    <Button variant="outlined" color="error">
      error
    </Button>
    <Button variant="outlined" color="info">
      info
    </Button>
    <Button variant="outlined" color="warning">
      warning
    </Button>
    <Button variant="outlined" color="inherit">
      inherit
    </Button>
  </>
);

export const InputFields = () => (
  <>
    <TextField label="이름" variant="outlined" />
    <TextField label="비밀번호" type="password" variant="filled" />
    <TextField label="설명" multiline rows={4} variant="standard" />
  </>
);
