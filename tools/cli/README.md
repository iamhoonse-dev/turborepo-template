# 🛠️ CLI 도구

## 📖 개요

`cli` 도구는 명령줄 작업을 자동화하고 프로젝트 관리 및 개발을 지원하기 위해 설계된 도구예요. 다양한 명령어를 통해 효율적인 워크플로우를 제공해요.

## 📦 제공 기능

- **[example](./src/example/index.ts)**: 디렉토리와 파일을 관리하기 위한 CLI 도구예요. 주요 기능은 다음과 같아요:
  - `-l, --ls [value]`: 디렉토리 내용을 나열해요. `value`를 지정하지 않으면 현재 디렉토리를 나열해요.
  - `-m, --mkdir <value>`: 새로운 디렉토리를 생성해요.
  - `-t, --touch <value>`: 새로운 파일을 생성해요.
- **[change-owner-name](./src/change-owner-name/index.ts)**: 코드베이스 내 모든 파일을 탐색하여 기존의 소유자 ID 가 기록되어 있는 부분을 replace 해주는 CLI 도구에요.
  - `-n, --name <value>`: 새로운 소유자 이름을 지정해요.
- **[rename-repository](./src/rename-repository/index.ts)**: 코드베이스 내 모든 파일을 탐색하여 레포지토리 이름이 기록되어 있는 부분을 replace 해주는 CLI 도구에요.
  - `-n, --name <value>`: 새로운 레포지토리 이름을 지정해요.
- **[rename-scope](./src/rename-scope/index.ts)**: 코드베이스 내 모든 파일을 탐색하여 기존의 패키지명 앞에 기록되어 있는 스코프 부분(e.g. `@repo/`)을 replace 해주는 CLI 도구에요.
  - `-n, --name <value>`: 새로운 스코프 이름을 지정해요.

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

### `change-owner-name` 명령어

#### 소유자 ID 변경

```bash
change-owner-name -n your-username

# or equivalently

change-owner-name --name your-username
```

### `rename-repository` 명령어

#### 레포지토리 이름 변경

```bash
rename-repository -n new-repository-name

# or equivalently

rename-repository --name new-repository-name
```

### `rename-scope` 명령어

#### 스코프 이름 변경

```bash
rename-scope -n new-scope-name

# or equivalently

rename-scope --name new-scope-name
```

## 🤝 기여

이 도구에 기여하려면, [CONTRIBUTING.md](../../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.
