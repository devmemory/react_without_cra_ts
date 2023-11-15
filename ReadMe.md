# webpack & babel react 셋팅
- webpack 5 버전을 기준으로 설정
- 이미지, 폰트 등 asset 관리 추가

## 1. package.json 생성
- 역할 : 노드 프로젝트로 정의
- 방법 : npm init -y

## 2. react, react-dom 설치
- 역할 : react 라이브러리, react와 dom을 연결
- 방법 : npm i react react-dom

## 3. babel 설치
- 역할 : transpiler로 es6 이상을 es5형식에 맞게 변환
- 방법 : npm i @babel/core @babel/preset-react @babel/preset-env

3.1 preset-react : jsx를 js로 변환  
3.2 preset-env : es5로 변환  

## 4. webpack 설치
- 역할 : 모듈 번들러로 웹 파일들을 하나의 파일로 묶어줌
- 방법 : npm i -D webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader

  4.1 webpack : 모듈 번들러 4.2 webpack-cli : 커맨드라인 인터페이스 4.1 webpack-dev-server : 임시 서버 구동에 필요 4.2 css-loader, style-loader : css 문법을 js로 변환 및 html의 style 태그에 넣어줌

## 5. 플러그인 설치
5.1 html-webpack-plugin : html파일에 번들링된 react 코드 삽입, dist폴더에 번들링된 파일 옮겨줌  
5.2 clean-webpack-plugin : 이전 번들링 파일 제거  
5.3 mini-css-extract-plugin : css 번들링  
5.4 copy-webpack-plugin : assets 옮기기 용도  

## 6. babel, webpack 설정 파일 작성
6.1 babel.config.js : preset 설정등 정의  
6.2 webpack.config.js  
a. 엔트리 포인트 설정  
b. rules에 로더 설정 및 순서 배치(뒤의 요소부터 번들링에 반영)  
c. build 위치 및 개발 서버 셋팅  

## 7. package.json에 script 등록
```
"scripts": {
    "dev": "NODE_ENV=development webpack-dev-server --progress",
    "build": "NODE_ENV=production webpack --progress",
    "test": "jest"
  }
```

## 8. public/index.html 생성

## 9. webpack 추가설정

```
{
    ...,
    plugins : [
        ...,
        new webpack.DefinePlugin({
            port: process.env.port,
            "process.env" : JSON.stringify(process.env)
        })
    ],
    devServer: {
        host: process.env.host,
        port: process.env.port,
        static: {
            directory: __dirname + '/public',
        },
        compress: true,
        historyApiFallback: true,
        hot: true
    }
}
```

9.1 process.env 사용할수 있도록 플러그인 설정  
9.2 원하는 host, port 추가 (host: 0.0.0.0 입력시 본인 pc ip 할당)  
9.3 historyApiFallback: true 없으면 route 사용 불가  

---

# Typescript 추가

## 1. ts-loader, typescript 설치
- 역할 : typescript 필수 라이브러리, webpack에서 컴파일
- 방법 : npm i -D typescript @babel/preset-typescript ts-loader

## 2. @babel/preset-typescript 설치
- 역할 : babel에서 typescript를 빌드하기 위해 설치
- 방법 : npm i -D @babel/preset-typescript

## 3. webpack 수정

```
{
    ...,
    entry: './src/index.tsx',
    ...,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css']
    },
    ...,
    module: {
        rules: [
            ...,
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
            ...
        ]
    }
}
```

3.1 entry 포인트 js에서 tsx로 수정  
3.2 .ts, .tsx 확장자 추가 3.3 ts 로더 설정  

## 5. module.css 추가
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
- 방법 : npm i -D @testing-library/react @types/jest jest jest-environment-jsdom

1.1 @testing-library/react : react 컴포넌트를 사용 가능하게 함  
1.2 @types/jest: jest typescript 지원  
1.3 jest : testing 라이브러리  
1.4 jest-environment-jsdom : test에 DOM 사용 용도  

## 2. package.json Jest 설정 (jest.config.js or package.json에 설정 가능)

2.1 testEnvironment: 테스트 환경을 jsdom 형태로 변경  
2.2 moduleDirectories: 절대경로 처리를 위해 src 추가  
2.3 moduleNameMapper: jest에서 css를 코드로 인식해서 mock으로 변경  

- jest.config.json

```
{
  "testEnvironment": "jsdom",
  "moduleDirectories": [
    "node_modules",
    "src"
  ],
  "moduleNameMapper": {
    "\\.(css)$": "<rootDir>/test/styleMock.ts"
  }
}
```
