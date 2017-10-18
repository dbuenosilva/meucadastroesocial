const restful = require('node-restful')
const mongoose = restful.mongoose

const funcionarioSchema = new mongoose.Schema({
  cpfTrab      : { type: String, required: true, tags: 'CPF do trabalhador'  },
  nisTrab      : { type: String, required: true, tags: 'NIS' },
  nmTrab       : { type: String, required: true, tags: 'Nome do Trabalhador' },
  sexo         : { type: String, required: true, tags: 'Sexo' },
  racaCor      : { type: Char, required: true, tags: 'Raça e cor' },
  estCiv       : { type: Char, required: true, tags: 'Estado civil do trabalhador' },
  grauInstr    : { type: String, required: true, tags: 'Grau de instrução do trabalhador' },
  indPriEmpr   : { type: String, required: true, tags: 'Primeiro Emprego' },
  nmSoc        : { type: String, required: true, tags: 'Nome Social' },
/* nascimento   :  'Grupo de informações do nascimento do trabalhador'  */
    dtNascto    : { type: Date, required: true, tags: 'Data de Nascimento' },
    codMunic    : { type: String, required: true, tags: 'Código do Município' },
    uf          : { type: String, required: true, tags: 'Sigla da UF' },
    paisNascto  : { type: String, required: true, tags: 'País de Nascimento' },
    paisNac     : { type: String, required: true, tags: 'Nacionalidade' },
    nmMae       : { type: String, required: true, tags: 'Nome da mãe' },
    nmPai       : { type: String, required: true, tags: 'Nome do pai' },
/* documentos */
  /* CTPS - Informações da Carteira de Trabalho e Previdência Social */
      nrCtps          : { type: String, required: true, tags: 'CTPS' },
      serieCtps       : { type: String, required: true, tags: 'Número de série da CTPS' },
      ufCtps          : { type: String, required: true, tags: 'UF da expedição da CTPS' },
  /* RIC - Informações do Documento Nacional de Identidade - DNI (Registro de Identificação Civil - RIC) */
      nrRic           : { type: String, required: true, tags: 'N° do DIC' },
      orgaoEmissorRic : { type: String, required: true, tags: 'Órgão e UF de emissão' },
      dtExpedRic      : { type: String, required: true, tags: 'Data da expedição do documento' },
  /* RG - Informações do Registro Geral (RG) */
      nrRg            : { type: String, required: true, tags: 'RG' },
      orgaoEmissorRG  : { type: String, required: true, tags: 'Órgão e UF de emissão' },
      dtExpedRG       : { type: String, required: true, tags: 'Data da expedição do documento' },
  /* RNE - Informações do Registro Nacional de Estrangeiro */
      nrRne           : { type: String, required: true, tags: 'RNE' },
      orgaoEmissorRNE : { type: String, required: true, tags: 'Órgão e UF de emissão' },
      dtExpedRNE      : { type: String, required: true, tags: 'Data da expedição do documento' },
  /* OC - Informações do número de registro em Órgão de Classe (OC) */
      nrOc            : { type: String, required: true, tags: 'Inscr no órgão de classe' },
      orgaoEmissorOC  : { type: String, required: true, tags: 'Órgão e UF de emissão' },
      dtExpedOC       : { type: String, required: true, tags: 'Data da expedição do documento' },
      dtValidOC       : { type: String, required: true, tags: 'Data de validade do documento' },
  /* CNH - Informações da Carteira Nacional de Habilitação (CNH) */
      nrRegCnh        : { type: String, required: true, tags: 'CNH' },
      dtExped         : { type: String, required: true, tags: 'Data da expedição do documento' },
      ufCnh           : { type: String, required: true, tags: 'UF emissor CNH' },
      dtValidCNH      : { type: String, required: true, tags: 'Data de validade do documento' },
      dtPriHab        : { type: String, required: true, tags: 'Data da primeira habilitação' },
      categoriaCnh    : { type: String, required: true, tags: 'Categoria da CNH' },
  /*  */
      : { type: String, required: true, tags: '' },
      : { type: String, required: true, tags: '' },
      : { type: String, required: true, tags: '' },
      : { type: String, required: true, tags: '' },
      : { type: String, required: true, tags: '' },
      : { type: String, required: true, tags: '' },
      : { type: String, required: true, tags: '' },
      : { type: String, required: true, tags: '' },
      : { type: String, required: true, tags: '' },
      : { type: String, required: true, tags: '' },
      : { type: String, required: true, tags: '' },
      : { type: String, required: true, tags: '' },
      : { type: String, required: true, tags: '' },
      : { type: String, required: true, tags: '' },



})

module.exports = restful.model('funcionario', alunoSchema)
