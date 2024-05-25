document.addEventListener('DOMContentLoaded', function () {

	const baseImagens = {
		todas: ['imagem.png'],
		natureza: ['natureza.jpg'],
		cidade: ['cidade.jpg'],
		animais: ['animais.jpg'],
	}

	
	function carregaImagens(categoria) {
		//selecionar elementos HTML com base em um setor
		const galeria = document.querySelector("#galeria-imagem");
		galeria.innerHTML = ''; //limpar bloco, paga tudo dentro
		const imagens = baseImagens[categorias];
		
		imagens.array.forEach(img => {
			console.log(img);
			galeria.innerHTML += '<div> <img src=>'
	
		});
	}

	carregaImagens('todas');
	// Evento de clique
	document.body.addEventListener('click', function (event) {

		//acessa a lista de classe de onde clicou e
		//procura pela classe botao0categoria
		if (event.target.classList.contains('botao-categoria')) {
			
            const categoria = event.target.dataset.categoria;

            alert(777);

         carregaImagens(categoria);
		}

	})


})