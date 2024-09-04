require('dotenv').config();
const mongoose = require('mongoose'); // 몽고DB 몽구스 모듈
const jwt = require('jsonwebtoken');
// 몽고DB 접속 테스트
const uri = process.env.MONGO_URL_DATA; // 보안정보로 .env 참고
const secretkey = process.env.SECRET_KEY; // 보안정보로 .env 참고
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
  const lastdate = Schema('lastDate');
  const date = await lastdate.find({})
      .sort({ date: -1 })
      .select({ date: 1, _id: 0 })
      .limit(1);
  return date;
};

async function register(email, password, username) {
  const users = Schema('users');
  let info = '0';
  const data = await users.find({"email": email});
  const exist = data.length;
  if(exist != 0){
    info = '1'
    return info;}

  const newUsers = new users({
    email: email,
    password: password,
    username: username
  });

  await newUsers.save()
  .then(rate => {
    console.log('새로운 유저 저장 완료:', rate);
  })
  .catch(err => {
    console.error('저장 실패:', err);
    info = '회원가입에 실패하였습니다. 다시 시도하여주시기 바랍니다.'
  });

  return info;
};

async function login(email, password) {
  const users = Schema('users');
  const data = await users.find({"email": email, "password": password});
  if(data.length == 0){return '0';}
  let id = data._id;
  const token = jwt.sign({id}, secretkey, { expiresIn: '1h' });
  return token;
};

async function loginapi(email, password) {
  const users = Schema('users');
  const data = await users.find({"email": email, "password": password});
  return data._id;
};

async function freeatm() {
  const freeatm = Schema('freeatm');
  const data = await freeatm.find({"country": "일본"}).select({ allAtms: 1, _id: 0 });
  return data;
};

function Schema(data){ 
  switch(data){
    case 'users' :
      const uSchema = new mongoose.Schema({
        email: String,
        password: String,
        username: String
      });
      const users = mongoose.models.users || mongoose.model('users', uSchema);
      return users;

      case 'lastDate' :
        const lSchema = new mongoose.Schema({
          date: Number,
          kftc_deal_bas_r: String,
          cur_nm: String
        });
        const lastdate = mongoose.models.exchangerates || mongoose.model('exchangerates', lSchema);
        return lastdate;

        case 'freeatm' :
        const fSchema = new mongoose.Schema({
          SOLtravel: [String],
          allAtms: [String],
          country: String,
          toss: [String],
          travelog: [String],
          travelus: [String],
          travelwallet: [String],
          wibeetravel: [String]
          });
          const freeatm = mongoose.models.freeatm || mongoose.model('freeatm', fSchema, 'freeatm');
        return freeatm;
}
}



module.exports = { check, start, end, last, register,login, freeatm, loginapi }; // 모듈화 구문
// 몽고DB 접속 코드 끝
