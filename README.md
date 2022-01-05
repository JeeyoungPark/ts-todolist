## 타입스크립트로 todolist 만들기

### 개발 환경
ts + craco + emotion + storybook

[uuid 라이브러리](https://www.npmjs.com/package/uuid)로 고유한 아이디 생성<br>
uuid 라이브러리는 순수 자바스크립트로만 만들어졌기 때문에 타입이 없음. 따라서 타입을 선언해놓은 오픈소스 사용
```shell
npm i uuid
npm i -D @types/uuid
```