import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react"; // useState 추가

export function MuiComponents() {
  // selectedValue 상태 추가
  const [selectedValue, setSelectedValue] = useState("a");

  // Radio 변경 핸들러 추가
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Button variant="contained" color="primary">
        기본 버튼
      </Button>

      <TextField label="이름" variant="outlined" />

      <Checkbox defaultChecked />

      {/* Radio 컴포넌트에 onChange 핸들러 추가 */}
      <Radio checked={selectedValue === "a"} onChange={handleRadioChange} value="a" />
      <Radio checked={selectedValue === "b"} onChange={handleRadioChange} value="b" />

      <HomeIcon color="primary" fontSize="large" />
    </div>
  );
}
