# 🛠️ Helpers

## 📖 개요

`helpers` 패키지는 프로젝트 전반에서 재사용 가능한 유틸리티 함수와 공통 로직을 제공하는 내부 패키지예요. 이 패키지는 코드 재사용성을 높이고, 일반적인 작업을 단순화하도록 설계되었어요.

> 💡 **참고:**  
> `shared` 디렉토리에 배치된 패키지들은 `packages` 디렉토리에 있는 패키지들과는 다르게 npm에 배포되지 않아요. 이 패키지들은 내부 프로젝트에서만 사용되도록 설계되었어요.

## 📦 제공 기능

- **[runWithGlob](./src/runWithGlob.ts)**: glob 패턴을 사용하여 파일을 검색하고, 각 파일에 대해 작업을 실행할 수 있는 유틸리티 함수.

## ⬇️ 설치

### `package.json`에 추가

먼저 `helpers` 패키지를 사용하고자 하는 워크스페이스의 `package.json` 파일에 해당 패키지를 추가해야 해요. \
이 프로젝트는 `pnpm`을 사용하고 있기 때문에, `workspace:*`를 사용하여 로컬 패키지를 참조하도록 설정할 수 있어요.

```json
{
  "dependencies": {
    "@your-org/helpers": "workspace:*"
  },
  // 또는
  "devDependencies": {
    "@your-org/helpers": "workspace:*"
  }
}
```

### `pnpm` 설치

`helpers` 패키지를 사용하고자 하는 워크스페이스 디렉토리로 이동한 후, \
아래의 명령어를 실행하여 의존성을 설치해 주세요.

```bash
# cd path/to/your/workspace
pnpm install
```

## 🧑‍💻 사용법

### runWithGlob 사용 예시

```typescript
import { runWithGlob } from "@your-org/helpers/runWithGlob";

// glob 패턴을 사용하여 파일 검색 및 작업 실행
const results = runWithGlob(
  "src/**/*.ts",
  (file) => {
    console.log(`Processing file: ${file}`);
    return file;
  },
  ["**/node_modules/**"],
);

console.log("처리된 파일 목록:", results);
```

## 🤝 기여

이 패키지에 기여하려면, [CONTRIBUTING.md](../../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.
