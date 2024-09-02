require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose');
const API_KEY = process.env.KEXIM_KEY; // 환율 api키 .env 참고
const uri = process.env.MONGO_URL_DATA; //몽고 DB api url

mongoose.connect(uri) //몽고DB 연결
  .then(() => {
    console.log('MongoDB 입력 전용 연결 성공');
  })
  .catch(err => {
    console.error('MongoDB 연결 실패:', err);
  });

const exchangeRateSchema = new mongoose.Schema({// 스키마 생성
  date: Number,
  kftc_deal_bas_r: String,
  cur_nm: String
});
const ExchangeRate = mongoose.model('ExchangeRate', exchangeRateSchema);

function exchange(date) { //환율 정보 받아오기
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${API_KEY}&searchdate=${date}&data=AP01`,
    headers: { }
  };

  axios.request(config)

  .then((response) => {
    response.data.forEach( exchangeData => { //나라 별 각각 구문 실행
      query(exchangeData, date); // 몽고DB에 입력 구문
    });
  })
  .catch((error) => {
    console.log(error);
  });
}

async function query(exchangeData ,date){ // 요청 날짜 및 환율 자료 콘솔 표시
  let cur = exchangeData.cur_nm;
  let bas = exchangeData.kftc_deal_bas_r;
  await mongoinsert(date, bas, cur); // 실제 DB 입력 작업 구문
  console.log("국가 : " + cur);
  console.log("오늘의 환율 : " + bas + "원");
}

async function mongoinsert(date, bas, cur) { // DB 입력 구문
  const newRate = new ExchangeRate({
    date: date,
    kftc_deal_bas_r: bas,
    cur_nm: cur
  });

  newRate.save()
    .then(rate => {
      console.log('새로운 환율 정보 저장 완료:', rate);
    })
    .catch(err => {
      console.error('저장 실패:', err);
    });
}

module.exports = exchange;

