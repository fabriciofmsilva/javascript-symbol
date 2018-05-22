(() => {
  // busca os elementos 
  const $ = document.querySelector.bind(document);
  const botao = $('.botao');
  const painel = $('.painel');

  // cria a propriedade contador dinamicamente
  // painel.contador = 0;
  const identificadorUnico = Symbol();
  painel[identificadorUnico] = 0;

  botao.addEventListener('click', () => {
    // a cada clique, incrementa painel.contador exibindo seu estado mais atual 
    // painel.contador++;
    // painel.textContent = painel.contador;
    painel[identificadorUnico]++
    painel.textContent = painel[identificadorUnico];
  });
})();
