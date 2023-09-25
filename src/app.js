const rabbitmq = require('./mq/conn')
const {consumerQueueConn} = require('./mq/consumer')
const mongo = require('../src/db/coon_db')
const express = require('express')
const routes = require('./routes/routes')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(routes)

//iniciando conexões
rabbitmq.connect()
mongo.connectdb()
consumerQueueConn()

const PORT = process.env.PORT
app.listen(PORT, ()=>{
  console.log(`Webhook rodando na porta: ${PORT}`)
})
