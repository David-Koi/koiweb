const express = require('express');

const app = express();
const path = require("path");//para poder interpretar rutas como ../
const indexRouter = require('./routes/index')
// const userRouter = require('./routes/user')

app.use(express.json());
app.use(express.urlencoded({extended:false}));//habilita el .body en las llamada entrantes o salientes
app.use(express.static(path.join(__dirname + 'public')));//__dirname enrutado absoluto.
app.use('/', indexRouter)
// app.use('/user', userRouter)

module.exports = app; 