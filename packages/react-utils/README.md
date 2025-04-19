# ⚛️ React Utils

## 📖 개요

`react-utils` 패키지는 React 애플리케이션 개발을 위한 유틸리티 함수와 도구를 제공해요. 이 패키지는 React 컴포넌트와 관련된 공통 작업을 단순화하고, 코드 재사용성을 높이는 데 중점을 두고 있어요.

## 📦 제공 기능

- **[Hooks](./hooks)**: React 애플리케이션에서 사용할 수 있는 유용한 커스텀 훅 모음을 제공해요.
- **[HoCs](./hocs)**: React 컴포넌트 개발을 돕는 다양한 고차 컴포넌트들을 제공해요.
- **[Providers](./providers)**: React Context 를 활용하는 유틸리티를 제공해요.

## ⬇️ 설치

### pnpm 설치

```bash
pnpm add @your-org/react-utils
```

## 🧑‍💻 사용법

```typescript
import { useInterval } from '@your-org/react-utils/hooks';

const MyComponent: React.FC = () => {
  useInterval(() => {
    console.log('Interval triggered');
  }, 1000);

  return <div>Check the console for interval logs!</div>;
};
```

## 🤝 기여

이 패키지에 기여하려면, [CONTRIBUTING.md](../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.
