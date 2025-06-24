declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        // GITHUB_REPOSITORY 는 코드 링크 URL 구성에 사용되는 GitHub 저장소 이름입니다.
        GITHUB_REPOSITORY: `${string}/${string}`;
        // GITHUB_REPO는 Giscus 에서 사용하는 GitHub 저장소 이름입니다.
        GISCUS_REPO: `${string}/${string}`;
        // GITHUB_REPO_ID는 Giscus 에서 사용하는 GitHub 저장소 ID 입니다.
        GISCUS_REPO_ID: string;
        // GITHUB_DISCUSSION_CATEGORY는 Giscus 에서 사용하는 GitHub Discussions 카테고리 이름입니다.
        GISCUS_DISCUSSION_CATEGORY: string;
        // GITHUB_DISCUSSION_CATEGORY_ID는 Giscus 에서 사용하는 GitHub Discussions 카테고리 ID 입니다.
        GISCUS_DISCUSSION_CATEGORY_ID: string;
      }
    }
  }
}
