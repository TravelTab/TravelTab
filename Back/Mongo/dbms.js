const mongoose = require('mongoose'); // 몽고DB 몽구스 모듈
// 몽고DB 접속 테스트
const uri = process.env.MONGO_URL; // 보안정보로 .env 참고
async function mongoRun() {
  try {
    await mongoose.connect(uri);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(" MongoDB와 연결상태가 정상입니다.");
  } finally {
    await mongoose.disconnect();
  }
}

module.exports = mongoRun; // 모듈화 구문
// 몽고DB 접속 코드 끝