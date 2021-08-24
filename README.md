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
-
