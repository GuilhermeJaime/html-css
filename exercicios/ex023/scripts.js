// Função para somar todos os valores dos inputs com id "num" e mostrar no id "res"
function somarInputs() {
  // Seleciona todos os inputs com id 'num' (mesmo id, retorna NodeList de todos)
  const inputs = document.querySelectorAll('input#num');
  // Cria um array com os valores convertidos para número
  const valores = Array.from(inputs).map(input => Number(input.value) || 0);
  // Soma todos os valores do array
  const total = valores.reduce((acc, val) => acc + val, 0);
  // Exibe o resultado no elemento com id 'res'
  document.getElementById('res').textContent = total;
}

// Adiciona evento para atualizar a soma sempre que algum input mudar
window.addEventListener('DOMContentLoaded', function () {
  // Função para criar o botão de soma
  function criarBotaoSoma() {
    const botao = document.createElement('button');
    botao.textContent = 'Somar População';
    botao.className = 'btn-soma';
    botao.onclick = somarInputs;
    // Insere o botão após a tabela
    const tabela = document.querySelector('table');
    if (tabela && tabela.parentNode) {
      tabela.parentNode.insertBefore(botao, tabela.nextSibling);
    }
  }
  criarBotaoSoma();
  // Limpa o resultado ao carregar a página
  document.getElementById('res').textContent = '';
});
