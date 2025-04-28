# 🛠️ CLI 도구

## 📖 개요

`cli` 도구는 명령줄 작업을 자동화하고 프로젝트 관리 및 개발을 지원하기 위해 설계된 도구예요. 다양한 명령어를 통해 효율적인 워크플로우를 제공해요.

## 📦 제공 기능

- **[example](./src/example/index.ts)**: 디렉토리와 파일을 관리하기 위한 CLI 도구예요. 주요 기능은 다음과 같아요:
  - `-l, --ls [value]`: 디렉토리 내용을 나열해요. `value`를 지정하지 않으면 현재 디렉토리를 나열해요.
  - `-m, --mkdir <value>`: 새로운 디렉토리를 생성해요.
  - `-t, --touch <value>`: 새로운 파일을 생성해요.

## ⬇️ 설치

### pnpm 설치

프로젝트 루트에서 다음 명령어를 실행해 주세요:

```bash
pnpm install
```

## 🧑‍💻 명령어 사용 예시

### `example` 명령어

#### 디렉토리 내용 나열

`[directory-path]`를 지정하지 않으면 현재 디렉토리의 내용을 나열해요.

```bash
example --ls [directory-path]
```

#### 디렉토리 생성

`<directory-name>`에 해당하는 디렉토리를 생성해요.

```bash
example --mkdir <directory-name>
```

#### 파일 생성

`<file-name>`에 해당하는 파일을 생성해요.

```bash
example --touch <file-name>
```

## 🤝 기여

이 도구에 기여하려면, [CONTRIBUTING.md](../../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.
