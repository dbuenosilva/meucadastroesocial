
	//Foca no Cep
	document.getElementById('cepEnd').focus();
	var lastCepCheck = '';
	document.getElementById('cepEnd').addEventListener('keyup', function() {
		//Impede inserir algo alem de Números
		this.value = this.value.replace(/[^0-9]/, "");

		//Pega apenas os números
		var cep = this.value.replace(/[^0-9]/, "");

		//Só pesquisa se tiver 8 caracteres e o ultimo cep pesquisado seja diferente do atual.
		if(cep.length != 8 || lastCepCheck == cep){
			return false;
		}
		lastCepCheck = cep;

		ajax = new XMLHttpRequest();

		var url = "http://viacep.com.br/ws/"+cep+"/json/";
		ajax.open('GET', url, true);
		ajax.send();

		ajax.onreadystatechange = function() {
			if(ajax.readyState == 4 && ajax.status == 200) {

				var json = JSON.parse(ajax.responseText);
				document.getElementById('dscLogradEnd').value = json.logradouro;
				document.getElementById('bairroEnd').value = json.bairro;
				document.getElementById('cidade').value = json.localidade;
				document.getElementById('ufEnd').value = json.uf;
        document.getElementById('codMunicEnd').value = json.ibge;
				document.getElementById('nrLogradEnd').focus();
			}
		}
	});
