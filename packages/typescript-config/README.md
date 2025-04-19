# ⚙️ TypeScript Config

## 📖 개요

`typescript-config` 패키지는 다양한 프로젝트에서 사용할 수 있는 TypeScript 설정 모음을 제공해요. 이 패키지는 일관된 TypeScript 설정을 통해 개발 생산성을 높이고 오류를 줄이는 데 도움을 줘요.

## 📦 제공 기능

- **[Base Config](./base.json)**: 기본 TypeScript 설정을 제공해요.
- **[Next.js Config](./nextjs.json)**: Next.js 프로젝트에 최적화된 TypeScript 설정을 제공해요.
- **[React Library Config](./react-library.json)**: React 라이브러리 개발을 위한 TypeScript 설정을 제공해요.

## ⬇️ 설치

### Turborepo 워크스페이스에서 설치

`typescript-config`는 내부 패키지로, Turborepo 환경 내에서만 사용됩니다. `package.json` 파일의 `devDependencies` 섹션에 다음과 같이 추가하세요:

```json
"devDependencies": {
  "@your-org/typescript-config": "workspace:*"
}
```

그 후, 다음 명령어를 실행하여 의존성을 설치하세요:

```bash
pnpm install
```

## 🧑‍💻 사용법

### Base Config 사용 예시

```json
// tsconfig.json
{
  "extends": "@your-org/typescript-config/base.json",
  "compilerOptions": {
    // ...existing code...
  }
}
```

### Next.js Config 사용 예시

```json
// tsconfig.json
{
  "extends": "@your-org/typescript-config/nextjs.json",
  "compilerOptions": {
    // ...existing code...
  }
}
```

### React Library Config 사용 예시

```json
// tsconfig.json
{
  "extends": "@your-org/typescript-config/react-library.json",
  "compilerOptions": {
    // ...existing code...
  }
}
```

## 🤝 기여

이 패키지에 기여하려면, [CONTRIBUTING.md](../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.
