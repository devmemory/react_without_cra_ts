# Webpack & Esbuild react 셋팅
- webpack 5 버전을 기준으로 설정
- 이미지, 폰트 등 asset 관리 추가

## 1. package.json 생성
- 역할 : 노드 프로젝트로 정의
- 방법 : npm init -y

## 2. react, react-dom 설치
- 역할 : react 라이브러리, react와 dom을 연결
- 방법 : npm i react react-dom

## 3. webpack 설치
- 역할 : 모듈 번들러로 웹 파일들을 하나의 파일로 묶어줌
- 방법 : npm i -D webpack webpack-cli webpack-dev-server esbuild-loader css-loader style-loader

3.1 webpack : 모듈 번들러  
3.2 webpack-cli : 커맨드라인 인터페이스  
3.3 webpack-dev-server : 임시 서버 구동에 필요  
3.4 esbuild-loader : esbuild로 번들링  
3.5 css-loader, style-loader : inner css, css file 처리  

## 4. 플러그인 설치
4.1 html-webpack-plugin : html파일에 번들링된 js 불러오기, dist폴더에 번들링된 파일 옮겨줌  
4.2 clean-webpack-plugin : 이전 번들링 파일 제거  
4.3 mini-css-extract-plugin : css 번들링  
4.4 copy-webpack-plugin : assets 옮기기 용도(emit false 처리 필요)  

## 5. webpack 설정 파일 작성
5.1 엔트리 포인트 설정  
5.2 rules에 로더 설정 및 순서 배치(뒤의 요소부터 번들링에 반영)  
5.3 build 위치 및 개발 서버 셋팅  

## 6. package.json에 script 등록
```
"scripts": {
    "dev": "NODE_ENV=development webpack-dev-server --progress",
    "build": "NODE_ENV=production webpack --progress",
    "test": "jest"
}
```

## 7. public/index.html 생성

# Typescript 추가

## 1. typescript 설치
- 역할 : typescript 필수 라이브러리, webpack에서 컴파일
- 방법 : npm i -D typescript

## 2. webpack 수정
```
{
    ...,
    entry: './src/index.tsx',
    ...,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css'],
        plugins: [new TsconfigPathsPlugin()]
    },
    ...,
    module: {
        rules: [
            ...,
            {
                test: /\.[jt]sx?$/,
                loader: "esbuild-loader",
                options: {
                    target: "es2015",
                },
            },
            ...
        ]
    }
}
```

## 3. module.css 추가
- 역할 : module.css인식 가능하도록 추가
- 방법 : src 내부에 types directory를 만든 후, index.d.ts 생성

```
    // 해당 내용 추가
    declare module '*.module.css'
```

---

# Jest 설정

## 1. 테스팅 관련 라이브러리 설치
- 역할 : testing에 필요한 라이브러리들 설치
- 방법 : npm i -D @testing-library/react @types/jest jest jest-environment-jsdom esbuild-jest

1.1 @testing-library/react : react 컴포넌트를 사용 가능하게 함  
1.2 @types/jest: jest typescript 지원  
1.3 jest : testing 라이브러리  
1.4 jest-environment-jsdom : test에 DOM 사용 용도  
1.5 esbuild-jest : js, ts, jsx, tsx load  

## 2. package.json Jest 설정 (jest.config.js or package.json에 설정 가능)
2.1 testEnvironment: 테스트 환경을 jsdom 형태로 변경  
2.2 js, ts파일 가져오기  
2.3 moduleDirectories: 절대경로 처리를 위해 src 추가  
2.4 moduleNameMapper: jest에서 css를 코드로 인식해서 mock으로 변경  
2.5 

- jest.config.json

```
{
  "testEnvironment": "jsdom",
  "transform": {
    "\\.[jt]sx?$": "esbuild-jest"
  },
  "moduleDirectories": ["node_modules", "src"],
  "moduleNameMapper": {
    "\\.(css)$": "<rootDir>/test/styleMock.ts",
    "^src/(.*)$": "<rootDir>/src/$1"
  }
}
```
