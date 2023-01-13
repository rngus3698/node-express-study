console.log("app.js");

const __DEV__ = true;
if (__DEV__ === true) {
  // 개발환경
  console.log("개발환경");
  require('dotenv').config({path: "./common/.env.dev"});
} else {
  // 운영환경
  console.log("운영환경");
  require('dotenv').config({path: "./common/.env.prod"});
}

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const margan = require('morgan');
const consoleLog = require("./common/debugging")

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const testRouter = require('./routes/testRouter');
const eventRouter = require('./routes/event');
// const admin = require('firebase-admin');  // firebase
// const serAccount = require("./conf/firebaseAppPush.json"); // firebase
const tokenValidCheck = require("./middlewares/tokenValidCheck");

const cors = require('cors');

const app = express();

app.use(margan('default'));

/**
 * 함수명 : 설명
 * set(name, value) : 서버 설정을 위한 함수
 * get(name) : 설정된 서버 속성을 꺼내올 수 있다.
 * use([path], function, [function ...]) : 미들웨어 함수 사용
 * get([path], function) : 특정 경로로 요청 정보 처리
 */
/**
 * morgan이 지원하는 로그 포맷
 * default
 * short
 * tiny
 * dev
 */

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * 미들웨어 동작 레벨
 * 1. 애플리케이션 레벨 (app.js)
 * 2. 라우터 레벨  (/routes/~.js)
 * 단계는 애플리케이션 -> 라우터 단계
 */

/**
 * 실행 순서 중요
 * 1. app.use('/', indexRouter)       // 애플리케이션 레벨
 * 2. app.use((req, res, next) => {}) // 미들웨어
 * 3. app.use('/users', usersRouter)
 *
 * ex1) baseUrl이 '/'인 경우 미들웨어를 사용하지 않고 라우터 레벨 미들웨어로 넘어간다.
 * ex2) baseUrl이 '/users'인 경우 미들웨어를 거치고 /users 라우터 레벨 미들웨어로 넘어감
 */

/**
 * app.use() : middleware를 사용하기 위한 함수
 * app.listen() : http 서버를 생성해주는 함수, express-generator를 사용하면 http.createServer를 사용하는데 app.listen 함수로 대체할 수 있다.
 * app.locals : app에서 사용할 공통 상수를 담을 수 있다. Express.js에선 global 변수를 선언하지 않고 이 값을 사용할 수 있다.
 */

// 토큰 검증 애플리케이션 레벨 middleware
app.use(tokenValidCheck);

// firebase
// admin.initializeApp({
//   credential: admin.credential.cert(serAccount),
// })

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
app.use('/event', eventRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log("err: ", err)
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
