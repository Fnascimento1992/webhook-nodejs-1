const mongoose = require('mongoose')
const log = require('../utils/logger')
require('dotenv').config()

async function connectdb(){
  try {
    await mongoose.connect(process.env.MONGO_STRING_CONECT,{useUnifiedTopology: true,});
    log.info('conexão--mongo');
  } catch (error) {
    log.error('Erro ao conectar ao MongoDB:', error);
  }


}

module.exports = {connectdb}


