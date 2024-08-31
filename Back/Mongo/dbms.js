const mongoose = require('mongoose'); // 몽고DB 몽구스 모듈
// 몽고DB 접속 코드 시작
const uri = process.env.MONGO_URL; // 보안정보로 .env 참고
const clientOptions = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true
  }};
async function mongoRun() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(" MongoDB에 성공적으로 연결하였습니다.!");
  } finally {
    await mongoose.disconnect();
  }
}

module.exports = mongoRun; // 모듈화 구문
// 몽고DB 접속 코드 끝