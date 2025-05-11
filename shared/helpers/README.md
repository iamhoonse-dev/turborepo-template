# 🛠️ Helpers

## 📖 개요

`helpers` 패키지는 프로젝트 전반에서 재사용 가능한 유틸리티 함수와 공통 로직을 제공하는 내부 패키지예요. 이 패키지는 코드 재사용성을 높이고, 일반적인 작업을 단순화하도록 설계되었어요.

> **Note**: `shared` 디렉토리에 배치된 패키지들은 `packages` 디렉토리에 있는 패키지들과는 다르게 npm에 배포되지 않아요. 이 패키지들은 내부 프로젝트에서만 사용되도록 설계되었어요.

## 📦 제공 기능

- **[runWithGlob](./src/runWithGlob.ts)**: glob 패턴을 사용하여 파일을 검색하고, 각 파일에 대해 작업을 실행할 수 있는 유틸리티 함수.

## ⬇️ 설치

### pnpm 설치

```bash
pnpm add @your-org/helpers
```

## 🧑‍💻 사용법

### runWithGlob 사용 예시

```typescript
import { runWithGlob } from "@your-org/helpers/runWithGlob";

// glob 패턴을 사용하여 파일 검색 및 작업 실행
const results = runWithGlob("src/**/*.ts", (file) => {
  console.log(`Processing file: ${file}`);
  return file;
}, ["**/node_modules/**"]);

console.log("처리된 파일 목록:", results);
```

## 🤝 기여

이 패키지에 기여하려면, [CONTRIBUTING.md](../../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.
