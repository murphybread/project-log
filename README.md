#### project-logs

매번 프로젝트를 너무 많이 만들고 이것저것 하다가 쉽게 관두는 것들이 너무 많아서
이를 기록화 하기위한 프로젝트 사이트입니다.

페이지

- 홈

  - 모든 프로젝트가 한 눈에 보이는 페이지

- 프로젝트 페이지
  - 프로제트 클릭 시 열리는 프로젝트 페이지
  - 프로젝트 페이지 구성
    - 왼쪽 사이드 네비게이션(SN): 프로젝트 개요 페이지. 아이콘, 소개 글, 커밋 개수, 최근 커밋 날짜, 호스팅 중이라면 호스팅 주소

해당 프로젝트별로 수행한 기록이 커밋형태처럼 저장됨

UI UX

- 각 프로젝트 탭으로 구분
- 새 탭 생성시 기본 정보 입력 - 제목 - 의도 - 아키텍처
  모든 공통 기능
- 기본적으로 타이머 설정이 존재

커밋된 기록

- 커밋된 기록 수정 가능
- 간단하게 커밋메시지 처럼 내용
- 시간

기술 스택
차후 Admin 페이지등 운영 관리를 위해 `React`사용
상태 관리는 현재 따로 라이브러리 사용하지 않기로함(추후 필요할 때)
동적 페이지

프론트엔드

- `React`.
- UI 라이브러리 추후 고려. 먼저 내 실력을 키우기 위해 직접 설계 및 구현하기

백엔드

- DB까지는 아직 이르기에 json-server를 사용하기로함

라이브러리

- json server https://www.heropy.dev/p/zZdlXx

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

### 레이아웃

피그마 사용

- ## 프로젝트들을 선택해서 볼수 있는 GNB
  - 프로젝트 선택시
- ## 커밋 목록이 보이는 SNB

### CSS

- tailwind 사용해보기
  - 정형화된 데이터 범위내에서 사용되기에 팀 프로젝트에서 일관성을 제공해주기에 자주 사용됨
  - css의 학습을 제대로 하기위해서는 순수하게 구현하는게 낫지만, 추후 팀 프로젝트를 위해 미리 써보기

#### Components

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
