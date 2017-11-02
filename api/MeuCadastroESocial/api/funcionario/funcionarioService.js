const Funcionario = require('./funcionario')

Funcionario.methods(['get','post','put','delete'])
Funcionario.updateOptions({new: true, runValidators: false})

module.exports = Funcionario
