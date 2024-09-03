const mongoose = require('mongoose');

async function exchangeinfo() {
  const Schema = new mongoose.Schema({
    cur_unit: String,
    cur_nm: String
  });
  const exchangeinfos = mongoose.models.exchangeinfos || mongoose.model('exchangeinfos', Schema);
  let data = await exchangeinfos.find().sort({ cur_nm: 1 });
  console.log(`나라정보 ${data.length}개의 값을 찾았습니다.`);
  return data;
}

module.exports = exchangeinfo;



