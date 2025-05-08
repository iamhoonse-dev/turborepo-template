# 📚 Frontend Workshop

## 📖 개요

`frontend-workshop` 애플리케이션은 UI 컴포넌트를 독립적으로 개발하고 문서화하기 위한 도구인 Storybook을 활용한 애플리케이션이에요. 이 애플리케이션은 Turborepo 환경에서 Storybook을 어떻게 설정하고 사용하는지 보여주는 예시 역할을 해요.

## 🛠️ 제공 기능

- **UI 컴포넌트 개발**: 독립적인 환경에서 UI 컴포넌트를 개발할 수 있어요.
- **문서화**: 각 컴포넌트의 사용 사례를 문서화할 수 있어요.
- **Turborepo 통합**: Turborepo를 활용한 모노레포 환경에서의 Storybook 통합을 지원해요.

### 📂 주요 파일 구조

- `src/`: Storybook 애플리케이션의 소스 코드를 담고 있어요.
- `public/`: 정적 자산을 담고 있어요.
- `vite.config.ts`: Vite 설정 파일이에요.
- `tsconfig.json`: TypeScript 설정 파일이에요.

### 🔗 연결된 워크스페이스

`frontend-workshop` 애플리케이션은 다음 경로에 정의된 스토리를 포함하고 있어요:

1. `../src/**/*.mdx`
2. `../src/**/*.stories.@(js|jsx|mjs|ts|tsx)`
3. `../../../packages/react-ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)`

## ⬇️ 설치

### 의존성 설치

```bash
pnpm install
```

## 🧑‍💻 사용법

### Storybook 실행

```bash
pnpm storybook
```

[http://localhost:6006](http://localhost:6006)에서 Storybook을 확인할 수 있어요.

## 🤝 기여

이 애플리케이션에 기여하려면, [CONTRIBUTING.md](../../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.
