var express = require('express')
var app         = express()

var userRouter  = require('./app/modules/user/userRoute')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
var cors = require('cors')
app.use(cors())
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 
  }
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server is running  ${port}`)
})

app.use('/api/user',userRouter)