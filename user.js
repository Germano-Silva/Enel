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

//===========================================================


const url3 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pubhtml?gid=1583042113&single=true';


//Ligações atendidas

// Obtém os dados da planilha
const coluna6 = 'B';

fetch(url3)
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
    const valorElement = document.querySelector('.ligacoes-mes-valor');
    valorElement.textContent = `${valorMedio.toFixed(0)}`;

  });

//Tempo Total em atendimento

// Obtém os dados da planilha
const coluna7 = 'C';

fetch(url3)
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
    const valorElement = document.querySelector('.tempo-mes-valor');
    //precisa achar um jeito para converter para formato de hora
    valorElement.textContent = `${valorMedio}`;

  });

//TMA do dia anterior
const coluna8 = 'D';

fetch(url3)
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
    const valorElement = document.querySelector('.tma-mes-valor');
    //precisa achar um jeito para converter para formato de hora
    valorElement.textContent = ` ${valorMedio}`;

    // Exibe o ícone de acordo com o valor médio
    const iconeElement = document.querySelector('.tma-mes-icone');
    

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
const coluna9 = 'E';

fetch(url3)
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
    const valorElement = document.querySelector('.saintes-mes-valor');
    valorElement.textContent = `${valorMedio}`;

  });


//Tempo total em ligações saintes

// Obtém os dados da planilha
const coluna10 = 'F';

fetch(url3)
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
    const valorElement = document.querySelector('.liga-saintes-mes-valor');
    valorElement.textContent = `${valorMedio}`;

  });

//=============================================================================================


//Grafico TMA

//const email = 'germano'; // Substitua com o endereço de e-mail do usuário logado

const url4 = ("https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pubhtml?gid=1610093043&single=true");

fetch(url4)
  .then(response => response.text())
  .then(data => {
    // Extrai os dados da coluna C para um array
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


//================================================================

//indicadores

const pagina4 =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pub?gid=2118668185&single=true&output=tsv";
let indicadores = [];

fetch(pagina4)
    .then((response) => response.text())
    .then((data) => {
        const colunas = data.split("\n");

        for (let i = 0; i < colunas.length; i++) {
            const linhas = colunas[i].split("\t");
            indicadores.push(linhas);
        }

        for (var i = 0; i < indicadores.length; i++) {
            document.getElementById("paises").innerHTML +=
                "<th>" + indicadores[0][i] + "</th>";
        }
        for (var i = 0; i < indicadores.length; i++) {
            document.getElementById("linha1").innerHTML +=
                "<td>" + indicadores[1][i] + "</td>";
        }
        for (var i = 0; i < indicadores.length; i++) {
            document.getElementById("linha2").innerHTML +=
                "<td>" + indicadores[2][i] + "</td>";
        }
        for (var i = 0; i < indicadores.length; i++) {
            document.getElementById("linha3").innerHTML +=
                "<td>" + indicadores[3][i] + "</td>";
        }
        for (var i = 0; i < indicadores.length; i++) {
            document.getElementById("linha4").innerHTML +=
                "<td>" + indicadores[4][i] + "</td>";
        }
        for (var i = 0; i < indicadores.length; i++) {
            document.getElementById("linha5").innerHTML +=
                "<td>" + indicadores[5][i] + "</td>";
        }
        for (var i = 0; i < indicadores.length; i++) {
            document.getElementById("linha6").innerHTML +=
                "<td>" + indicadores[6][i] + "</td>";
        }
    });


const pagina5 =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pub?gid=381885766&single=true&output=tsv";

let resolution = [];

fetch(pagina5)
    .then((response) => response.text())
    .then((data) => {
        const rows = data.split("\n");
        rows.forEach((row) => {
            const cells = row.split("\t");
            resolution.push(cells);
        });
        console.log(resolution);
        for (var i = 0; i < resolution.length; i++) {
            document.getElementById("meses").innerHTML +=
                "<th>" + resolution[0][i] + "</th>";
        }
        for (var i = 0; i < resolution.length; i++) {
            document.getElementById("resolution1").innerHTML +=
                "<td>" + resolution[1][i] + "</td>";
        }
        for (var i = 0; i < resolution.length; i++) {
            document.getElementById("resolution2").innerHTML +=
                "<td>" + resolution[2][i] + "</td>";
        }
        for (var i = 0; i < resolution.length; i++) {
            document.getElementById("resolution3").innerHTML +=
                "<td>" + resolution[3][i] + "</td>";
        }
        for (var i = 0; i < resolution.length; i++) {
            document.getElementById("resolution4").innerHTML +=
                "<td>" + resolution[4][i] + "</td>";
        }
        for (var i = 0; i < resolution.length; i++) {
            document.getElementById("resolution5").innerHTML +=
                "<td>" + resolution[5][i] + "</td>";
        }
        for (var i = 0; i < resolution.length; i++) {
            document.getElementById("resolution6").innerHTML +=
                "<td>" + resolution[6][i] + "</td>";
        }
        for (var i = 0; i < resolution.length; i++) {
            document.getElementById("resolution7").innerHTML +=
                "<td>" + resolution[7][i] + "</td>";
        }
    });
