//TMA DO MÊS

// Obtém os dados da planilha
const coluna2 = 'C';

fetch(url1)
  .then(response => response.text())
  .then(data => {
    // Extrai os dados da coluna C para um array
    const tabela = new DOMParser().parseFromString(data, 'text/html').querySelector('table');
    const linhas = tabela.querySelectorAll('tr');
    const valores = [];
    for (let i = 1; i < linhas.length; i++) {
      const colunas = linhas[i].querySelectorAll('td');
      if (colunas[0].textContent === email) {
        valores.push(colunas[2].textContent);
      }
    }

    // Calcula a média dos valores e exibe na página
    const valorMedio = valores.reduce((total, valor) => total + parseFloat(valor), 0) / valores.length;
    const valorElement = document.querySelector('.tma-mes-valor');
    valorElement.textContent = `${valorMedio.toFixed(2)}`;

    // Exibe o ícone de acordo com o valor médio
    const iconeElement = document.querySelector('.tma-mes-icone');
    if (valorMedio < 10) {
      iconeElement.textContent = '✔';
    } else {
      iconeElement.textContent = '❗';
    }
  });

  <div class="card">
  <h3>TMA do mês</h3>
  <div class="tma-mes-valor"></div>
  <div class="tma-mes-icone"></div>
</div>