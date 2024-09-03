require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose');
const API_KEY = process.env.KEXIM_KEY; // 환율 api키 .env 참고

async function exchange(date) { //환율 정보 받아오기
  let data = [];
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${API_KEY}&searchdate=${date}&data=AP01`,
    headers: {}
  };
  await axios.request(config)
    .then((response) => {
      data = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
}

async function repeatquery(data, date) { 
  for (const exchangeData of data) {
    await query(exchangeData, date);
  }
}

async function query(exchangeData, date) { // 요청 날짜 및 환율 자료 콘솔 표시
  let cur = exchangeData.cur_nm;
  let bas = exchangeData.kftc_deal_bas_r;

  const Schema = new mongoose.Schema({
    date: Number,
    kftc_deal_bas_r: String,
    cur_nm: String
  });
  const exchangerates = mongoose.models.exchangerates || mongoose.model('exchangerates', Schema);

  const newRate = new exchangerates({
    date: date,
    kftc_deal_bas_r: bas,
    cur_nm: cur
  });

  await newRate.save()
    .then(rate => {
      console.log('새로운 환율 정보 저장 완료:', rate);
    })
    .catch(err => {
      console.error('저장 실패:', err);
    });
}

module.exports = {exchange, repeatquery};

