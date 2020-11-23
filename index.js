const { request } = require('express')
const express = require('express')
const app = express()
const port = 5000




const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://junstin:junstin@boilerplate.boxa1.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


// 루트 디렉터리에 오면 hello world 출력
app.get('/', (req, res)=> res.send('Hello World!')) 

// 5000포트에서 출력.
app.listen(port, ()=> console.log('Example app listening on port '+ port))