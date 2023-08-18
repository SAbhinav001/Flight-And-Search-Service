const express = require('express')
const {ServerConfig, Logger} = require('./config') 
const apiRouters = require("./routes/index")
const app = express()


app.use('/api', apiRouters)

app.listen(ServerConfig.PORT , ()=>{
    console.log(`server started at port ${ServerConfig.PORT}`)
   
})


