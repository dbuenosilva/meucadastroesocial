const express = require('express')

module.exports = function(server) {

  // API Routes
  const router = express.Router()
  server.use('/api', router)

  // rotas da API
  const funcionarioService = require('../api/funcionario/funcionarioService.js')
  funcionarioService.register(router, '/funcionario')

  //const qualificacaoService = require('../api/funcionario/qualificacaoService.js')
  //qualificacaoService.register(router, '/qualificacao')

}
