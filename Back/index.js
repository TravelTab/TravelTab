require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const uri = process.env.MONGGO_URL;
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