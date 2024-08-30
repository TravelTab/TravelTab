require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoRun = require('./Mongo/dbms'); // 몽고DB 실행 구문 모듈

const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // 경로 변환

//서버 시작 구문 시작
const hostname = '127.0.0.1';
const port = 5500;

app.listen(port, hostname, () => {
  console.log(`서버가 시작되었습니다. http://${hostname}:${port}/`);
});
//서버 시작 구문 끝

mongoRun().catch(console.dir); // 몽고 DB 접속 구문

// index 페이지 부분 시작 
app.get('/index.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../Front/public/index.html'));
  console.log('index.html 페이지를 보내주었습니다!-cors');
});
// index 페이지 부분 끝 
