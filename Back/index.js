require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose'); // 몽고DB 모듈

const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // 경로 변환

//서버 시작 구문 시작
const hostname = '127.0.0.1';
const port = 5500;

app.listen(port, hostname, () => {
  console.log(`서버가 시작되었습니다. http://${hostname}:${port}/`);
});
//서버 시작 구문 끝

// 몽고DB 접속 코드 시작
const uri = process.env.MONGGO_URL; // 보안정보로 .env 참고
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(" MongoDB에 성공적으로 연결하였습니다.!");
  } finally {
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
// 몽고DB 접속 코드 끝

// index 페이지 부분 시작 
app.get('/index.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../Front/index.html'));
  console.log('index.html 페이지를 보내주었습니다!-cors');
});
// index 페이지 부분 끝 
