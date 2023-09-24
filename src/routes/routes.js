const express = require('express')
const router = express.Router()
const log = require('../utils/logger')
const {sendCallback} = require('../mq/conn')

router.post('/callback', async(req,res)=>{
  const msg = req.body

  log.info(msg)

  await sendCallback({msg})
  res.json({e:'rota ok'})
})

router.get('/itens', async (req, res) =>{
  //TODO: Criar forma de contar tudo que foi gravado
})
module.exports = router
