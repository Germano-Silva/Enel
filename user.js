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

// Obtém o email do usuário logado
const email = localStorage.getItem('user');

// Obtém os dados da planilha
const url2 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pubhtml?gid=767814670&single=true';


fetch(url2)
  .then(response => response.text())
  .then(data => {
    const tabela = new DOMParser().parseFromString(data, 'text/html').querySelector('table');
    const linhas = tabela.querySelectorAll('tr');

    let ligacoesAtendidas = [];
    let tempoTotalAtendimento = [];
    let tmaDiaAnterior = [];
    let ligacoesSaintes = [];
    let tempoTotalLigacoesSaintes = [];

    for (let i = 1; i < linhas.length; i++) {
      const colunas = linhas[i].querySelectorAll('td');
      if (colunas[0].textContent === email) {
        ligacoesAtendidas.push(colunas[1].textContent);
        tempoTotalAtendimento.push(colunas[2].textContent);
        tmaDiaAnterior.push(colunas[3].textContent);
        ligacoesSaintes.push(colunas[4].textContent);
        tempoTotalLigacoesSaintes.push(colunas[5].textContent);
      }
    }


    const valorMedioLigacoesAtendidas = ligacoesAtendidas.reduce((total, valor) => total + parseFloat(valor), 0) / ligacoesAtendidas.length;
    const valorElementLigacoesAtendidas = document.querySelector('.ligacoes-valor');
    valorElementLigacoesAtendidas.textContent = `${valorMedioLigacoesAtendidas.toFixed(0)}`;

    const valorMedioTempoTotalAtendimento = tempoTotalAtendimento.reduce((total) => total);
    const valorElementTempoTotalAtendimento = document.querySelector('.tempo-valor');
    valorElementTempoTotalAtendimento.textContent = `${valorMedioTempoTotalAtendimento}`;

    const valorMedioTmaDiaAnterior = tmaDiaAnterior.reduce((total) => total);
    const valorElementTmaDiaAnterior = document.querySelector('.tma-valor');
    valorElementTmaDiaAnterior.textContent = ` ${valorMedioTmaDiaAnterior}`;

    const iconeElementTmaDiaAnterior = document.querySelector('.tma-icone');

    const tempoStringTmaDiaAnterior = valorMedioTmaDiaAnterior;
    const [minutosStr, segundosStr] = tempoStringTmaDiaAnterior.split(":");
    const minutos = parseInt(minutosStr);
    const segundos = parseFloat(segundosStr) / 60;
    const tempoTotalTmaDiaAnterior = minutos + segundos;

    if (tempoTotalTmaDiaAnterior < 10) {
      iconeElementTmaDiaAnterior.textContent = "✔";
    } else {
      iconeElementTmaDiaAnterior.textContent = "❗";
    }

    const valorMedioLigacoesSaintes = ligacoesSaintes.reduce((total) => total);
    const valorElementLigacoesSaintes = document.querySelector('.saintes-valor');
    valorElementLigacoesSaintes.textContent = `${valorMedioLigacoesSaintes}`;

    const valorMedioTempoTotalLigacoesSaintes = tempoTotalLigacoesSaintes.reduce((total) => total);
    const valorElementTempoTotalLigacoesSaintes = document.querySelector('.liga-saintes-valor');
    valorElementTempoTotalLigacoesSaintes.textContent = `${valorMedioTempoTotalLigacoesSaintes}`;

});


const url3 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pubhtml?gid=1583042113&single=true';

fetch(url3)
  .then(response => response.text())
  .then(data => {
    const tabela = new DOMParser().parseFromString(data, 'text/html').querySelector('table');
    const linhas = tabela.querySelectorAll('tr');

    let ligacoesAtendidas = [];
    let tempoTotalAtendimento = [];
    let tmaDiaAnterior = [];
    let ligacoesSaintes = [];
    let tempoTotalLigacoesSaintes = [];

    for (let i = 1; i < linhas.length; i++) {
      const colunas = linhas[i].querySelectorAll('td');
      if (colunas[0].textContent === email) {
        ligacoesAtendidas.push(colunas[1].textContent);
        tempoTotalAtendimento.push(colunas[2].textContent);
        tmaDiaAnterior.push(colunas[3].textContent);
        ligacoesSaintes.push(colunas[4].textContent);
        tempoTotalLigacoesSaintes.push(colunas[5].textContent);
      }
    }

    const valorMedioLigacoesAtendidas = ligacoesAtendidas.reduce((total, valor) => total + parseFloat(valor), 0) / ligacoesAtendidas.length;
    const valorElementLigacoesAtendidas = document.querySelector('.ligacoes-mes-valor');
    valorElementLigacoesAtendidas.textContent = `${valorMedioLigacoesAtendidas.toFixed(0)}`;

    const valorMedioTempoTotalAtendimento = tempoTotalAtendimento.reduce((total) => total);
    const valorElementTempoTotalAtendimento = document.querySelector('.tempo-mes-valor');
    valorElementTempoTotalAtendimento.textContent = `${valorMedioTempoTotalAtendimento}`;

    const valorMedioTmaDiaAnterior = tmaDiaAnterior.reduce((total) => total);
    const valorElementTmaDiaAnterior = document.querySelector('.tma-mes-valor');
    valorElementTmaDiaAnterior.textContent = ` ${valorMedioTmaDiaAnterior}`;

    const iconeElementTmaDiaAnterior = document.querySelector('.tma-mes-icone');

    const tempoStringTmaDiaAnterior = valorMedioTmaDiaAnterior;
    const [minutosStr, segundosStr] = tempoStringTmaDiaAnterior.split(":");
    const minutos = parseInt(minutosStr);
    const segundos = parseFloat(segundosStr) / 60;
    const tempoTotalTmaDiaAnterior = minutos + segundos;

    if (tempoTotalTmaDiaAnterior < 10) {
      iconeElementTmaDiaAnterior.textContent = "✔";
    } else {
      iconeElementTmaDiaAnterior.textContent = "❗";
    }

    const valorMedioLigacoesSaintes = ligacoesSaintes.reduce((total) => total);
    const valorElementLigacoesSaintes = document.querySelector('.saintes-mes-valor');
    valorElementLigacoesSaintes.textContent = `${valorMedioLigacoesSaintes}`;

    const valorMedioTempoTotalLigacoesSaintes = tempoTotalLigacoesSaintes.reduce((total) => total);
    const valorElementTempoTotalLigacoesSaintes = document.querySelector('.liga-saintes-mes-valor');
    valorElementTempoTotalLigacoesSaintes.textContent = `${valorMedioTempoTotalLigacoesSaintes}`;

  });




//Grafico TMA
const url4 = ("https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pubhtml?gid=1610093043&single=true");

fetch(url4)
  .then(response => response.text())
  .then(data => {
    const tabela = new DOMParser().parseFromString(data, 'text/html').querySelector('table');
    const linhas = tabela.querySelectorAll('tr');
    const valores = [];
    for (let i = 1; i < linhas.length; i++) {
      const colunas = linhas[i].querySelectorAll('td');
      if (colunas[0].textContent === email) {
        for (let j = 1; j < colunas.length; j++) {
            valores.push(colunas[j].textContent);
        }
      }
    }
    console.log(valores);

    // Converte os valores para minutos e segundos
    const temposFormatados = converterTempo(valores);
    console.log(temposFormatados);

    // Converte os valores para float
    const temposFloat = converterFloat(temposFormatados);
    console.log(temposFloat);

    // Cria o gráfico de colunas
    criarGraficoColunas(temposFloat, temposFormatados);
  });

function converterTempo(valores) {
  const tempos = [];
  valores.forEach(valor => {
    const tempoData = new Date(`January 1, 2000 ${valor}`);
    const minutos = tempoData.getMinutes();
    const segundos = tempoData.getSeconds();
    const tempoFormatado = `${("0" + minutos).slice(-2)}:${("0" + segundos).slice(-2)}`;
    tempos.push(tempoFormatado);
  });
  return tempos;
}

function converterFloat(tempoFormatados) {
  const temposFloat = [];
  tempoFormatados.forEach(tempo => {
    const tempoFloat = parseFloat(tempo.replace(':', '.'));
    temposFloat.push(tempoFloat);
  });
  return temposFloat;
}

function criarGraficoColunas(temposFloat, temposFormatados) {
  google.charts.load('current', {'packages':['corechart']}); // Carrega a biblioteca do Google Charts

  google.charts.setOnLoadCallback(function() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Tempo');
    data.addColumn('number', 'Tempo (segundos)');
    data.addColumn({type: 'string', role: 'style'}); // adiciona coluna de estilo para as cores

    for (var i = 0; i < temposFloat.length; i++) {
      const cor = (temposFloat[i] >= 10.0) ? 'color: red;' : (temposFloat[i] < 8.0) ? 'color: green;' : 'color: blue;'; // define a cor com base no tempo
      data.addRow([temposFormatados[i], temposFloat[i], cor]);
    }

    var options = {
      title: 'TMA mensal',
      hAxis: {title: 'TMA', titleTextStyle: {color: '#333'}},
      vAxis: {minValue: 0},
      bars: 'vertical',
      height: 400
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('grafico-colunas')); // Cria um gráfico de colunas

    chart.draw(data, options); // Desenha o gráfico na página HTML
  });
}