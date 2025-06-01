# 📚 Docs

## 📖 개요

`docs` 애플리케이션은 Next.js와 Nextra, Nextra Docs 테마를 활용하여 프로젝트의 공식 문서 사이트를 제공하는 앱입니다. Turborepo 모노레포 환경에서 문서화와 정적 사이트 생성을 위한 예시 역할을 합니다.

## 📦 제공 기능

- **문서화**: 다양한 프로젝트 정보를 구조적으로 문서화할 수 있습니다.
- **검색**: Pagefind를 통한 문서 내 검색 기능을 제공합니다.
- **정적 사이트 생성**: Next.js 기반의 정적 사이트 빌드가 가능합니다.
- **Turborepo 통합**: 모노레포 환경에서 손쉽게 문서 사이트를 관리할 수 있습니다.

## ⬇️ 설치

### pnpm 설치

```bash
pnpm install
```

## 🧑‍💻 사용법

### 개발 서버 실행

```bash
pnpm run dev
```

[http://localhost:3002](http://localhost:3002)에서 문서 사이트를 확인할 수 있습니다.

### 정적 사이트 빌드

```bash
pnpm run build
```

빌드된 정적 파일은 `.next/` 디렉토리에 생성됩니다.

## 🤝 기여

이 애플리케이션에 기여하려면, [CONTRIBUTING.md](../../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.
