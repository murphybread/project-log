// InputCommit.jsx
import React, { useState, useEffect } from "react";
import Input from "@ui/Input";
import Box from "@ui/Box";
import Typography from "@ui/Typography";
import Button from "@ui/Button"; // Button 컴포넌트 import 추가

const InputCommit = ({
  value = "",
  onChange,
  placeholder = "Enter commit message",
  error = false,
  helperText = "",
  disabled = false,
  className = "",
  timeSpent = "",
  onTimeSpentChange,
  projectId, // 프로젝트 ID 프롭 추가
  onSubmit, // 제출 핸들러 프롭 추가
  ...props
}) => {
  const [commitMessage, setCommitMessage] = useState(value);
  const [timeValue, setTimeValue] = useState(timeSpent);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setCommitMessage(value);
  }, [value]);

  useEffect(() => {
    setTimeValue(timeSpent);
  }, [timeSpent]);

  useEffect(() => {
    // 타이머에서 발생하는 이벤트 수신
    const handleTimerRecord = (event) => {
      const { timeSpent } = event.detail;
      setTimeValue(timeSpent);
      if (onTimeSpentChange) {
        onTimeSpentChange(timeSpent);
      }
    };

    window.addEventListener("timer:record", handleTimerRecord);

    return () => {
      window.removeEventListener("timer:record", handleTimerRecord);
    };
  }, [onTimeSpentChange]);

  const handleCommitChange = (e) => {
    const newValue = e.target.value;
    setCommitMessage(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setTimeValue(newTime);
    if (onTimeSpentChange) {
      onTimeSpentChange(newTime);
    }
  };

  const handleSubmit = async () => {
    if (!commitMessage.trim()) {
      // 커밋 메시지가 비어있는 경우 유효성 검사
      return;
    }

    if (!timeValue.trim()) {
      // 시간이 비어있는 경우 유효성 검사
      return;
    }

    setIsSubmitting(true);

    try {
      // 현재 시간 생성
      const now = new Date().toISOString();

      // 새로운 커밋 객체 생성
      const newCommit = {
        // ID는 서버 또는 부모 컴포넌트에서 생성한다고 가정
        message: commitMessage,
        timeSpent: timeValue,
        projectId: projectId, // 전달받은 프로젝트 ID
        createdAt: now,
        modifiedAt: now,
      };

      // onSubmit 콜백이 있으면 호출 (부모 컴포넌트로 데이터 전달)
      if (onSubmit) {
        await onSubmit(newCommit);
      }

      // 폼 초기화
      setCommitMessage("");
      setTimeValue("");
    } catch (error) {
      console.error("커밋 저장 중 오류 발생:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box direction="col" gap="md" width="full" className={className}>
      <Input
        type="text"
        value={commitMessage}
        onChange={handleCommitChange}
        placeholder={placeholder}
        error={error}
        disabled={disabled || isSubmitting}
        fullWidth={true}
        variant="outlined"
        size="md"
        {...props}
      />
      {helperText && (
        <Typography variant="caption" color={error ? "error" : "default"} className="mt-1">
          {helperText}
        </Typography>
      )}

      <Box direction="row" gap="md" align="center" className="m-2">
        <Typography variant="subtitle2" color="default">
          Time Spent
        </Typography>
        <Input
          type="text"
          value={timeValue}
          onChange={handleTimeChange}
          placeholder="e.g. 2h 30m"
          disabled={disabled || isSubmitting}
          variant="outlined"
          size="sm"
          className="w-32"
        />

        {/* 제출 버튼 추가 */}
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={disabled || isSubmitting || !commitMessage.trim() || !timeValue.trim()}
          className="ml-auto"
        >
          {isSubmitting ? "저장 중..." : "커밋 저장"}
        </Button>
      </Box>
    </Box>
  );
};

export default InputCommit;
