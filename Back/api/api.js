const dbms = require('../Mongo/dbms'); // 몽고DB 실행 구문 모듈
const mongoose = require('mongoose'); // 몽고DB 몽구스 모듈
const jwt = require('jsonwebtoken');
const uri = process.env.MONGO_URL_API; // 보안정보로 .env 참고
const secretkey = process.env.SECRET_KEY; // 보안정보로 .env 참고

async function start() {
  await mongoose.connect(uri) //몽고DB 연결
    .then(() => {
      console.log('API용 DB에 성공적으로 연결하였습니다.');
    });
}

async function end() {
  await mongoose.disconnect() //몽고DB 연결해제
    .then(() => {
      console.log('API용 DB와의 연결을 해제하였습니다.');
    });
};

async function newtoken(email, password) {
  await dbms.start();
  let userid = await dbms.loginapi(email, password);
  await dbms.end();
  
  return token;
};

async function verifytoken(token) {
  let id = '';
jwt.verify(token, secretkey, (err, decoded) => {
  if(err !== null){id = null;} else {id = decoded.id;}
});
  return {id};
}

module.exports = { newtoken , verifytoken};
