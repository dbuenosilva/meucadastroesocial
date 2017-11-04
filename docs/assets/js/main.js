


window.onload = function () {
   
    paises('paisNascto');
   
};


$(document).ready(function() {
	$('#rootwizard').bootstrapWizard({
		tabClass:"nav-wizard",
		onTabShow: function(tab, navigation, index) {
			tab.prevAll().addClass('completed');
			tab.nextAll().removeClass('completed');
			if(tab.hasClass("active")){
				tab.removeClass('completed');
			}
			var $total = navigation.find('li').length;
			var $current = index+1;
			var $percent = ($current/$total) * 100;
			$('#rootwizard').find('.progress-bar').css({width:$percent+'%'});
			$('#rootwizard').find('.wizard-status span').html($current+" de "+$total);
		}
	});

	$('#validate-wizard').bootstrapWizard({
		tabClass:"nav-wizard",
		onNext: function(tab, navigation, index) {
			var content=$('#step'+index);
			if(typeof  content.attr("parsley-validate") != 'undefined'){
				var $valid = content.parsley( 'validate' );
				if(!$valid){
					return false;
				}
			};
			// Set the name for the next tab
			$('#step8 h3').find("span").html($('#fullname').val());
		},
		onTabClick: function(tab, navigation, index) {
			$.notific8('Clique no botão <strong>Próximo</strong> no final da página para continuar!',{ life:5000, theme:"danger" ,heading:" Ops! "});
			return false;
		},
		onTabShow: function(tab, navigation, index) {
			tab.prevAll().addClass('completed');
			tab.nextAll().removeClass('completed');
			if(tab.hasClass("active")){
				tab.removeClass('completed');
			}
			var $total = navigation.find('li').length;
			var $current = index+1;
			var $percent = ($current/$total) * 100;
			$('#validate-wizard').find('.progress-bar').css({width:$percent+'%'});
			$('#validate-wizard').find('.wizard-status span').html($current+" de "+$total);
		}
	});

});

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



// drop down com json de Estados do Brasil
let dropdown = $('#locality-dropdown');

dropdown.empty();

dropdown.append('<option selected="true" disabled>Escolha UF</option>');
dropdown.prop('selectedIndex', 0);

// Json com estados
//const url = 'assets/json/estados';
const url = 'https://api.myjson.com/bins/15sfur';

// Preenche dropdown com a lista de estados
$.getJSON(url, function (data) {
  $.each(data, function (key, entry) {
    dropdown.append($('<option></option>').attr('value', entry.sigla).text(entry.nome));
  })
});
