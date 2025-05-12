# 🎭 Playwright Web

## 📖 개요

`playwright-web`은 Playwright를 사용하여 웹 애플리케이션의 엔드투엔드 테스트를 수행하기 위한 설정과 스크립트를 제공해요. \
이 도구는 Turborepo 기반의 모노레포 프로젝트에서 테스트 설정을 표준화하고 재사용성을 높이기 위해 설계되었어요.

> #### 💡 **Note**: `tools/playwright-${name}`
>
> 이 도구는 특정 성격의 테스트들만을 포함하도록 의도되었어요. \
> 만약 다른 성격의 테스트를 작성하고 싶다면, `tools` 디렉토리 아래에 `playwright-${name}` 형식의 이름을 갖는 도구를 새로 추가해 주세요. \
>
> - 추가할 때, `${name}` 부분은 테스트의 성격을 나타내는 이름으로 설정해 주세요.
> - 그리고 새로 추가한 도구는 `tools/playwright-web` 도구와 동일한 구조를 갖도록 해 주세요.
>
> ##### ❗ **의존성**
>
> 새로 추가한 도구는 이 도구와 동일한 의존성을 갖고, 따라서 `@playwright/test` 패키지에 의존해요. \
> 주의할 점은, 이 도구는 `@playwright/test` 패키지의 peerDependencies에 추가해야 한다는 점이에요. \
> 이것이 가능한 이유는, `@playwright/test` 패키지가 [`configs/playwright-config`](../../configs/playwright-config) 패키지에서 설치되기 때문이에요.

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

이 도구에 기여하려면, [CONTRIBUTING.md](../../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.
