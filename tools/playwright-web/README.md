# 🎭 Playwright Web

## 📖 개요
`playwright-web`은 Playwright를 사용하여 웹 애플리케이션의 엔드투엔드 테스트를 수행하기 위한 설정과 스크립트를 제공해요. 이 도구는 Turborepo 기반의 모노레포 프로젝트에서 테스트 설정을 표준화하고 재사용성을 높이기 위해 설계되었어요.

## 🛠️ 제공 기능
- **[Playwright Config](./playwright.config.ts)**: Playwright 설정 파일로, 테스트 환경 및 브라우저 설정을 정의해요.
- **[Tests](./tests/)**: 테스트 스크립트가 위치한 디렉토리예요.
- **[Playwright Report](./playwright-report/)**: Playwright 테스트 실행 후 생성된 테스트 보고서를 저장하는 디렉토리예요.
- **[Test Results](./test-results/)**: 테스트 실행 중 생성된 중간 결과 파일을 저장하는 디렉토리예요.

## 🧑‍💻 사용법

### 테스트 코드 작성 방법
```typescript
import { test, expect } from "@playwright/test";

test("homepage has title", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/Example Domain/);
});
```

### 테스트 코드 실행 방법
```bash
pnpm run test:e2e
```

### 테스트 리포트 확인 방법
```bash
pnpm run test:report
```

## 🤝 기여
이 도구에 기여하려면, [CONTRIBUTING.md](../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스
이 프로젝트는 MIT 라이선스 하에 배포돼요.