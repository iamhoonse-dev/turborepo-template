# 🌐 Browser Utils

## 📖 개요
`browser-utils` 패키지는 브라우저 환경에서 유용하게 사용할 수 있는 유틸리티 함수와 도구를 제공해요. 이 패키지는 브라우저 관련 작업을 단순화하고, 코드 재사용성을 높이는 데 중점을 두고 있어요.

## 📦 제공 기능
- **[DOM](src/dom)**: 브라우저 DOM 조작을 위한 유틸리티 함수 제공해요.
- **[MSW](src/msw)**: Mock Service Worker와 관련된 유틸리티를 제공해요.
- **[String](src/string)**: 문자열 처리와 관련된 유틸리티 함수 제공해요.

## ⬇️ 설치

### npm 설치
```bash
npm install @your-org/browser-utils
```

### pnpm 설치
```bash
pnpm add @your-org/browser-utils
```

## 🧑‍💻 사용법
```typescript
import React from 'react';
import { alertHelloWorld } from '@your-org/browser-utils/dom';

const HelloWorldButton: React.FC = () => {
  return (
    <button onClick={alertHelloWorld}>
      Click me to see Hello World
    </button>
  );
};

export default HelloWorldButton;
```

## 🤝 기여
이 패키지에 기여하려면, [CONTRIBUTING.md](../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스
이 프로젝트는 MIT 라이선스 하에 배포돼요.