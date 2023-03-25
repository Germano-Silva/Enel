const usernameElement = document.getElementById('username');
const logoutButton = document.getElementById('logout');

// Verifica se o usuário está logado
if (!localStorage.getItem('user')) {
  alert('Usuário deslogado!');
  window.location.href = 'login.html';
} else {
  const username = localStorage.getItem('user');
  usernameElement.textContent = `Olá, ${username}!`;
}

// Função para realizar logout
function logout() {
  localStorage.removeItem('user');
  window.location.href = 'login.html';
}

// Adiciona evento de click no botão de logout
logoutButton.addEventListener('click', logout);


//TMA DO DIA
// Obtém o email do usuário logado
const email = localStorage.getItem('user');

// Obtém os dados da planilha
const url2 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pubhtml?gid=767814670&single=true';


//Ligações atendidas

// Obtém os dados da planilha
const coluna1 = 'B';

fetch(url2)
  .then(response => response.text())
  .then(data => {
    // Extrai os dados da coluna C para um array
    const tabela = new DOMParser().parseFromString(data, 'text/html').querySelector('table');
    const linhas = tabela.querySelectorAll('tr');
    const valores = [];
    for (let i = 1; i < linhas.length; i++) {
      const colunas = linhas[i].querySelectorAll('td');
      if (colunas[0].textContent === email) {
        valores.push(colunas[1].textContent);
      }
    }

    // Calcula a média dos valores e exibe na página
    const valorMedio = valores.reduce((total, valor) => total + parseFloat(valor), 0) / valores.length;
    const valorElement = document.querySelector('.ligacoes-valor');
    valorElement.textContent = `${valorMedio.toFixed(0)}`;

  });

//Tempo Total em atendimento

// Obtém os dados da planilha
const coluna2 = 'C';

fetch(url2)
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
    const valorMedio = valores.reduce((total) => total);
    const valorElement = document.querySelector('.tempo-valor');
    //precisa achar um jeito para converter para formato de hora
    valorElement.textContent = `${valorMedio}`;

  });

//TMA do dia anterior
const coluna3 = 'D';

fetch(url2)
  .then(response => response.text())
  .then(data => {
    // Extrai os dados da coluna B para um array
    const tabela = new DOMParser().parseFromString(data, 'text/html').querySelector('table');
    const linhas = tabela.querySelectorAll('tr');
    const valores = [];
    for (let i = 1; i < linhas.length; i++) {
      const colunas = linhas[i].querySelectorAll('td');
      if (colunas[0].textContent === email) {
        valores.push(colunas[3].textContent);
      }
    }

    // Calcula a média dos valores e exibe na página
    const valorMedio = valores.reduce((total) => total);
    const valorElement = document.querySelector('.tma-valor');
    //precisa achar um jeito para converter para formato de hora
    valorElement.textContent = ` ${valorMedio}`;

    // Exibe o ícone de acordo com o valor médio
    const iconeElement = document.querySelector('.tma-icone');
    

    const tempoString = valorMedio;
    const [minutosStr, segundosStr] = tempoString.split(":");
    const minutos = parseInt(minutosStr);
    const segundos = parseFloat(segundosStr) / 60;
    const tempoTotal = minutos + segundos;

    if (tempoTotal < 10) {
      iconeElement.textContent = "✔";
    } else {
      iconeElement.textContent = "❗";
    }
  });


//Ligações saintes

// Obtém os dados da planilha
const coluna4 = 'E';

fetch(url2)
  .then(response => response.text())
  .then(data => {
    // Extrai os dados da coluna C para um array
    const tabela = new DOMParser().parseFromString(data, 'text/html').querySelector('table');
    const linhas = tabela.querySelectorAll('tr');
    const valores = [];
    for (let i = 1; i < linhas.length; i++) {
      const colunas = linhas[i].querySelectorAll('td');
      if (colunas[0].textContent === email) {
        valores.push(colunas[4].textContent);
      }
    }

    // Calcula a média dos valores e exibe na página
    const valorMedio = valores.reduce((total) => total);
    const valorElement = document.querySelector('.saintes-valor');
    valorElement.textContent = `${valorMedio}`;

  });


//Tempo total em ligações saintes

// Obtém os dados da planilha
const coluna5 = 'F';

fetch(url2)
  .then(response => response.text())
  .then(data => {
    // Extrai os dados da coluna C para um array
    const tabela = new DOMParser().parseFromString(data, 'text/html').querySelector('table');
    const linhas = tabela.querySelectorAll('tr');
    const valores = [];
    for (let i = 1; i < linhas.length; i++) {
      const colunas = linhas[i].querySelectorAll('td');
      if (colunas[0].textContent === email) {
        valores.push(colunas[5].textContent);
      }
    }

    // Calcula a média dos valores e exibe na página
    const valorMedio = valores.reduce((total) => total);
    const valorElement = document.querySelector('.liga-saintes-valor');
    valorElement.textContent = `${valorMedio}`;

  });


  