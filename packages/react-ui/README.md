# 🖼️ React UI

## 📖 개요

`react-ui` 패키지는 React 컴포넌트 라이브러리로, UI 개발을 단순화하고 재사용 가능한 컴포넌트를 제공해요. 이 패키지는 React 애플리케이션에서 빠르게 UI를 구성할 수 있도록 설계되었어요.

## 📦 제공 기능

- **[ShadCN UI](./src/base/shadcn-ui)**: ShadCN UI 관련 모듈을 제공해요.
- **[Utils](./src/lib/utils.ts)**: React 애플리케이션에서 사용할 수 있는 UI 관련 유틸리티 함수 모음을 제공해요.
- **[Components](./src/components)**: 다양한 React UI 컴포넌트를 제공해요.
- **[Constants](./src/constants)**: 반응형 디자인을 위한 Breakpoints 등과 같은 스타일 관련 상수들을 제공해요.
- **[Base CSS](./src/styles/base.css)**: 기본 스타일 파일을 제공해요.

## ⬇️ 설치

### pnpm 설치

```bash
pnpm add @your-org/react-ui
```

## 🧑‍💻 사용법

### shadcn-ui 사용 예시

```tsx
import { Button } from "@your-org/react-ui/shadcn-ui";

const App: React.FC = () => {
  return (
    <Button className="bg-blue-500 text-white py-2 px-4 rounded">
      shadcn/ui
    </Button>
  );
};

export default App;
```

### utils 사용 예시

```tsx
import { Button } from "@your-org/react-ui/shadcn-ui";
import { cn } from "@your-org/react-ui/utils";

const App: React.FC = () => {
  return <Button className={cn("bg-red-400")}>shadcn/ui</Button>;
};

export default App;
```

### components 사용 예시

```tsx
import { SampleButton } from "@your-org/react-ui/components";

const App: React.FC = () => {
  return <SampleButton />;
};

export default App;
```

### base.css 사용 예시

#### Next.js 에서 사용할 때 (`globals.css`)

```css
@import "@your-org/react-ui/base.css";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

/* ...이후 생략... */
```

#### Storybook 에서 사용할 때 (`preview.ts`)

```typescript
import type { Preview } from "@storybook/react";
import "@your-org/react-ui/base.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
```

## 🤝 기여

이 패키지에 기여하려면, [CONTRIBUTING.md](../../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.
