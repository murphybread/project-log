// ProjectFormModal.jsx
import React, { useState } from "react";
import Modal from "@ui/Modal";
import Box from "@ui/Box";
import Typography from "@ui/Typography";
import Input from "@ui/Input";
import Button from "@ui/Button";
import { ClientApi } from "@api/ClientApi";

const ProjectFormModal = ({ isOpen, onClose, onProjectCreated }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    contents: "",
    architecture: "",
    status: "진행중", // Default status
    tags: "",
    features: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "프로젝트 이름을 입력해주세요";
    }

    if (!formData.description.trim()) {
      newErrors.description = "프로젝트 설명을 입력해주세요";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const client = new ClientApi();

      // Process tags and features from comma-separated strings to arrays
      const tagsArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");

      const featuresArray = formData.features
        .split(",")
        .map((feature) => feature.trim())
        .filter((feature) => feature !== "");

      const projectData = {
        ...formData,
        tags: tagsArray,
        features: featuresArray,
        commitsIds: [],
        contributors: ["사용자"], // Default contributor
      };

      const createdProject = await client.createProject(projectData);

      // Success handling
      onProjectCreated(createdProject);
      onClose();
    } catch (error) {
      console.error("프로젝트 생성 중 오류 발생:", error);
      setErrors((prev) => ({
        ...prev,
        submit: "프로젝트를 생성하는 중 오류가 발생했습니다.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    // Reset form data and close modal
    setFormData({
      name: "",
      description: "",
      contents: "",
      architecture: "",
      status: "진행중",
      tags: "",
      features: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="새 프로젝트 생성">
      <form onSubmit={handleSubmit}>
        <Box direction="col" gap="md" className="p-4">
          <div className="mb-4">
            <Typography variant="subtitle1" className="mb-1">
              프로젝트 이름 *
            </Typography>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="프로젝트 이름"
              error={!!errors.name}
              fullWidth={true}
            />
          </div>

          <div className="mb-4">
            <Typography variant="subtitle1" className="mb-1">
              설명 *
            </Typography>
            <Input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="간략한 프로젝트 설명"
              error={!!errors.description}
              fullWidth={true}
            />
          </div>

          <div className="mb-4">
            <Typography variant="subtitle1" className="mb-1">
              상세 내용
            </Typography>
            <Input
              type="text"
              name="contents"
              value={formData.contents}
              onChange={handleChange}
              placeholder="프로젝트에 대한 상세한 설명"
              rows={3}
              fullWidth={true}
            />
          </div>

          <div className="mb-4">
            <Typography variant="subtitle1" className="mb-1">
              사용 기술
            </Typography>
            <Input
              type="text"
              name="architecture"
              value={formData.architecture}
              onChange={handleChange}
              placeholder="예: React + Node.js"
              fullWidth={true}
            />
          </div>

          <div className="mb-4">
            <Typography variant="subtitle1" className="mb-1">
              상태
            </Typography>
            <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
              <option value="진행중">진행중</option>
              <option value="완료">완료</option>
              <option value="일시중지">일시중지</option>
            </select>
          </div>

          <div className="mb-4">
            <Typography variant="subtitle1" className="mb-1">
              태그
            </Typography>
            <Input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="태그를 쉼표(,)로 구분해서 입력하세요"
              fullWidth={true}
            />
            <Typography variant="caption" className="text-gray-500">
              예: 웹, 모바일, 앱
            </Typography>
          </div>

          <div className="mb-4">
            <Typography variant="subtitle1" className="mb-1">
              주요 기능
            </Typography>
            <Input
              type="text"
              name="features"
              value={formData.features}
              onChange={handleChange}
              placeholder="기능을 쉼표(,)로 구분해서 입력하세요"
              fullWidth={true}
            />
            <Typography variant="caption" className="text-gray-500">
              예: 사용자 인증, 데이터 시각화, 실시간 알림
            </Typography>
          </div>

          {errors.submit && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{errors.submit}</div>}

          <Box direction="row" gap="md" justify="end">
            <Button type="button" variant="secondary" onClick={handleCancel} disabled={isSubmitting}>
              취소
            </Button>
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? "생성 중..." : "프로젝트 생성"}
            </Button>
          </Box>
        </Box>
      </form>
    </Modal>
  );
};

export default ProjectFormModal;
