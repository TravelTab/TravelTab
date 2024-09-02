require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoRun = require('./Mongo/dbms'); // 몽고DB 실행 구문 모듈
const exchange = require('./Mongo/exchange'); // 몽고DB 실행 구문 모듈

const app = express();

app.use(express.static(path.join(__dirname, '../Front/build'))); //경로 변환
app.use(express.json());
//서버 시작 구문 시작
const hostname = '127.0.0.1';
const port = 5500;

app.listen(port, hostname, () => {
  console.log(`서버가 시작되었습니다. http://${hostname}:${port}/`);
});
//서버 시작 구문 끝

mongoRun().catch(console.dir); //몽고 DB 상태확인

//index 페이지 부분 시작
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  console.log('index.html 페이지를 보내주었습니다!');
});
//index 페이지 부분 끝


app.get('/exchange.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../Back/exchange.html'));
  console.log('index.html 페이지를 보내주었습니다!');
});

app.post('/execute', (req, res) => {
  console.log('서버에서 특정 구문을 실행합니다.');
  let date = req.body.date;
  exchange(date); //환율가져오기
  let text = "서버에서 구문이 실행되었습니다."
  res.send(text);
});
//exchange 페이지 부분 끝
