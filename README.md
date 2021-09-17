
## Getting Started

`npm i`
`npm run dev`
`yarn dev`


## Stack

- 적용한 스택  
`ReactJS, NextJS, TypeScript, SCSS`

## Setting

- [1] ReactJS 기반 프레임워크인 NextJS TypeScript 설치  
`npx create-next-app --typescript`

- [2] package.json 에 기본 라이브러리 설치
```
npm i -D prettier                                 // 프리티어 설정
yarn add @zeit/next-sass node-sass @zeit/next-css // sass 및 css
yarn add classnames                               // 중복된 classnames
yarn add axios                                    // axios
yarn add -D cross-env                             // port 8080 으로 변경
yarn add -D webpack@webpack-4                     // webpack 5를 4로 다운그레이드 적용
```

- [3] 프리티어, 상대경로, 웹팩 설정

```
// package.json
  "prettier": {
    "semi": false,
    "singleQuote": true
  },

// tsconfig.json
"compilerOptions": {
  "baseUrl": "./",                      // 기본 경로
  "paths": {
    "@components/*": ["components/*"],  // 컴포넌트 경로
    "@styles/*": ["styles/*"],          // 스타일 경로
    "@pages/*": ["pages/*"],            // 페이지 경로
  },
}

// next.config.js
module.exports = ({
  webpack5: false,
})
```

- [5] components, styles, seo, web accessibility 셋팅 및 작업  
`작업 내역은 커밋 로그에 저장`

- [6] 인터랙션 스타일이 적용된 요소
1. Download 버튼의 hover와 active
2. Figma에서 logo를 활용한 loading 애니메이션 프로토타입 (figma에서 확인)

- [7] UI / UX 개선 전/후  
[Figma 상세설명 및 스타일 가이드 정리 (Styles, Components)](https://www.figma.com/file/kjQt73lTcFIVs9IgYk5UzY/Result-page?node-id=202%3A44)
![image](https://user-images.githubusercontent.com/54713067/133747910-cefdb149-568d-495b-a450-3715c4c5b569.png)

- [8] UI / UX 개선 전/후  
[Figma 프로토타입](https://www.figma.com/proto/kjQt73lTcFIVs9IgYk5UzY/Result-page?node-id=207%3A2179&scaling=contain&page-id=202%3A44&starting-point-node-id=207%3A2179&show-proto-sidebar=1)
![image](https://user-images.githubusercontent.com/54713067/133748035-463b07b7-f1e0-4d61-b6ee-7cc18d5a77a9.png)

- [9] 최종 브라우저 화면
![image](https://user-images.githubusercontent.com/54713067/133751566-a0617b36-a2bd-4362-931c-9386af2b135c.png)

- [10] 요구사항 미완성 내역
```
오름차순, 내림차순 정렬
서브데이터 api 호출 및 서브데이터 체크박스
선택한 row 데이터 select에 추가
검색 값 출력 (검색 값 계속 저장)
```
