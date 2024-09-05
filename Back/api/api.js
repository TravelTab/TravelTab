const dbms = require('../Mongo/dbms'); // 몽고DB 실행 구문 모듈
const mongoose = require('mongoose'); // 몽고DB 몽구스 모듈
const jwt = require('jsonwebtoken');
const uri = process.env.MONGO_URL_API; // 보안정보로 .env 참고
const secretkey = process.env.SECRET_KEY; // 보안정보로 .env 참고

async function start() {
  await mongoose.connect(uri) //몽고DB 연결
    .then(() => {
      console.log('API용 DB에 성공적으로 연결하였습니다.');
    });
}

async function end() {
  await mongoose.disconnect() //몽고DB 연결해제
    .then(() => {
      console.log('API용 DB와의 연결을 해제하였습니다.');
    });
};

async function newtoken(email, password) {
  await dbms.start();
  let userid = await dbms.loginapi(email, password);
  await dbms.end();
  
  return token;
};

async function verifytoken(token) {
jwt.verify(token, secretkey, (err, decoded) => {
  if (err) {
    console.log('토큰이 유효하지 않습니다.');
  } else {
    console.log('토큰 데이터:', decoded);
  }
});
}
module.exports = { newtoken , verifytoken};

// const express = require('express');
// const dbms = require('../Mongo/dbms'); // MongoDB 실행 구문 모듈
// const mongoose = require('mongoose'); // 몽고DB 몽구스 모듈
// const jwt = require('jsonwebtoken');
// const { freeatm, usersinfo } = require('../Mongo/dbms'); // dbms.js에서 모델 가져오기
// const secretkey = process.env.SECRET_KEY; // 보안정보로 .env 참고
// const uri = process.env.MONGO_URL_API; // 보안정보로 .env 참고
// const router = express.Router();

// // MongoDB 연결 함수
// async function start() {
//   await mongoose.connect(uri) //몽고DB 연결
//     .then(() => {
//       console.log('API용 DB에 성공적으로 연결하였습니다.');
//     });
// }

// async function end() {
//   await mongoose.disconnect() //몽고DB 연결해제
//     .then(() => {
//       console.log('API용 DB와의 연결을 해제하였습니다.');
//     });
// }

// // JWT 토큰 생성 함수
// async function newtoken(email, password) {
//   await dbms.start();
//   let userid = await dbms.loginapi(email, password);
//   await dbms.end();
  
//   const token = jwt.sign({ id: userid }, secretkey, { expiresIn: '1h' });
//   return token;
// }

// // JWT 토큰 검증 함수
// async function verifytoken(token) {
//   jwt.verify(token, secretkey, (err, decoded) => {
//     if (err) {
//       console.log('토큰이 유효하지 않습니다.');
//     } else {
//       console.log('토큰 데이터:', decoded);
//     }
//   });
// }

// // 사용자가 현재 위치한 국가를 기반으로 사용할 수 있는 ATM 목록 가져오기
// router.get('/api/getAtms/:country', async (req, res) => {
//   try {
//     const country = req.params.country;
//     console.log(`Requested country: ${country}`); // 요청된 국가 출력

//     // MongoDB에서 해당 국가 데이터를 대소문자 구분 없이 검색
//     const atmData = await freeatm.findOne({ country: country });

//     if (atmData && atmData.allAtms) {
//       console.log('ATM data found:', atmData.allAtms); // ATM 데이터 출력
//       res.json(atmData.allAtms); // 'allAtms' 필드의 데이터를 반환
//     } else {
//       console.log('No allAtms field in ATM data');
//       res.status(404).json({ message: '해당 국가에 대한 ATM 정보가 없습니다.' });
//     }
//   } catch (error) {
//     console.error('ATM 데이터를 가져오는 중 오류 발생:', error);
//     res.status(500).json({ error: '서버 오류가 발생했습니다. 나중에 다시 시도해주세요.' });
//   }
// });

// // 사용자가 현재 위치한 국가와 소유한 여행 카드를 기반으로 수수료가 무료인 ATM 목록 가져오기
// router.get('/api/getAtmByUser/:userId/:country', async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const country = req.params.country;
//     console.log(`Requested user ID: ${userId}, country: ${country}`); // 요청된 사용자 ID와 국가 출력

//     // 사용자 정보를 가져옴
//     const user = await usersinfo.findById(userId);
//     if (!user) {
//       console.log('사용자를 찾을 수 없습니다.');
//       return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
//     }

//     const cardArray = user.card; // 사용자의 card 배열 가져옴
//     console.log(`User card array: ${cardArray}`);

//     // 국가에 해당하는 freeatm 데이터를 가져옴
//     const atmData = await freeatm.findOne({ country: country });
//     if (!atmData) {
//       console.log('해당 국가의 ATM 정보를 찾을 수 없습니다.');
//       return res.status(404).json({ message: '해당 국가의 ATM 정보를 찾을 수 없습니다.' });
//     }

//     // Set을 사용해 중복을 제거하며 데이터를 저장 (JSON 문자열화로 중복 제거)
//     const mergedAtmData = new Set();

//     // card 배열의 값과 일치하는 필드 데이터들을 Set에 추가 (JSON.stringify 사용)
//     cardArray.forEach(card => {
//       if (atmData[card]) {
//         atmData[card].forEach(atm => mergedAtmData.add(JSON.stringify(atm))); // JSON 문자열화 후 Set에 추가
//       }
//     });

//     // 문자열화된 데이터를 다시 파싱하여 배열로 변환
//     const myCardAtmData = Array.from(mergedAtmData).map(atm => JSON.parse(atm));
//     console.log('Unique ATM data:', myCardAtmData);

//     res.json(myCardAtmData); // 중복을 제거한 배열 반환
//   } catch (error) {
//     console.error('ATM 데이터를 가져오는 중 오류 발생:', error);
//     res.status(500).json({ error: '서버 오류가 발생했습니다. 나중에 다시 시도해주세요.' });
//   }
// });

// // 모듈 내보내기
// module.exports = { newtoken, verifytoken, router };
