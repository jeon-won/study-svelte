import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();

/*** express 미들웨어 설정 ***/
const corsOptions = { // CORS 설정
  origin: 'http://localhost:5173',
  credentials: true
}
app.use(cors(corsOptions)); 
app.use(express.json()); // express.json() 미들웨어를 사용해야 req.body 값 사용 가능. 안 그럼 undefined임...

/*** 대충 DB에 아래와 같은 사용자 정보가 있다고 가정... ***/
let users = [
  { name: "admin", email: "admin@a.com", password: "adminpw" }, 
  { name: "jeon", email: "jeon@a.com", password: "jeonpw" }
];

/*** 라우터 설정 ***/

// 웹 브라우저로 서버에 접속하면 Hello Express!를 띄움
app.get("/", (req, res) => {
  res.send("<h1>Hello Express!</h1>");
});

// /register 주소로 POST 요청 시 사용자 등록 수행
app.post("/register", (req, res) => {
  try {
    // 이름, 이메일, 비밀번호 꺼내오기
    let { name, email, password } = req.body;

    // 등록된 사용자 정보가 있으면 등록하지 않음
    let user = users.find(user => user.email === email);
    if(user) {
      console.log("User already exists.");
      return res.status(400).json({ msg: "User already exists." });
    }

    // 등록된 유저 정보가 없으면 새롭게 등록함
    user = { name, email, password };
    users.push(user);
    console.log(users);
    return res.status(200).json();
  }

  catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
})

/* JWT 토큰을 발급하는 라우터 */
app.post("/login", async (req, res) => {
  try {
    // 이메일, 비밀번호 꺼내오기
    let { email, password } = req.body;
    let user = users.find(user => user.email === email && user.password === password);
    
    // 등록된 사용자 정보와 일치하면 JWT 발급 후
    if(user) {
      const token = jwt.sign({ email, password, }, process.env.JWT_SECRET, {
        expiresIn: "1m",
        issuer: "jeonwon"
      });

      // JWT 전달
      return res.status(200).json({ token });
      // return res.json({
      //   code: 200,
      //   message: "토큰이 발급되었습니다.",
      //   token,
      // });
    }

    return res.status(404).json({ msg: "Not Found" });
    // return res.json({
    //   code: 404,
    //   message: "Not Found"
    // });
  } 
  catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      message: '서버 에러'
    });
  }
});


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});