import axios from "axios";

const BASE_URL = "http://localhost:4000";

export class ClientApi {
  constructor() {
    this.client = this.createClient();
  }
  // ClientApi.js에 추가
  async createCommit(commitData) {
    try {
      const response = await fetch("http://localhost:4000/commits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...commitData,
          createdAt: new Date().toISOString(),
          modifiedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error("Failed to create commit");
      return await response.json();
    } catch (error) {
      console.error("Error creating commit:", error);
      throw error;
    }
  }

  createClient() {
    return axios.create({
      baseURL: BASE_URL,
    });
  }

  async getAllProjects() {
    try {
      const response = await this.client.get("/projects");
      return response.data;
    } catch (error) {
      this.handleError(error, "프로젝트 목록을 가져오는 중 오류 발생");
      throw error; // 호출자에게 에러를 전파
    }
  }

  async getProject(id) {
    try {
      const response = await this.client.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      this.handleError(error, `프로젝트(ID: ${id})를 가져오는 중 오류 발생`);
      throw error;
    }
  }

  async getAllCommits() {
    try {
      const response = await this.client.get("/commits");
      return response.data;
    } catch (error) {
      this.handleError(error, "커밋 목록을 가져오는 중 오류 발생");
      throw error;
    }
  }

  async getCommit(id) {
    try {
      const response = await this.client.get(`/commits/${id}`);
      return response.data;
    } catch (error) {
      this.handleError(error, `커밋(ID: ${id})를 가져오는 중 오류 발생`);
      throw error;
    }
  }

  async getCommitByProjectId(projectId) {
    try {
      const response = await this.client.get(`/commits?projectId=${projectId}`);
      return response.data;
    } catch (error) {
      this.handleError(error, `프로젝트(ID: ${projectId})의 커밋을 가져오는 중 오류 발생`);
      throw error;
    }
  }

  // 공통 에러 처리 헬퍼 메서드
  handleError(error, message) {
    console.error(message);

    if (error.response) {
      // 서버가 2xx 범위가 아닌 상태 코드를 반환한 경우
      console.error(`상태 코드: ${error.response.status}`);
      console.error("응답 데이터:", error.response.data);
    } else if (error.request) {
      // 요청은 보냈지만 응답을 받지 못한 경우
      console.error("서버로부터 응답이 없습니다.");
    } else {
      // 요청 설정 중에 문제가 발생한 경우
      console.error(`에러 메시지: ${error.message}`);
    }

    // 필요에 따라 여기에 추가 로깅, 알림 등의 처리를 할 수 있습니다.
  }
}
