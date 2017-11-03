const Qualificacao = require('./qualificacao')

Qualificacao.post('/qualificacao/', Qualificacao.validaNaApiJava);

module.exports = Qualificacao
