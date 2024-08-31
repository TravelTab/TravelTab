const axios = require('axios');
const API_KEY = process.env.KEXIM_KEY; // 환율 api키 .env 참고
let date = '20240829';
async function exchange() {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${API_KEY}&searchdate=${date}&data=AP01`,
    headers: { }
  };

  axios.request(config)

  .then((response) => {
    response.data.forEach( exchange => {
      console.log("국가 : " + exchange.cur_nm);
      console.log("오늘의 환율 : " + exchange.kftc_deal_bas_r + "원");
    });
  })
  .catch((error) => {
    console.log(error);
  });
}

module.exports = exchange;