var request = require('request');
var Funcionario = require('./funcionario')

exports.qualificacao = function(req, res) {
  request.post(
    'http://localhost:8080/pessoas',
    req.body),
    function (error, response, body) {
        if ( ! error && response.statusCode == 200) {

            console.log('Resposta da api Java: ' + body);
            console.log('Gravando dados no MongoDb ' + req.body);

            var funcionario = new Funcionario({

              id: req.body.id,
            	nmTrab: req.body.nmTrab,
            	sexo: req.body.sexo,
            	racaCor: req.body.racaCor,
            	estCiv: req.body.estCiv,
            	grauInstr: req.body.grauInstr,
            	nmSoc: req.body.nmSoc,
            	dtNascto: req.body.dtNascto,
            	codMunicNascto: req.body.codMunicNascto,
            	ufNascto: req.body.ufNascto,
            	paisNascto: req.body.paisNascto,
            	paisNac: req.body.paisNac,
            	nmPai: req.body.nmPai,
            	nmMae: req.body.nmMae,
            	trabAposent: req.body.trabAposent

            });

            funcionario.save(function(err) {
              if (!err) {
                console.log('Funcionario criado');
                // res.json({ status: true, pedidos: pedido });
                //res.send({ dados: funcionario });
                res.send({ status: true, mensagem: funcionario, error: res.statusCode })
              } else {
                console.log(err);
                if ( err.name === 'ValidationError' ){
                  res.statusCode = "400"
                  res.send({ status: false, mensagem: 'Cadastro incompleto!', error: res.statusCode })
                } else {
                  res.statusCode = "500"
                  console.log("Erro interno (%d): %s", res.statusCode, err.message)
                  res.send({ status: false, mensagem: 'Erro no servidor.', error: res.statusCode })
                }
              }
            });
        }
        else {
          res.send({ status: false, mensagem: body, error: response.statusCode});
        }
    }
}
