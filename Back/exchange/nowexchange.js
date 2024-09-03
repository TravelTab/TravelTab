require('dotenv').config();
const mongoose = require('mongoose');
const moment = require('moment');

async function nowexchange(date) {
  const Schema = new mongoose.Schema({// 스키마 생성
    date: Number,
    kftc_deal_bas_r: String,
    cur_nm: String
  });
  const exchangerates = mongoose.models.exchangerates || mongoose.model('exchangerates', Schema);
  let check = 0;
  let exchangeReturn = {};
  console.log(`${date}일자로 검색합니다.`);
  await exchangerates.find({ "date": date })
    .sort({ cur_nm: 1 })
    .then(rates => {
      console.log(`${rates.length}개의 값을 찾았습니다.`);
      exchangeReturn = rates;
      if (rates.length == 0) {
        console.log('찾는값이 없습니다. 이전일자로 재탐색 합니다.');
        check = 1;
      }
    });
  if (check == 0) {
    date = moment(date, 'YYYYMMDD').subtract(1, 'days').format('YYYYMMDD');
    exchangeReturn.push(date);
    return exchangeReturn;
  }
}

async function exchangequery(date) {
  let exchangedata = await nowexchange(date);
  while (exchangedata == undefined) {
    date = moment(date, 'YYYYMMDD').subtract(1, 'days').format('YYYYMMDD');
    exchangedata = await nowexchange(date);
  }
  return exchangedata;
}

module.exports = exchangequery;



