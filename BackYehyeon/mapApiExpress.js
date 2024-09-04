const express = require('express');
const mongoose = require('mongoose');
const app = express();

// db 연결
const uri = "mongodb+srv://JoGyoungJun:whrudwns!048576@traveltabcluster.k0z8d7d.mongodb.net/Data?retryWrites=true&w=majority"

mongoose.connect(uri)
    .then(() => {
        console.log('MongoDB Atlas 연결 성공');
    })
    .catch(err => {
        console.error('MongoDB Atlas 연결 실패:', err);
    });

//freeatm 스키마 정의
const atmSchema = new mongoose.Schema({
    country: String,
    allAtms: [String],
    travellog: [String],
    toss: [String],
    travelus: [String],
    SOLtravel: [String],
    wibeetravel: [String],
    travelog: [String]
});

//usersinfo 스키마 정의
const userInfoSchema = new mongoose.Schema({
    id: String,
    password: String,
    email: String,
    name: String,
    phonenumber: String,
    travel: [],
    card: [String] // 카드 배열
});

const freeatm = mongoose.models.freeatm || mongoose.model('freeatm', atmSchema, 'freeatm');
const usersinfo = mongoose.models.usersinfo || mongoose.model('usersinfo', userInfoSchema, 'usersinfo');

// const FreeAtm = mongoose.model('freeatm', atmSchema, 'freeatm');

app.use(express.static(__dirname + '/public'));

app.listen(8080, () => {
    console.log('서버 실행 중');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/atmmap', (req, res) => {
    res.render('mapApi.ejs');
});

// 사용자가 현재 위치한 국가를 기반으로
// 사용할 수 있는 atm기 목록 가져오기
app.get('/getAtms/:country', async (req, res) => {
    try {
        const country = req.params.country;
        console.log(`Requested country: ${country}`); // 요청된 국가 출력

        // MongoDB에서 해당 국가 데이터를 대소문자 구분 없이 검색
        const atmData = await freeatm.findOne({country: country}); 

        if (atmData) {
            console.log('ATM Data:', atmData); // ATM 데이터가 존재하는지 확인
            if (atmData.allAtms) {
                console.log('ATM data found:', atmData.allAtms); // ATM 데이터 출력
                res.json(atmData.allAtms); // 'allAtms' 필드의 데이터를 반환
            } else {
                console.log('No allAtms field in ATM data');
                res.status(404).json({ message: '해당 국가에 대한 ATM 정보가 없습니다.' });
            }
        } else {
            console.log('ATM data not found for country:', country);
            res.status(404).json({ message: '해당 국가에 대한 ATM 정보가 없습니다.' });
        }
    } catch (error) {
        console.error('ATM 데이터를 가져오는 중 오류 발생:', error);
        res.status(500).json({ error: '서버 오류가 발생했습니다. 나중에 다시 시도해주세요.' });
    }
});

// 사용자가 현재 위치한 국가와
// 사용자가 소유하고 있는 여행 카드를 기반으로
// 수수료가 무료인 atm기 목록 가져오기
app.get('/getAtmByUser/:userId/:country', async (req, res) => {
    try {
        const userId = req.params.userId;
        const country = req.params.country;
        console.log(`Requested user ID: ${userId}, country: ${country}`); // 요청된 사용자 ID와 국가 출력

        // 사용자 정보를 가져옴
        const user = await usersinfo.findById(userId);
        if (!user) {
            console.log('사용자를 찾을 수 없습니다.');
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }

        const cardArray = user.card; // 사용자의 card 배열 가져옴
        console.log(`User card array: ${cardArray}`);

        // 국가에 해당하는 freeatm 데이터를 가져옴
        const atmData = await freeatm.findOne({ country: country });
        if (!atmData) {
            console.log('해당 국가의 ATM 정보를 찾을 수 없습니다.');
            return res.status(404).json({ message: '해당 국가의 ATM 정보를 찾을 수 없습니다.' });
        }

        // Set을 사용해 중복을 제거하며 데이터를 저장 (JSON 문자열화로 중복 제거)
        const mergedAtmData = new Set();

        // card 배열의 값과 일치하는 필드 데이터들을 Set에 추가 (JSON.stringify 사용)
        cardArray.forEach(card => {
            if (atmData[card]) {
                atmData[card].forEach(atm => mergedAtmData.add(JSON.stringify(atm))); // JSON 문자열화 후 Set에 추가
            }
        });

        // 문자열화된 데이터를 다시 파싱하여 배열로 변환
        const myCardAtmData = Array.from(mergedAtmData).map(atm => JSON.parse(atm));
        console.log('Unique ATM data:', myCardAtmData);

        res.json(myCardAtmData); // 중복을 제거한 배열 반환
    } catch (error) {
        console.error('ATM 데이터를 가져오는 중 오류 발생:', error);
        res.status(500).json({ error: '서버 오류가 발생했습니다. 나중에 다시 시도해주세요.' });
    }
});