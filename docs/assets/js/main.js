

window.onload = function () {
   
    paises('paisNascto');
   
};


// Obtem os paises no arquivo json
function paises(chave) {
    var elemento = document.getElementById(chave);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            var tamanho = json.length;
            var i;

            /* insere países */
            for (i = 0; i < tamanho; i++) {
                var opcao = document.createElement('option');
                var componente = json[i];
                opcao.text = componente.pais;
                opcao.value = componente.cod;
                elemento.add(opcao, elemento[i]);
            }
        }
    };
    xhttp.open("GET", "assets/json/paises.json", true);
    xhttp.send();
}


