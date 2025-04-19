# 🛠️ Node Utils

## 📖 개요

`node-utils` 패키지는 Node.js 환경에서 사용할 수 있는 다양한 유틸리티 함수들을 제공하는 내부 패키지예요. 이 패키지는 파일 시스템 작업, MSW(Mock Service Worker) 설정, 그리고 기타 다양한 유틸리티 함수들을 모아 Node.js 개발을 단순화하도록 설계되었어요.

## 📦 제공 기능

- **[fs](./src/fs)**: 파일 시스템 관련 유틸리티 함수들을 제공해요.
- **[msw](./src/msw)**: API 목업을 위한 MSW 관련 유틸리티 함수들을 제공해요.
- **[misc](./src/misc)**: 기타 유용한 유틸리티 함수들을 제공해요.

## ⬇️ 설치

### pnpm 설치

```bash
pnpm add @your-org/node-utils
```

## 🧑‍💻 사용법

### fs 모듈 사용 예시

```typescript
import { ls } from "@your-org/node-utils/fs";

// 현재 디렉토리의 파일 및 폴더 목록 가져오기
const fileList = ls();
console.log("현재 디렉토리 파일 목록:", JSON.stringify(fileList, null, 2));
```

### msw 모듈 사용 예시

```typescript
import { initMockServer } from "@your-org/node-utils/msw";
import rootHandlers from "@your-org/http-clients/mocks";

// Mock 서버 설정 함수
async function setupMockServer() {
  // 환경 변수나 설정에 따라 MSW 활성화 여부 확인
  const USE_MSW = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";

  if (!USE_MSW) return;

  // Mock 서버 초기화 및 핸들러 등록
  await initMockServer(rootHandlers);

  console.log("Mock 서버가 시작되었어요.");
}
```

### misc 모듈 사용 예시

```typescript
import { isInNodeRuntime } from "@your-org/node-utils/misc";

// 현재 Node.js 런타임에서 실행 중인지 확인
if (isInNodeRuntime()) {
  // Node.js 환경에서만 실행할 코드
}
```

## 🤝 기여

이 패키지에 기여하려면, [CONTRIBUTING.md](../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.
