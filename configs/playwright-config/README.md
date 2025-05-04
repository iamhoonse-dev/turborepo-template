# 🎭 Playwright Config

## 📖 개요

`playwright-config` 패키지는 Playwright 테스트 환경을 설정하고 구성하기 위한 공통 설정을 제공해요. 이 패키지는 Turborepo 기반의 모노레포 프로젝트에서 테스트 설정을 표준화하고 재사용성을 높이기 위해 설계되었어요.

## 📦 제공 기능

- **[Base Config](./configs/base.ts)**: 기본 Playwright 설정을 제공해요.

## ⬇️ 설치

### Turborepo 워크스페이스에서 설치

`playwright-config`는 내부 패키지로, Turborepo 환경 내에서만 사용돼요. `package.json` 파일의 `devDependencies` 섹션에 다음과 같이 추가해 주세요:

```json
{
  "devDependencies": {
    "@your-org/playwright-config": "workspace:*"
  }
}
```

그 후, 다음 명령어를 실행해서 의존성을 설치해 주세요:

```bash
pnpm install
```

## 🧑‍💻 사용법

### 기본 사용 예시

```typescript
import { defineConfig } from "@playwright/test";
import baseConfig from "@your-org/playwright-config/base";

export default defineConfig({
  ...baseConfig,
  testDir: "./tests",
});
```

## 🤝 기여

이 패키지에 기여하려면, [CONTRIBUTING.md](../../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.
