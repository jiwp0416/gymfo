const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 제공 설정 (CSS, JS, 이미지 등)
app.use(express.static(path.join(__dirname, 'public')));

// 라우트 설정
app.get('/', (req, res) => {
    res.render('index');  // index.ejs 렌더링
});

// 서버 시작
app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});

app.get('/index', (req, res) => {
    res.render('index');
});
app.get('/chest', (req, res) => {
    res.render('chest');
});
app.get('/back', (req, res) => {
    res.render('back');
});
app.get('/abs', (req, res) => {
    res.render('abs');
});
app.get('/arm', (req, res) => {
    res.render('arm');
});
app.get('/shoulder', (req, res) => {
    res.render('shoulder');
});
app.get('/quad', (req, res) => {
    res.render('quad');
});
app.get('/hamstring', (req, res) => {
    res.render('hamstring');
});
app.get('/gluteus', (req, res) => {
    res.render('gluteus');
});
app.get('/calf', (req, res) => {
    res.render('calf');
});
app.get('/nutrient', (req, res) => {
    res.render('nutrient');
});
app.get('/weight', (req, res) => {
    res.render('weight');
});
app.get('/food', (req, res) => {
    res.render('food');
});
app.get('/stretching', (req, res) => {
    res.render('stretching');
});
app.get('/method', (req, res) => {
    res.render('method');
});
app.get('/cardio', (req, res) => {
    res.render('cardio');
});
app.get('/rest', (req, res) => {
    res.render('rest');
});
app.get('/notion', (req, res) => {
    res.render('notion');
});
app.get('/body', (req, res) => {
    res.render('body');
});
app.get('/tips', (req, res) => {
    res.render('tips');
});