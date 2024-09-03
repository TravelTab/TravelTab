require('dotenv').config();
const mongoose = require('mongoose'); // 몽고DB 몽구스 모듈
// 몽고DB 접속 테스트
const uri = process.env.MONGO_URL_DATA; // 보안정보로 .env 참고
async function check() {
  await mongoose.connect(uri);
  await mongoose.connection.db.admin().command({ ping: 1 });
  console.log(" MongoDB와 연결상태가 정상입니다.");
  await mongoose.disconnect();
}
async function start() {
  await mongoose.connect(uri) //몽고DB 연결
    .then(() => {
      console.log('MongoDB와 성공적으로 연결하였습니다.');
    });
}

async function end() {
  await mongoose.disconnect() //몽고DB 연결해제
    .then(() => {
      console.log('MongoDB 연결을 성공적으로 해제하였습니다.');
    });
};

async function last() {
  const Schema = new mongoose.Schema({
    date: Number,
    kftc_deal_bas_r: String,
    cur_nm: String
  });
  const lastdate = mongoose.models.exchangerates || mongoose.model('exchangerates', Schema);

  const date = await lastdate.find({})
      .sort({ date: -1 })
      .select({ date: 1, _id: 0 })
      .limit(1);
  return date;
};


module.exports = { check, start, end, last }; // 모듈화 구문
// 몽고DB 접속 코드 끝