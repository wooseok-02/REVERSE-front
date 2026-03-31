# REVERSE-front
# 🌿 Git Flow 전략

## 브랜치 구조

```
main
└── release
    └── develop
        └── feature/기능명
```

## 브랜치 설명

| 브랜치 | 역할 |
|---|---|
| `main` | 배포 브랜치. 통합 테스트 완료 후 merge |
| `release` | 스프린트 요구사항 검증 및 버그 픽스. merge 시 버전 태깅 |
| `develop` | feature PR을 통합하는 브랜치. 스프린트 요구사항이 모두 올라오면 release에 PR |
| `feature/기능명` | 기능 단위 개발 브랜치. 작업 완료 후 develop에 PR |
| `hotfix/기능명` | main 브랜치에 에러 발생시 수정하는 브랜치. 참여인원 전원 리뷰해야 하며, main,develop 브랜치에 PR |

## 개발 흐름

```
1. develop에서 feature/기능명 브랜치 생성
2. 기능 개발 후 commit & push
3. GitHub에서 develop으로 PR 생성
4. 팀원 리뷰 후 merge (feature 브랜치 삭제)
5. 스프린트 요구사항 전부 develop에 merge되면 release로 PR
6. 버그 확인 및 픽스 후 main으로 PR
7. 통합 테스트 완료 후 merge & 버전 태깅
```

---

# 🔒 브랜치 보호 규칙

## 규칙 요약

| 브랜치 | 최소 리뷰어 | merge 권한 |
|---|---|---|
| `main` | 팀장 | 기획자 |
| `release` | 전원 | 팀장 |
| `develop` | 전원 | 전원 |

## 적용 규칙

- **Require a pull request before merging**
  - 직접 push 금지, PR을 통해서만 merge 가능
  - feature → develop → release → main 순서로만 이동

- **Require approvals**
  - 지정된 리뷰어 수 이상 승인 후 merge 가능
  - 새 커밋 push 시 기존 승인 무효화 (재승인 필요)

- **Require conversation resolution before merging**
  - PR에 달린 모든 리뷰 댓글이 resolved 되어야 merge 가능
  - 동작 방식:
    1. 팀원이 PR 코드에 리뷰 댓글 작성
    2. 작성자가 코드 수정 후 `Resolve conversation` 버튼 클릭
    3. 모든 댓글이 resolved 상태여야 merge 버튼 활성화
  - > ⚠️ 코드를 실제로 수정했을 때만 Resolve 버튼을 누를 것

- **Block force pushes**
  - `git push --force` 로 히스토리 덮어쓰기 금지
  - 커밋 히스토리 무단 변경 방지

---

# 📌 브랜치 네이밍 컨벤션

```
feature/기능명

# 예시
feature/login
feature/user-mypage
feature/issue-23
```

> ⚠️ 한글, 대문자, 공백 사용 금지
