const express = require('express')
const router = express.Router()
const log = require('../utils/logger')

router.post('/callback', async(req,res)=>{
  const msg = req.body

  //console.log(msg)
  log.info(msg)

  res.json({e:'rota ok'})
})

router.get('/itens', async (req, res) =>{
  //TODO: Criar forma de contar tudo que foi gravado
})
module.exports = router
