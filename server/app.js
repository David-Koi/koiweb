const express = require('express');
const cors = require('cors');

const app = express();
const path = require("path");//para poder interpretar rutas como ../
const mainRouter = require('./routes/main')
const userRouter = require('./routes/userRouter');

// const userRouter = require('./routes/user')

app.use(
    cors({
        origin:"*"
    })
);

app.use(express.json());
app.use(express.urlencoded({extended:false}));//habilita el .body en las llamada entrantes o salientes
app.use(express.static(path.join(__dirname + 'public')));//__dirname enrutado absoluto.
app.use('/', mainRouter)
app.use('/user', userRouter);

// app.use('/user', userRouter)

module.exports = app; 