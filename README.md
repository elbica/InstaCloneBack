# InstaCloneBack

### 2021 / 08 / 24

> npx prisma migrate dev

migrate를 dev로 생성한 후, 자동으로 prisma client를 얻게 된다.
migrate? : 데이터베이스의 형태 변형

> nodemon --exec ts-node src/server.ts

package.json에 설치된 nodemon은 터미널로 직접 실행할 수 없다.
script를 써서 npm run 으로 접근 가능하다.

> npx prisma studio

데이터 베이스를 위한 브라우저
<br>

### 2021 / 08 / 25

- tsconfig 파일에 allowSyntheticDefaultImports를 true로 지정해야 <br> import시 default 값을 가져올 수 있다.

```sql
\l : 데이터 베이스 목록 출력
\c : 데이터 베이스 변경
\d : 테이블 목록 출력
\d table : 특정 table의 column 목록 출력
```

- 비밀번호 암호화 : bcrypt library 사용

### 2021 / 08 / 28

- jsonwebtoken : 유저의 아이디를 토큰 정보에 넣고, 서버에 접근할 때마다 jwt를 같이 보낸다.
  - jwt가 서버에서 발행한 것인지 확인한다.
  - 다른 사람이 변경하지 않았다는 것을 확인한다.

### 2021 / 09 / 02

- prisma는 undefined 값이 들어와도 데이터베이스로 보내지 않는다.
- jwt verify : secret key로 해독된 token을 리턴. <br> token이 맞으면 token을 리턴한다.
- 다른 사람이 token을 변경하지 않고, 우리가 만들었다는 것을 확인한다
  <br>
- **http Headers** : request, response의 한 부분이고 어떤 값이든 넣을 수 있다. 헤더는 모든 request에 자동으로 들어간다.
- token은 http header에 넣는다. authorization, jwt-token등 이름은 상관없다.
  <br  >
- graphql의 4가지 인자 : root, args, context, info
- context에 모든 resolver에서 접근가능한 정보를 넣을 수 있다. 객체 또는 req인자를 가지는 함수
