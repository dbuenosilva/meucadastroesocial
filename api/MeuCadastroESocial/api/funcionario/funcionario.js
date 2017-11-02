const restful = require('node-restful')
const mongoose = restful.mongoose

const funcionarioSchema = new mongoose.Schema({
  nmTrab         : { type: String, required: false, tags: 'Nome do Trabalhador' },
  sexo           : { type: String, required: false, tags: 'Sexo' },
  racaCor        : { type: String, required: false, tags: 'Raça e cor' },
  estCiv         : { type: String, required: false, tags: 'Estado civil do trabalhador' },
  grauInstr      : { type: String, required: false, tags: 'Grau de instrução do trabalhador' },
  nmSoc          : { type: String, required: false, tags: 'Nome Social' },
  dtNascto       : { type: Date, required: false, tags: 'Data de Nascimento' },
  codMunicNascto : { type: String, required: false, tags: 'Código do Município' },
  ufNascto       : { type: String, required: false, tags: 'Sigla da UF' },
  paisNascto     : { type: String, required: false, tags: 'País de Nascimento' },
  paisNac        : { type: String, required: false, tags: 'Nacionalidade' },
  nmMae          : { type: String, required: false, tags: 'Nome da mãe' },
  nmPai          : { type: String, required: false, tags: 'Nome do pai' },
  trabAposent    : { type: String, required: false, tags: 'Aponsentado'  }

})

module.exports = restful.model('funcionario', funcionarioSchema)
