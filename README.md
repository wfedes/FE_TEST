
## Getting Started

npm run dev
yarn dev


## Stack

- 적용한 스택
`ReactJS, NextJS, TypeScript, SCSS`

## Setting

- ReactJS 기반 프레임워크인 NextJS TypeScript 설치
`npx create-next-app --typescript`

- 프리티어 설정 (큰따옴표/작은따옴표 구분 상관없이 저장 가능하고, 세미콜론 없이 저장가능)
`npm i -D prettier`
```
// package.json
  "prettier": {
    "semi": false,
    "singleQuote": true
  },
```

- 상대경로 설정
```
// tsconfig.json
"compilerOptions": {
  "baseUrl": "./",                      // 기본 경로
  "paths": {
    "@components/*": ["components/*"],  // 컴포넌트 경로
    "@styles/*": ["styles/*"],          // 스타일 경로
    "@pages/*": ["pages/*"],            // 페이지 경로
  },
}
```

- sass와 css를 같이 사용하기위해 기본으로 적용되어있는 webpack 5를 4로 다운그레이드 적용
`yarn add --dev webpack@webpack-4`
```
// next.config.js
module.exports = ({
  webpack5: false,
})
```

- sass 추가
`yarn add @zeit/next-sass node-sass @zeit/next-css`