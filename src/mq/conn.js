const amqp = require('amqplib');
require('dotenv').config
const log = require('../utils/logger')

let channel
let connected = null

async function connect(message) {
  try {
    const connection = await amqp.connect(process.env.MQ_STRING_CONECT)
    channel = await connection.createChannel()
    await channel.assertExchange('callback', 'topic', { durable: true })
    await channel.assertQueue(process.env.MQ_QUEUE)
    await channel.bindQueue(process.env.MQ_QUEUE, 'callback', process.env.MQ_RKEY)
    log.info('sender--rabbitmq')
  } catch (error) {
    log.error('Erro de conexão', error)
    setTimeout(connect,5000)
  }

}

async function sendCallback(message) {
  await channel.publish('callback', process.env.MQ_RKEY, Buffer.from(JSON.stringify(message)))
}



module.exports = { connect, sendCallback }

