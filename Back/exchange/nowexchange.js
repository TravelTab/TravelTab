require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URL_DATA; //몽고 DB api url

const exchangeRateSchema = new mongoose.Schema({// 스키마 생성
  date: Number,
  kftc_deal_bas_r: String,
  cur_nm: String
});
const exchangerates = mongoose.model('exchangerates', exchangeRateSchema);

async function nowexchange(date) {
  let check = 0;
  let exchangeReturn = {};
  await mongoose.connect(uri) //몽고DB 연결
  .then(() => {
    console.log('MongoDB 오늘의환율 연결 성공');
  })
  .catch(err => {
    console.error('MongoDB 연결 실패:', err);
  });
  
  await exchangerates.find({ "date": date })
  .sort({ cur_nm: 1 })
  .then(rates => {
      console.log(`${rates.length}개의 값을 찾았습니다.`);
      exchangeReturn = rates;
      if(rates.length == 0){
        console.log('찾는값이 없습니다. 전일자로 재탐색 합니다.');
        check = 1;
      }
  });

  await mongoose.disconnect().then(() => {
    console.log('MongoDB 연결을 성공적으로 해제하였습니다.');
  });
  if(check == 1){nowexchange(date-1);}else 
  {return exchangeReturn;}
}

module.exports = nowexchange;


