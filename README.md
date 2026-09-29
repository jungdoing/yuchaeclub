# YUCHAE CLUB 브랜드 웹페이지

제주 유채를 보고, 먹고, 즐기는 새로운 로컬 푸드 컬처 브랜드 **YUCHAE CLUB**의 팝업스토어 소개 웹페이지입니다.

> DON'T JUST WATCH IT. EAT IT.  
> 보지만 말고, 먹어봐!

## 주요 구성

- 브랜드 메시지와 제품을 강조한 히어로 영역
- YUCHAE CLUB 브랜드 스토리
- 유채페스토·유채크래커 제품 소개
- FOOD · GOODS · SPACE 카테고리 탭
- 제품과 굿즈 이미지 갤러리 및 확대 보기
- 팝업스토어 방문 정보 영역
- 모바일·태블릿·데스크톱 반응형 레이아웃
- 스크롤 애니메이션, 모바일 메뉴, 맨 위로 이동 기능
- 캐릭터 얼굴 파비콘 및 16:9 소셜 공유 이미지

## 기술 구성

별도의 프레임워크나 빌드 과정 없이 실행되는 정적 웹사이트입니다.

- HTML5
- CSS3
- Vanilla JavaScript

## 프로젝트 구조

```text
.
├─ index.html                 # 페이지 구조와 메타데이터
├─ styles.css                 # 디자인 및 반응형 스타일
├─ script.js                  # 메뉴, 탭, 갤러리 등의 인터랙션
└─ assets/
   ├─ favicon.png             # 512px 캐릭터 파비콘
   ├─ favicon-32.png          # 브라우저 탭용 파비콘
   ├─ apple-touch-icon.png    # 모바일 홈 화면 아이콘
   ├─ og-yuchae-club.png      # 1200×675 소셜 공유 이미지
   └─ ...                     # 로고, 제품, 굿즈, 공간 이미지
```

## 로컬에서 확인하기

`index.html` 파일을 브라우저에서 직접 열면 확인할 수 있습니다.

로컬 서버를 사용하는 경우 프로젝트 폴더에서 다음 명령을 실행합니다.

```bash
python -m http.server 8000
```

이후 브라우저에서 `http://localhost:8000`으로 접속합니다.

## 팝업스토어 정보

위치, 운영 기간, 운영 시간, 방문 안내는 아직 확정 정보가 제공되지 않아 페이지에 **정보 준비 중**으로 표시되어 있습니다. 실제 운영 정보가 확정되면 `index.html`의 `#popup` 영역을 수정하면 됩니다.

## 배포

GitHub Pages를 사용하는 경우 저장소의 **Settings → Pages**에서 `main` 브랜치의 루트 디렉터리를 배포 소스로 지정합니다.

배포가 활성화되면 예상 주소는 다음과 같습니다.

```text
https://jungdoing.github.io/yuchaeclub/
```

현재 Open Graph 메타데이터도 위 주소를 기준으로 설정되어 있습니다.
