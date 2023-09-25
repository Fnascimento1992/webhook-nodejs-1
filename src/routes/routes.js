const express = require('express')
const router = express.Router()
const log = require('../utils/logger')
const { sendCallback } = require('../mq/conn')
const { consumeQueue } = require('../mq/consumer')
const { persisteMessage } = require('../model/callbackModel')
router.post('/callback', async(req,res)=>{
  const msg = req.body

  try {
    log.info(msg)
    await sendCallback(msg)
    res.json({e:'rota ok'})




  } catch (error) {
    log.error('Erro',error)
    res.sendStatus(500).send('Erro na aplicação')

  }

  consumeQueue(persisteMessage)

})

router.get('/itens', async (req, res) =>{
  //TODO: Criar forma de contar tudo que foi gravado
})
module.exports = router
