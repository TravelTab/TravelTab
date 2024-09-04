const express = require('express');
const moment = require('moment');
const path = require('path');
const dbms = require('./Mongo/dbms'); // 몽고DB 실행 구문 모듈
const exchange = require('./exchange/exchange'); // 몽고DB 실행 구문 모듈
const exchangequery = require('./exchange/nowexchange');
const exchangeinfo = require('./exchange/exchangeinfo');
const api = require('./api/api');


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

dbms.check().catch(console.dir); //몽고 DB 상태확인

app.get('/lastdate', async (req, res) => {
  await dbms.start();
  let lastdate = await dbms.last();
  res.send(lastdate);
  console.log('마지막 환율 일자를 보내주었습니다.');
  await dbms.end();
});

//index 페이지 부분 시작
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  console.log('index.html 페이지를 보내주었습니다!');
});
//index 페이지 부분 끝


//firstpage 페이지 부분 시작
app.get('/firstpage.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', '../firstpage.html'));
  console.log('firstpage 페이지를 보내주었습니다!');
});

app.post('/register', async (req, res) => {
  await dbms.start();//몽고DB 연결
  let data = req.body;
  //console.log(data);
  let register = await dbms.register(data.email, data.password, data.username);
  res.send(register);
  await dbms.end();//몽고DB 연결해제
});
//firstpage 페이지 부분 끝

//firstpage 페이지 부분 시작
app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', '../login.html'));
  console.log('firstpage 페이지를 보내주었습니다!');
});

app.post('/login', async (req, res) => {
  await dbms.start();//몽고DB 연결
  let data = req.body;
  let token = await dbms.login(data.email, data.password);
  res.send(token);
  await dbms.end();//몽고DB 연결해제
});
//firstpage 페이지 부분 끝

//exchange 페이지 부분 시작
app.get('/exchange.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../Back/exchange.html'));
  console.log('exchange.html 페이지를 보내주었습니다!');
});

app.post('/execute', async (req, res) => {
  await dbms.start();//몽고DB 연결
  //console.log('환율 정보를 가져옵니다.');
  //let date = req.body.date;
  //let data = await exchange.exchange(date); //환율가져오기
  //await exchange.repeatquery(data, date);
  //let text = "환율 정보를 가져오는데 성공했습니다."
  //res.send(text);
  let freeatm = await dbms.freeatm();
  console.log(freeatm);
  await dbms.end();//몽고DB 연결해제
});
//exchange 페이지 부분 끝

//nowexchange 페이지 부분 시작
app.get('/ExchangeRate.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../Back/ExchangeRate.html'));
  console.log('ExchangeRate.html 페이지를 보내주었습니다!');
});

app.get('/nowexchange', async (req, res) => {
  console.log('서버에서 환율데이터를 조회합니다.');
  let nowdate = moment().format('YYYYMMDD');
  try{
    await dbms.start();//몽고DB 연결
    let exchangedata = await exchangequery(nowdate);
    let yesterdaydate = exchangedata.pop();
    let yesterdaydata = await exchangequery(yesterdaydate);
    yesterdaydata.pop();
    exchangedata.push(yesterdaydata);
    let info = await exchangeinfo();
    exchangedata.push(info);
    console.log(`${exchangedata.length}개의 값을 송신`);
    res.send(exchangedata);

    await dbms.end();//몽고DB 연결해제
  } catch(error){console.error(error);}
});
//nowexchange 페이지 부분 끝

//travel 페이지 부분 시작
app.get('/travel.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../Back/travel.html'));
  console.log('travel.html 페이지를 보내주었습니다!');
});

app.get('/mytravel', async (req, res) => {
  console.log('서버에서 각 나라별 오늘의 환율을 조회합니다.');
  let nowdate = moment().format('YYYYMMDD');
  try{
    await dbms.start();//몽고DB 연결

    let exchangedata = await exchangequery(nowdate);
    exchangedata.pop();
    let exchangeinfos = await exchangeinfo();
    exchangedata.push(exchangeinfos);
    console.log(`${exchangedata.length}개의 값을 송신`);
    res.send(exchangedata);

    await dbms.end();//몽고DB 연결해제
  } catch(error){console.error(error);}
});

//travel 페이지 부분 끝