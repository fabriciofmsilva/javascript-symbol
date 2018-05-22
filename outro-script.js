(() => {
  const painel = document.querySelector('.painel');
  // painel.contador = 'Sr.Contador';

  const identificadorUnico = Symbol();
  painel[identificadorUnico] = 'Sr.Contador';
})();
