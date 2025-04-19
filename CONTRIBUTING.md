# 🤝 기여 가이드

이 프로젝트에 기여해 주셔서 감사합니다! 아래의 가이드를 따라 기여를 시작해 보세요.

## 📝 이슈 생성하기

1. 프로젝트에서 발견한 버그를 보고하거나 새로운 기능을 제안하려면 [이슈 탭](https://github.com/iamhoonse-dev/turborepo-template/issues)을 방문해 주세요.
2. 이슈를 생성할 때는 명확하고 간결하게 설명해 주세요.
3. 가능한 경우, 재현 가능한 단계와 관련 스크린샷을 포함해 주세요.

## 🔧 코드 기여하기

1. 프로젝트를 포크하고 로컬 환경에 클론해 주세요:

   ```bash
   git clone https://github.com/your-username/turborepo-template.git
   cd turborepo-template
   ```

2. 새로운 브랜치를 생성해 주세요:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. 코드를 작성하고 테스트를 실행하여 변경 사항이 예상대로 작동하는지 확인해 주세요:

   > 💡 **참고:**  
   > 이 프로젝트는 GitHub Actions를 사용하여 PR 생성 시 자동으로 테스트를 실행해요. 로컬에서 테스트를 통과한 후 PR을 생성해 주세요.

   ```bash
   pnpm run test
   pnpm run test:e2e
   ```

4. 커밋 메시지를 명확하게 작성해 주세요. 커밋 메시지는 [Conventional Commit](https://www.conventionalcommits.org/ko/v1.0.0/) 규약을 따라야 해요.

   > 💡 **참고:**  
   > 이 프로젝트는 `commit-msg` Git Hook을 사용하여 커밋 메시지를 검사해요. 규칙에 맞지 않는 커밋 메시지는 거부되요.

   ```bash
   git commit -m "feat(component): add new button component"
   ```

5. 변경 사항을 푸시해 주세요:
   ```bash
   git push origin feature/your-feature-name
   ```
6. [Pull Request](https://github.com/iamhoonse-dev/turborepo-template/pulls)를 생성해 주세요.

## 🎨 코드 스타일

- 이 프로젝트는 특정 코드 스타일 가이드를 따르고 있어요. (예: Prettier, ESLint 등)
- PR을 제출하기 전에 코드 스타일을 확인하고 포맷팅 도구를 실행해 주세요:
  > 💡 **참고:**  
  > 이 프로젝트는 `pre-commit` Git Hook을 사용하여 코드 스타일과 린트 검사를 자동으로 실행해요. 커밋 전에 모든 검사를 통과했는지 확인해 주세요.
  ```bash
  pnpm run lint
  pnpm run format
  ```

## 🔍 리뷰 프로세스

1. 제출된 PR은 프로젝트 관리자와 GitHub Copilot이 검토해요.
2. 필요한 경우, 리뷰어가 변경 요청을 남길 수 있어요.
3. 모든 리뷰가 승인되고, 모든 테스트와 코드 스타일 검사를 통과하면 PR이 병합되요.

## 📜 기여 시 유의사항

- 모든 기여는 [MIT 라이선스](./LICENSE)에 따라 제공되요.
- 기여하기 전에 프로젝트의 [README](./README.md)를 읽어 주세요.

## 💖 감사합니다!
