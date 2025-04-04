#### project-logs

매번 프로젝트를 너무 많이 만들고 이것저것 하다가 쉽게 관두는 것들이 너무 많아서
이를 기록화 하기위한 프로젝트 사이트입니다.

# install

`npm install`

# Usage

`npm run dev`
`json-server ./db.json --port 4000`

# Pages

- Home

  - 모든 프로젝트가 한 눈에 보이는 페이지

- Porjects
  - 프로제트 클릭 시 열리는 프로젝트 페이지
  - 프로젝트 페이지 구성
    - 왼쪽 사이드 네비게이션(SN): 프로젝트 개요 페이지. 아이콘, 소개 글, 커밋 개수, 최근 커밋 날짜, 호스팅 중이라면 호스팅 주소
    - 프로젝트 대시보드(DashBoard): 커밋 페이지 목록. 1차원 브랜치 형태로 각 커밋 컨테이너가 최신일수록 상단에 위치.
      - 커밋 컨테이너(Commit Container): 해당 프로젝트에서 커밋단위. 프로젝트를 시작하고 부터 끝날 떄까지의 시간 정보와 간단한 해당 커밋 메시지 정보

# Components

- ProjectContainer
  - 프로젝트 표시 용도 컨테이너
  - {child}CommitsContainer
- CommitContainer
  - 프로젝트의 커밋 포시 용도 커네이너
  - {projectId} 를 props로 받음
- TabButton
  - 해당 프로젝트 설정 시 클릭하는 버튼
- TimerContainer
  - timer 버튼
  - 시작 <> 정지 버튼
  - 기록 버튼
- ProjectFormModal
  - modal폼을 입력받아 프로젝트 작성
- InputCommit
  - modal폼을 입력 받아 프로젝트에 커밋을 작성
- SideNavigation
  - 프로젝트 타이틀
  - 프로젝트 개요 소개
    - 총 커밋 시간
    - 총 커밋 회수
    - 최근 커밋 날짜
  - 본문
    - 프로젝트 소개
    - 프로젝트 상태
    - 주요 기능
    - 참여자
    - 태그

# UI UX

피그마 사용

- ## 프로젝트들을 선택해서 볼수 있는 GNB
  - 프로젝트 선택시
- ## 커밋 목록이 보이는 SNB

## Layout

- 각 프로젝트 탭으로 구분
- 새 탭 생성시 기본 정보 입력 - 제목 - 의도 - 아키텍처
  모든 공통 기능
- 기본적으로 타이머 설정이 존재

# 기술 스택

## Frontend

- `React`라이브러리 사용
- 상태관리 라이브러리 `zustand`사용 단 필요한 상태만 `zustand`로 관리하기
- UI 라이브러리의 경우 커스텀으로 만들며 단, Material UI 참고
- 구조관련 CSS는 일반 CSS로 관리
  - 색, 그림자, 효과와 같은 CSS들은 tailwind로 일관성있게 관리

## Backend

- DB까지는 아직 이르기에 json-server를 사용하기로함
  - json server https://www.heropy.dev/p/zZdlXx

## Libraries

### 데이터 구조

처음 중첩된 구조 사용함. json-server에서 중첩된 구조를 지원안해서 따로 커스텀 route를 만드어야하는 문제 발생.
추후 유지관리도 어려워 보임.
그래서 저번에 강의에서 본 Id형태로 중첩된 것들 관리하기

```json
{
  "projects": [
    {
      "id": "project-1",
      "name": "프로젝트명",
      "description": "프로젝트 설명",
      "architecture": "프로젝트 아키텍처",
      "status": "진행중",
      "createdAt": "timestamp",
      "modifiedAt": "timestamp",
      "totalTime": "누적 작업시간",
      "commitsIds": ["commit-1", "commit-2"],
      "tags": ["웹", "모바일"]
    }
  ],
  "commits": [
    {
      "id": "commit-1",
      "parentProjectId": "project-1",
      "message": "커밋 메시지1",
      "timeSpent": "작업시간",
      "createdAt": "timestamp",
      "modifiedAt": "timestamp"
    },
    {
      "id": "commit-2",
      "parentProjectId": "project-1",
      "message": "커밋 메시지2",
      "timeSpent": "작업시간",
      "createdAt": "timestamp",
      "modifiedAt": "timestamp"
    }
  ]
}
```
