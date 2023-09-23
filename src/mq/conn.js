const amqp = require('amqplib');
require('dotenv').config

function connect(){

  amqp.connect(process.env.MQ_STRING_CONECT, function(err, connection){
    if(err){
      throw new Error('Erro:' ,err)
    }

  })
}

module.exports =  connect

