const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

const { MongoClient } = require('mongodb')

let db;
const url = 'mongodb+srv://JoGyoungJun:whrudwns!048576@traveltabcluster.k0z8d7d.mongodb.net/?retryWrites=true&w=majority&appName=TravelTabCluster';
new MongoClient(url).connect().then((client)=>{
    console.log('DB연결성공')
    db = client.db('Data')

    app.listen(8080, () => {
        console.log('http://localhost:8080에서 서버 실행 중')
    })

}).catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/cardinfo', async (req, res) => {
    let cardinfo = await db.collection('CardInfo').find().toArray()
    // res.send(cardinfo)
    res.render('connMongo.ejs', { 카드목록 : cardinfo })
    console.log(cardinfo)
}) 