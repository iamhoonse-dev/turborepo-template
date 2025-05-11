# 🗂️ Turborepo Template

[![install-and-build](https://github.com/iamhoonse-dev/turborepo-template/actions/workflows/install-and-build.yml/badge.svg?event=push)](https://github.com/iamhoonse-dev/turborepo-template/actions/workflows/install-and-build.yml)
[![unit-test](https://github.com/iamhoonse-dev/turborepo-template/actions/workflows/unit-test.yml/badge.svg?event=push)](https://github.com/iamhoonse-dev/turborepo-template/actions/workflows/unit-test.yml)
[![storybook-test](https://github.com/iamhoonse-dev/turborepo-template/actions/workflows/storybook-test.yml/badge.svg?event=push)](https://github.com/iamhoonse-dev/turborepo-template/actions/workflows/storybook-test.yml)
[![e2e-test](https://github.com/iamhoonse-dev/turborepo-template/actions/workflows/e2e-test.yml/badge.svg?event=push)](https://github.com/iamhoonse-dev/turborepo-template/actions/workflows/e2e-test.yml)
[![lighthouse-test](https://github.com/iamhoonse-dev/turborepo-template/actions/workflows/lighthouse-test.yml/badge.svg?event=push)](https://github.com/iamhoonse-dev/turborepo-template/actions/workflows/lighthouse-test.yml)
[![Release](https://github.com/iamhoonse-dev/turborepo-template/actions/workflows/release.yml/badge.svg?event=push)](https://github.com/iamhoonse-dev/turborepo-template/actions/workflows/release.yml)

## 📖 개요

`Turborepo Template`은 모노레포 관리랑 빌드를 단순화하려고 만든 템플릿이에요. 이 템플릿은 다양한 앱과 패키지를 포함하고 있어서, 팀 협업과 생산성을 높이는 데 도움을 줄 거예요.

## 🔗 구성 요소 간 관계도

이 템플릿은 여러 앱과 패키지로 구성돼 있어요. 각 앱과 패키지 간의 관계는 아래의 다이어그램을 참고해 주세요.

```mermaid
graph TD
    QHZT("<a href='./packages/browser-utils'>@repo/browser-utils</a>") --> ETTT("<a href='./configs/eslint-config'>@repo/eslint-config</a>")
    QHZT("<a href='./packages/browser-utils'>@repo/browser-utils</a>") --> JEGP("<a href='./shared/helpers'>@repo/helpers</a>")
    QHZT("<a href='./packages/browser-utils'>@repo/browser-utils</a>") --> EMLE("<a href='./configs/typescript-config'>@repo/typescript-config</a>")
    QHZT("<a href='./packages/browser-utils'>@repo/browser-utils</a>") --> LRHC("<a href='./configs/vitest-config'>@repo/vitest-config</a>")
    GLAO("<a href='./tools/cli'>@repo/cli</a>") --> ETTT("<a href='./configs/eslint-config'>@repo/eslint-config</a>")
    GLAO("<a href='./tools/cli'>@repo/cli</a>") --> EMLE("<a href='./configs/typescript-config'>@repo/typescript-config</a>")
    GLAO("<a href='./tools/cli'>@repo/cli</a>") --> LRHC("<a href='./configs/vitest-config'>@repo/vitest-config</a>")
    ETTT("<a href='./configs/eslint-config'>@repo/eslint-config</a>") --> VELR("<a href='./packages/eslint-plugin-sample'>@repo/eslint-plugin-sample</a>")
    VELR("<a href='./packages/eslint-plugin-sample'>@repo/eslint-plugin-sample</a>") --> TXWC("<a href='./'>___ROOT___</a>")
    JEGP("<a href='./shared/helpers'>@repo/helpers</a>") --> ETTT("<a href='./configs/eslint-config'>@repo/eslint-config</a>")
    JEGP("<a href='./shared/helpers'>@repo/helpers</a>") --> EMLE("<a href='./configs/typescript-config'>@repo/typescript-config</a>")
    WCIN("<a href='./packages/http-clients'>@repo/http-clients</a>") --> ETTT("<a href='./configs/eslint-config'>@repo/eslint-config</a>")
    WCIN("<a href='./packages/http-clients'>@repo/http-clients</a>") --> JEGP("<a href='./shared/helpers'>@repo/helpers</a>")
    WCIN("<a href='./packages/http-clients'>@repo/http-clients</a>") --> EMLE("<a href='./configs/typescript-config'>@repo/typescript-config</a>")
    TPBW("<a href='./packages/node-utils'>@repo/node-utils</a>") --> ETTT("<a href='./configs/eslint-config'>@repo/eslint-config</a>")
    TPBW("<a href='./packages/node-utils'>@repo/node-utils</a>") --> JEGP("<a href='./shared/helpers'>@repo/helpers</a>")
    TPBW("<a href='./packages/node-utils'>@repo/node-utils</a>") --> EMLE("<a href='./configs/typescript-config'>@repo/typescript-config</a>")
    TPBW("<a href='./packages/node-utils'>@repo/node-utils</a>") --> LRHC("<a href='./configs/vitest-config'>@repo/vitest-config</a>")
    BHWE("<a href='./configs/playwright-config'>@repo/playwright-config</a>") --> ETTT("<a href='./configs/eslint-config'>@repo/eslint-config</a>")
    BHWE("<a href='./configs/playwright-config'>@repo/playwright-config</a>") --> EMLE("<a href='./configs/typescript-config'>@repo/typescript-config</a>")
    MKNG("<a href='./packages/react-ui'>@repo/react-ui</a>") --> ETTT("<a href='./configs/eslint-config'>@repo/eslint-config</a>")
    MKNG("<a href='./packages/react-ui'>@repo/react-ui</a>") --> JEGP("<a href='./shared/helpers'>@repo/helpers</a>")
    MKNG("<a href='./packages/react-ui'>@repo/react-ui</a>") --> EMLE("<a href='./configs/typescript-config'>@repo/typescript-config</a>")
    MKNG("<a href='./packages/react-ui'>@repo/react-ui</a>") --> LRHC("<a href='./configs/vitest-config'>@repo/vitest-config</a>")
    IRKD("<a href='./packages/react-utils'>@repo/react-utils</a>") --> QHZT("<a href='./packages/browser-utils'>@repo/browser-utils</a>")
    EMLE("<a href='./configs/typescript-config'>@repo/typescript-config</a>") --> TXWC("<a href='./'>___ROOT___</a>")
    UWBQ("<a href='./packages/ui'>@repo/ui</a>") --> ETTT("<a href='./configs/eslint-config'>@repo/eslint-config</a>")
    UWBQ("<a href='./packages/ui'>@repo/ui</a>") --> EMLE("<a href='./configs/typescript-config'>@repo/typescript-config</a>")
    LRHC("<a href='./configs/vitest-config'>@repo/vitest-config</a>") --> EMLE("<a href='./configs/typescript-config'>@repo/typescript-config</a>")
    FBWM("<a href='./apps/docs'>docs</a>") --> ETTT("<a href='./configs/eslint-config'>@repo/eslint-config</a>")
    FBWM("<a href='./apps/docs'>docs</a>") --> EMLE("<a href='./configs/typescript-config'>@repo/typescript-config</a>")
    FBWM("<a href='./apps/docs'>docs</a>") --> UWBQ("<a href='./packages/ui'>@repo/ui</a>")
    NRTE("<a href='./apps/frontend-workshop'>frontend-workshop</a>") --> ETTT("<a href='./configs/eslint-config'>@repo/eslint-config</a>")
    NRTE("<a href='./apps/frontend-workshop'>frontend-workshop</a>") --> MKNG("<a href='./packages/react-ui'>@repo/react-ui</a>")
    GVMR("<a href='./tools/lighthouse-ci'>lighthouse-ci</a>") --> ETTT("<a href='./configs/eslint-config'>@repo/eslint-config</a>")
    ITTZ("<a href='./tools/playwright-web'>playwright-web</a>") --> ETTT("<a href='./configs/eslint-config'>@repo/eslint-config</a>")
    ITTZ("<a href='./tools/playwright-web'>playwright-web</a>") --> BHWE("<a href='./configs/playwright-config'>@repo/playwright-config</a>")
    ITTZ("<a href='./tools/playwright-web'>playwright-web</a>") --> EMLE("<a href='./configs/typescript-config'>@repo/typescript-config</a>")
    ITTZ("<a href='./tools/playwright-web'>playwright-web</a>") --> VXGS("<a href='./apps/web'>web</a>")
    VXGS("<a href='./apps/web'>web</a>") --> QHZT("<a href='./packages/browser-utils'>@repo/browser-utils</a>")
    VXGS("<a href='./apps/web'>web</a>") --> ETTT("<a href='./configs/eslint-config'>@repo/eslint-config</a>")
    VXGS("<a href='./apps/web'>web</a>") --> WCIN("<a href='./packages/http-clients'>@repo/http-clients</a>")
    VXGS("<a href='./apps/web'>web</a>") --> TPBW("<a href='./packages/node-utils'>@repo/node-utils</a>")
    VXGS("<a href='./apps/web'>web</a>") --> MKNG("<a href='./packages/react-ui'>@repo/react-ui</a>")
    VXGS("<a href='./apps/web'>web</a>") --> IRKD("<a href='./packages/react-utils'>@repo/react-utils</a>")
    VXGS("<a href='./apps/web'>web</a>") --> EMLE("<a href='./configs/typescript-config'>@repo/typescript-config</a>")
    VXGS("<a href='./apps/web'>web</a>") --> UWBQ("<a href='./packages/ui'>@repo/ui</a>")
    VXGS("<a href='./apps/web'>web</a>") --> LRHC("<a href='./configs/vitest-config'>@repo/vitest-config</a>")
```

> 💡 **참고:**  
> 이 다이어그램은 [Mermaid](https://mermaid-js.github.io/mermaid/#/)를 사용해서 그렸어요. 이 도구는 텍스트 기반으로 다이어그램을 그릴 수 있게 해줘요. 아래의 코드를 복사해서 [Mermaid Live Editor](https://mermaid-js.github.io/mermaid-live-editor/)에 붙여넣으면 다이어그램을 시각적으로 확인할 수 있어요.

## 🚀 Quickstart

### Use this template

"Use this template" 버튼을 클릭해서 레포지토리를 생성한 후에, 아래의 명령어들을 실행해 주세요.

### 의존성 설치

이 프로젝트에서 제공하는 모노레포 명령어를 사용하려면 먼저 의존성을 설치해야 해요. 아래 명령어를 실행해 주세요:

```bash
pnpm install
```

### 소유자 ID 변경

코드베이스 내 모든 파일을 탐색하여 기존의 소유자 ID 가 기록되어 있는 부분을 변경해요. \
코드에 대한 보다 자세한 내용은 [`tools/cli`의 README](./tools/cli/README.md#-제공-기능)를 참고해 주세요.

```bash
change-owner-name --name your-username
```

### 레포지토리 이름 변경

코드 베이스 내 모든 파일을 탐색하여 기존의 레포지토리 이름이 기록되어 있는 부분을 변경해요. \
코드에 대한 보다 자세한 내용은 [`tools/cli`의 README](./tools/cli/README.md#-제공-기능)를 참고해 주세요.

```bash
rename-repository --name new-repository-name
```

### 스코프 이름 변경

코드 베이스 내 모든 파일을 탐색하여 기존의 스코프 이름이 기록되어 있는 부분을 변경해요. \
만약 모노레포 내 일부 구성 요소들을 [npm](https://www.npmjs.com/) 의 특정 스코프(e.g. `new-scope-name`)로 배포해야 해서 해당 스코프 이름으로 변경해야 하는 경우에 유용할 거예요. \
코드에 대한 보다 자세한 내용은 [`tools/cli`의 README](./tools/cli/README.md#-제공-기능)를 참고해 주세요.

```bash
rename-scope --name new-scope-name
```

### 🎉 Enjoy it !

Happy Hacking!

## 📦 구성 요소

### 🖥️ Apps

이 섹션은 다양한 애플리케이션을 포함하고 있어요. 각 앱은 특정 목적을 위해 설계되었으며, Next.js와 같은 최신 기술 스택을 활용하고 있어요.

- **[Docs](./apps/docs)**: Next.js 기반의 문서화 앱이에요.
- **[Web](./apps/web)**: Next.js 기반의 웹 애플리케이션이에요.
- **[Frontend Workshop](./apps/frontend-workshop)**: 컴포넌트 개발이랑 테스트를 위한 Storybook 환경이에요.

### 📦 Packages

이 섹션은 재사용 가능한 패키지 모음을 포함하고 있어요. 각 패키지는 특정 기능을 제공하며, 모노레포 구조에서 독립적으로 관리돼요.

- **[Browser Utils](./packages/browser-utils)**: 브라우저 관련 유틸리티 함수 모음이에요.
- **[ESLint Plugin Sample](./packages/eslint-plugin-sample)**: 샘플 ESLint 플러그인이에요.
- **[HTTP Clients](./packages/http-clients)**: HTTP 요청을 처리하려고 만든 클라이언트 라이브러리예요.
- **[Node Utils](./packages/node-utils)**: Node.js 환경에서 쓸 수 있는 유틸리티 함수 모음이에요.
- **[React UI](./packages/react-ui)**: React 기반 UI 컴포넌트 라이브러리예요.
- **[React Utils](./packages/react-utils)**: React 애플리케이션에서 쓸 수 있는 유틸리티 함수 모음이에요.
- **[UI](./packages/ui)**: 공통 UI 컴포넌트랑 스타일이에요.

### 🧩 Shared

이 섹션은 프로젝트 전반에서 재사용 가능한 내부 패키지를 포함하고 있어요. `shared` 디렉토리에 있는 패키지들은 npm에 배포되지 않고, 내부적으로만 사용돼요.

- **[Helpers](./shared/helpers)**: 프로젝트 전반에서 재사용 가능한 유틸리티 함수와 공통 로직을 제공하는 내부 패키지예요.

### 🛠️ Tools

이 섹션은 개발 및 테스트를 지원하는 도구들을 포함하고 있어요. 각 도구는 특정 작업을 자동화하거나 간소화하는 데 도움을 줘요.

- **[Playwright Web](./tools/playwright-web)**: Playwright 기반의 웹 테스트 도구예요.
- **[CLI](./tools/cli)**: 명령줄 작업을 자동화하고 프로젝트 관리 및 개발을 지원하기 위한 도구예요.
- **[Lighthouse CI](./tools/lighthouse-ci)**: 웹 애플리케이션의 성능, 접근성, SEO 등을 자동으로 측정하고 관리하기 위한 도구예요.

### ⚙️ Configs

이 섹션은 프로젝트 전반에서 사용되는 공통 설정 파일들을 포함하고 있어요. ESLint, TypeScript, Vitest와 같은 도구들의 설정이 포함돼요.

- **[ESLint Config](./configs/eslint-config)**: ESLint 설정을 위한 공통 구성이에요.
- **[Playwright Config](./configs/playwright-config)**: Playwright 테스트 설정이에요.
- **[TypeScript Config](./configs/typescript-config)**: TypeScript 설정을 위한 공통 구성이에요.
- **[Vitest Config](./configs/vitest-config)**: Vitest 테스트 설정을 위한 공통 구성이에요.

## 🔀 Workflows

이 프로젝트는 다음과 같은 GitHub Actions Workflow를 포함하고 있어요:

- **[Install and Build](.github/workflows/install-and-build.yml)**: `install-and-build.yml` 파일에 정의되어 있으며, 프로젝트의 의존성 설치 및 빌드 작업을 자동화해요.
- **[Unit Test](.github/workflows/unit-test.yml)**: `unit-test.yml` 파일에 정의되어 있으며, 프로젝트의 유닛 테스트를 실행해요.
- **[Storybook Test](.github/workflows/storybook-test.yml)**: `storybook-test.yml` 파일에 정의되어 있으며, Storybook 환경에서 컴포넌트 테스트를 실행해요.
  - 🐳 이 Workflow는 [`docker-compose.storybook.yaml`](./docker-compose.storybook.yaml) 파일을 사용해서 Storybook 테스트 환경을 설정해요.
- **[End-to-End Test](.github/workflows/e2e-test.yml)**: `e2e-test.yml` 파일에 정의되어 있으며, End-to-End 테스트를 실행해요.
  - 🐳 이 Workflow는 [`docker-compose.e2e.yaml`](./docker-compose.e2e.yaml) 파일을 사용해서 E2E 테스트 환경을 설정해요.
- **[Lighthouse Test](.github/workflows/lighthouse-test.yml)**: `lighthouse-test.yml` 파일에 정의되어 있으며, Lighthouse를 사용해서 웹사이트의 성능, 접근성, SEO 등을 테스트해요.
  - 🐳 이 Workflow는 [`docker-compose.lighthouse.yaml`](./docker-compose.lighthouse.yaml) 파일을 사용해서 Lighthouse 테스트 환경을 설정해요.
- **[Release](.github/workflows/release.yml)**: `release.yml` 파일에 정의되어 있으며, `changesets`를 사용하여 패키지를 배포하는 과정을 자동화해요.
  - 🦋 이 Workflow는 `changesets`이라는 패키지 버전 관리와 배포를 간소화하는 도구를 사용해요. 자세한 내용은 [공식 문서](https://github.com/changesets/changesets)를 참고하세요.
  - 배포를 위해서는 `npm` 인증 토큰을 GitHub Secrets에 `NPM_TOKEN`으로 설정해야 해요.

각 Workflow는 `.github/workflows/` 디렉토리에 위치하고 있어요.

## 🦋 패키지 버저닝 및 배포

이 프로젝트는 [Changesets](https://github.com/changesets/changesets)를 사용하여 패키지 버전 관리와 배포를 간소화하고 있어요. Changesets는 모노레포 환경에서 특히 유용하며, 각 패키지의 변경 사항을 추적하고 이를 기반으로 버전을 업데이트할 수 있도록 도와줘요.

### 기본 사용 방법

1. 새 변경 사항 추가:

   ```bash
   pnpm changeset
   ```

   명령어를 실행하면 변경 사항에 대한 설명을 작성할 수 있는 프롬프트가 나타나요. 이를 통해 변경 사항을 기록할 수 있어요.

2. 버전 업데이트 및 변경 사항 적용:

   ```bash
   pnpm changeset version
   ```

   이 명령어는 모든 패키지의 버전을 업데이트하고, `CHANGELOG.md` 파일을 생성하거나 업데이트해요.

3. 배포:
   ```bash
   pnpm changeset publish
   ```
   이 명령어는 업데이트된 패키지를 npm에 배포해요. 배포를 위해서는 `NPM_TOKEN`이 GitHub Secrets에 설정되어 있어야 해요.

자세한 내용은 [공식 문서](https://github.com/changesets/changesets)를 참고하세요.

## ⬇️ 의존성 설치

### pnpm 설치

```bash
pnpm install
```

## 🧑‍💻 사용법

### CLI 사용

`pnpm install`을 실행하면 [`tools/cli`](./tools/cli)에 정의된 CLI 명령어들을 바로 사용할 수 있어요.

```bash
example --ls [directory-path]
example --mkdir <directory-name>
example --touch <file-name>
```

### 빌드

```bash
pnpm build
```

### 개발 서버 실행

```bash
pnpm dev
```

### 원격 캐싱 설정 (Optional)

필요에 따라 [Turborepo 공식 문서](https://turborepo.com/docs/core-concepts/remote-caching)를 참고하여 원격 캐싱을 사용하도록 설정할 수 있어요.

```bash
npx turbo login
npx turbo link
```

## 🤝 기여

이 템플릿에 기여하려면, [CONTRIBUTING.md](./CONTRIBUTING.md)를 참고해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.
