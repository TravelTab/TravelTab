const jwt = require('jsonwebtoken');
const secretkey = process.env.SECRET_KEY; // 보안정보로 .env 참고

async function verifytoken(token) {
  let id = '';
jwt.verify(token, secretkey, (err, decoded) => {
  if(err !== null){id = null;} else {id = decoded.id;}
});
  return {id};
}
module.exports = { verifytoken};
