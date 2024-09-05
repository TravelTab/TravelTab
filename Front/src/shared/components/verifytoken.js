async function verifytoken() {

const token = localStorage.getItem('id');
  
let data = '';

await fetch('http://127.0.0.1:5500/verifytoken', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  }
}).then(response => response.text()).then(res => {data = res});

return data;
}

export default verifytoken;