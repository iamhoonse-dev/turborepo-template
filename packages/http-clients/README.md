# 🌐 HTTP Clients

## 📖 개요
`http-clients` 패키지는 HTTP 요청을 처리하기 위한 유틸리티와 클라이언트 코드를 제공해요. 이 패키지는 다양한 HTTP 클라이언트를 래핑하거나 직접 구현해서, 일관된 API를 통해 HTTP 요청을 보낼 수 있도록 설계되었어요.

## 📦 제공 기능
- **[Instances](src/instances)**: `self` 및 `iamhoonse.dev`와 같은 HTTP 클라이언트 인스턴스를 제공해요.
- **[Mocks](src/mocks)**: `self` 및 `iamhoonse.dev`와 관련된 요청 핸들러를 MSW(Mock Service Worker)와 함께 사용할 수 있도록 제공해요.
- **[Types](src/types)**: HTTP 요청 및 응답과 관련된 타입을 정의해요.

## ⬇️ 설치

### npm 설치
```bash
npm install @your-org/http-clients
```

### pnpm 설치
```bash
pnpm add @your-org/http-clients
```

## 🧑‍💻 사용법

### Instances 사용 예시
```typescript
import { selfInstance } from '@your-org/http-clients/instances';

selfInstance.get('/endpoint').then(response => {
  console.log(response.data);
});
```

### Mocks 사용 예시
```typescript
import rootHandlers from '@your-org/http-clients/mocks';
import { setupWorker } from 'msw/browser';

const worker = setupWorker(...rootHandlers);

worker.start();
```

## 🤝 기여
이 패키지에 기여하려면, [CONTRIBUTING.md](../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스
이 프로젝트는 MIT 라이선스 하에 배포돼요.