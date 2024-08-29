const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/index.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../Front/index.html'));
  console.log('index.html 페이지를 보내주었습니다!-cors');
});

const hostname = '127.0.0.1';
const port = 5500;

app.listen(port, hostname, () => {
  console.log(`서버가 시작되었습니다. http://${hostname}:${port}/`);
});