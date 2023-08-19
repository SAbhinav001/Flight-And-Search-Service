const express = require('express')
const {ServerConfig, Logger} = require('./config') 
const ApiRoutes = require("./routes/index")
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api', ApiRoutes)

app.listen(ServerConfig.PORT , ()=>{
    console.log(`server started at port ${ServerConfig.PORT}`)
   
})


