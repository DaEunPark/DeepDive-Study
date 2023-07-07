const express = require('express')
const app = express()
const port = 3000

// view 세팅
app.set('views', './views')
app.set('view engine', 'ejs')
// express에서 HTML을 사용하려면 ejs로 렌더링해야 한다.
app.engine('html', require('ejs').renderFile)

// static 설정
// 정적 파일 (html, css, js....) 부르기 위한 경로
app.use(express.static('public'))

// json encoding?
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// / [get]
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// view 테스트
// home.html 실행
// /home [get]
app.get('/home', (req, res) => {
    res.render('home.html')
})

// express 서버 실행했을 때 테스트
// /loadhtml [get]
app.get('/loadhtml', (req, res) => {
    res.render('loadhtml.html')
})

// /loadjson [get]
app.get('/loadjson', (req, res) => {
    res.render('loadjson.html')
})

// /loadjsonp [get]
app.get('/loadjsonp', (req, res) => {
    res.render('loadjsonp.html')
})

// /loadhtmljq [get]
app.get('/loadhtmljq', (req, res) => {
    res.render('loadhtmljq.html')
})

// /loadjsonjq [get]
app.get('/loadjsonjq', (req, res) => {
    res.render('loadjsonjq.html')
})

// /loadjsonpjq [get]
app.get('/loadjsonpjq', (req, res) => {
    res.render('loadjsonpjq.html')
})

// /loadhtmljget [get]
app.get('/loadhtmlget', (req, res) => {
    res.render('loadhtmlget.html')
})

// /loadjsonget [get]
app.get('/loadjsonget', (req, res) => {
    res.render('loadjsonget.html')
})

// /loadhtmlload [get]
app.get('/loadhtmlload', (req, res) => {
    res.render('loadhtmlload.html')
})

// 서버 실행
app.listen(port, () => {
    console.log('server start')
})