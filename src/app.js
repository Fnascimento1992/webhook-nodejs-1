const rabbitmq = require('./mq/conn')
const express = require('express')
const routes = require('./routes/routes')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(routes)

//iniciando conexão
rabbitmq()

const PORT = process.env.PORT
app.listen(PORT, ()=>{
  console.log(`App is running ${PORT}`)
})
