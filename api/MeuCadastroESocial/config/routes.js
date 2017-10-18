const express = require('express')

module.exports = function(server) {

  // API Routes
  const router = express.Router()
  server.use('/api', router)

  // rotas da API
  const alunoService = require('../api/aluno/funcionarioService.js')
  alunoService.register(router, '/funcionario')

}
