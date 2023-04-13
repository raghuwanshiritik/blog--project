
const express =require('express')
const app =express()
const port =3000
const web =require('./routes/web')
const connectdb = require('./db/connectdb')
const fileUpload = require("express-fileupload");
var cloudinary = require('cloudinary');
const session = require('express-session')
const flash = require('connect-flash');
const cookieParser =require('cookie-parser')


//connection database(db)
connectdb()

//cookies
// const cookiesParser =require('cookie-parser')
// application.use(cookiesParser())

//use for get the token frombrowser
app.use(cookieParser())

//this is use to get data
app.use(express.urlencoded({extended:false}))

//for file uplode
app.use(fileUpload({useTempFiles: true}));

//for flesh Message
app.use(session({
        secret: 'secret',
        cookie: { maxAge: 60000 },
        resave: false,
        saveUninitialized: false,
        
      }));
app.use(flash());


//router load
app.use('/',web)




//template engin or (ejs setup)
app.set('view engine', 'ejs')




//public folder setup
app.use(express.static('public'))



//server create
app.listen(port, () =>{
        console.log('server start localhost:3000')
})