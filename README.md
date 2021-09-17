
## Getting Started

`npm i`
`npm run dev`
`yarn dev`


## Stack

- Design : Figma
- Dev : ReactJS, NextJS, TypeScript, SCSS

## Setting

- [1] 셋팅 - 기본 프로젝트
```
npx create-next-app --typescript                  // ReactJS 기반 프레임워크인 NextJS 와 TypeScript 설치
npm i -D prettier                                 // 프리티어 설정
yarn add @zeit/next-sass node-sass @zeit/next-css // sass 및 css
yarn add classnames                               // 중복된 classnames
yarn add axios                                    // axios
yarn add -D cross-env                             // port 8080 으로 변경
yarn add -D webpack@webpack-4                     // webpack 5를 4로 다운그레이드 적용
```

- [2] 설정 - 프리티어, 상대경로, 웹팩
```
// package.json
  "prettier": {
    "semi": false,                      // 세미콜론 없이 컴파일 가능
    "singleQuote": true                 // 홑따옴표 사용 가능
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
  webpack5: false,                      // 기본 웹팩 버전 다운드레이드
})
```

- [3] 셋팅 및 작업
```
- Components : header, lnb, select, seo
- Styles : Globals에 브라우저 공통 스타일 초기화  
           Figma에 정의했던 스타일가이드와 동일한 스타일을 root에 미리 정의  
- SEO : 웹페이지를 검색하고 공유했을 때 보여지는 기본 설명 텍스트 설정
- web accessibility : 스크린리더를 위한 이미지 대체텍스트
- 기타 : 작업 내역은 커밋 로그에 저장
```

- [4] Figma UI/UX (before/after)
> 1. [개선된 UX 설명 및 디자인시스템 정리](https://www.figma.com/file/kjQt73lTcFIVs9IgYk5UzY/Result-page?node-id=202%3A44)
![image](https://user-images.githubusercontent.com/54713067/133747910-cefdb149-568d-495b-a450-3715c4c5b569.png)
> 
> 2. [프로토타입 (hover & click)](https://www.figma.com/proto/kjQt73lTcFIVs9IgYk5UzY/Result-page?node-id=207%3A2179&scaling=contain&page-id=202%3A44&starting-point-node-id=207%3A2179&show-proto-sidebar=1)
![image](https://user-images.githubusercontent.com/54713067/133748035-463b07b7-f1e0-4d61-b6ee-7cc18d5a77a9.png)
> 
> 3. 최종 브라우저 화면
![image](https://user-images.githubusercontent.com/54713067/133751566-a0617b36-a2bd-4362-931c-9386af2b135c.png)
> 
> 4. 인터랙션 스타일이 적용된 요소  
> 4-1. `Download 버튼의 hover와 active`
![button](https://user-images.githubusercontent.com/54713067/133852439-4a82deda-1a4a-44ab-a2d6-7bbc7d2d3fec.gif)  
> 4-2. `logo를 활용한 loading 애니메이션 (프로토타입에서 확인)`
![logo animation](https://user-images.githubusercontent.com/54713067/133852175-a852f9fb-74dc-473f-a69d-defc34e0d9ea.gif)

- [5] 요구사항 미완성 내역
```
오름차순, 내림차순 정렬
서브데이터 api 호출 및 서브데이터 체크박스
선택한 row 데이터 select에 추가
검색 값 출력 (검색 값 계속 저장)
```
