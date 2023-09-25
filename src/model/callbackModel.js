const mongoose = require('mongoose')
const log = require('../utils/logger')

const callbackSchema = new mongoose.Schema({
  msg: {type: String},
  status: {type: String},
  last_update:{
    type: Date,
    default: Date.now
  }
})
const CallbackModel = mongoose.model('detailsCallback', callbackSchema);

async function persisteMessage(msg){
  try {
      const message = new CallbackModel(msg)
      await message.save()
      log.info('Callback gravado com sucesso')
  } catch (error) {
      log.error('Erro ao gravar no MongoDB:', error);
      throw error;
  }
}


module.exports = { persisteMessage }

