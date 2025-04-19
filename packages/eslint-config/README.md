# ⚙️ ESLint Config

## 📖 개요

`eslint-config` 패키지는 프로젝트에서 사용할 수 있는 ESLint 설정 모음을 제공해요. 이 패키지는 다양한 환경에서 일관된 코드 품질을 유지할 수 있도록 설계되었어요.

## 📦 제공 기능

- **[Base Config](./base.js)**: 기본 ESLint 설정을 제공해요.
- **[Next.js Config](./next.js)**: Next.js 프로젝트에 최적화된 ESLint 설정을 제공해요.
- **[React Internal Config](./react-internal.js)**: React 내부 프로젝트를 위한 ESLint 설정을 제공해요.

## ⬇️ 설치

### Turborepo 워크스페이스에서 설치

`eslint-config`는 내부 패키지로, Turborepo 환경 내에서만 사용돼요. `package.json` 파일의 `devDependencies` 섹션에 다음과 같이 추가해 주세요:

```json
{
  "devDependencies": {
    "@your-org/eslint-config": "workspace:*"
  }
}
```

그 후, 다음 명령어를 실행해서 의존성을 설치해 주세요:

```bash
pnpm install
```

## 🧑‍💻 사용법

### Base Config 사용 예시

```javascript
// eslint.config.mjs
import { config } from "@your-org/eslint-config/base";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default config;
```

### Next.js Config 사용 예시

```javascript
// eslint.config.mjs
import { nextJsConfig } from "@your-org/eslint-config/next";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default nextJsConfig;
```

### React Internal Config 사용 예시

```javascript
// eslint.config.mjs
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { config } from "@your-org/eslint-config/react-internal";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [...config],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
    },
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
```

## 🤝 기여

이 패키지에 기여하려면, [CONTRIBUTING.md](../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.
