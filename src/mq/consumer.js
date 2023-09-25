const amqp = require('amqplib');
require('dotenv').config
const log = require('../utils/logger')

let channel

async function consumerQueueConn() {

  try {
    const connectionConsume = await amqp.connect(process.env.MQ_STRING_CONECT)
    channel = await connectionConsume.createChannel()
    await channel.assertQueue(process.env.MQ_QUEUE, { durable: true })
    log.info('Consume--');
  } catch (error) {
    log.error('Erro na conexão com o RabbitMQ:', error.message);
    throw error;
  }
}

async function consumeQueue(callback) {
  channel.consume(process.env.MQ_QUEUE, async (msg) => {

    const mensagem = JSON.parse(msg.content.toString());
    await callback(mensagem);
    console.log(`Mensagem processada: ${JSON.stringify(mensagem)}`);
    channel.ack(msg);

  })
}




module.exports = { consumerQueueConn, consumeQueue }
