# 🌟 Lighthouse CI

## 📖 개요

`lighthouse-ci`는 웹 애플리케이션의 성능, 접근성, SEO 등을 자동으로 측정하고 관리하기 위한 도구예요. 이 도구는 Turborepo 기반의 모노레포 프로젝트에서 성능 테스트를 표준화하고 자동화하기 위해 설계되었어요.

## 🛠️ 제공 기능

- **[Lighthouse Config](./.lighthouserc.cjs)**: Lighthouse CI 설정 파일로, 테스트 환경 및 옵션을 정의해요. 기본 설정은 일반적인 웹 애플리케이션에 적합하며, [공식 문서](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md)를 참조하여 사용자 정의가 가능해요.
- **[Dockerfile](./Dockerfile)**: Lighthouse CI를 Docker 환경에서 실행하기 위한 설정 파일이에요.
- **[Configs](./configs/)**: 추가적인 설정 파일들이 위치한 디렉토리예요.

## 🧑‍💻 사용법

### 성능 테스트 실행 방법

```bash
pnpm run test:lighthouse
```

## 🤝 기여

이 도구에 기여하려면, [CONTRIBUTING.md](../../CONTRIBUTING.md)를 참조해 주세요.

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포돼요.