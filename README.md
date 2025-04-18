# 📂 Turborepo Template

## 📖 개요
`Turborepo Template`은 모노레포 관리 및 빌드를 단순화하기 위해 설계된 템플릿입니다. 이 템플릿은 다양한 앱과 패키지를 포함하며, 팀 협업과 생산성을 극대화할 수 있도록 도와줍니다.

## 📦 제공 기능

### 🖥️ Apps
- **[Docs](./apps/docs)**: Next.js 기반의 문서화 앱.
- **[Web](./apps/web)**: Next.js 기반의 웹 애플리케이션.
- **[Storybook](./apps/storybook)**: 컴포넌트 개발 및 테스트를 위한 Storybook 환경.

### 📦 Packages
- **[Browser Utils](./packages/browser-utils)**: 브라우저 관련 유틸리티 함수 모음.
- **[ESLint Config](./packages/eslint-config)**: ESLint 설정을 위한 공통 구성.
- **[ESLint Plugin Sample](./packages/eslint-plugin-sample)**: 샘플 ESLint 플러그인.
- **[HTTP Clients](./packages/http-clients)**: HTTP 요청을 처리하기 위한 클라이언트 라이브러리.
- **[Node Utils](./packages/node-utils)**: Node.js 환경에서 사용할 수 있는 유틸리티 함수 모음.
- **[Playwright Config](./packages/playwright-config)**: Playwright 테스트 설정.
- **[React UI](./packages/react-ui)**: React 기반 UI 컴포넌트 라이브러리.
- **[React Utils](./packages/react-utils)**: React 애플리케이션에서 사용할 수 있는 유틸리티 함수 모음.
- **[TypeScript Config](./packages/typescript-config)**: TypeScript 설정을 위한 공통 구성.
- **[UI](./packages/ui)**: 공통 UI 컴포넌트 및 스타일.
- **[Vitest Config](./packages/vitest-config)**: Vitest 테스트 설정.

### 🛠️ Tools
- **[Playwright Web](./tools/playwright-web)**: Playwright 기반의 웹 테스트 도구.

## ⬇️ 의존성 설치

### pnpm 설치
```bash
pnpm install
```

## 🧑‍💻 사용법

### 빌드
```bash
pnpm build
```

### 개발 서버 실행
```bash
pnpm dev
```

### 원격 캐싱 설정
```bash
npx turbo login
npx turbo link
```

## 🤝 기여
이 템플릿에 기여하려면, [CONTRIBUTING.md](./CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스
이 프로젝트는 MIT 라이선스 하에 배포돼요.