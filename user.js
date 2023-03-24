// Função que valida se os dados estão abaixo ou acima de 10 e mostra o ícone correspondente
function validarDados(valor) {
    if (valor < 10) {
      return '<span style="color: green;">&#10004;</span>';
    } else {
      return '<span style="color: red;">&#10071;</span>';
    }
  }
  
  // Função para obter os dados da planilha
  function obterDadosPlanilha(callback) {
    var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pubhtml";
    Tabletop.init({
      key: url,
      callback: callback,
      simpleSheet: true
    });
  }
  
  // Função para obter o usuário logado
  function obterUsuarioLogado() {
    // Suponha que o usuário logado seja "fulano"
    return "fulano";
  }
  
  // Função para mostrar os dados do TMA do dia
  function mostrarTMAHoje() {
    obterDadosPlanilha(function(data) {
      var usuario = obterUsuarioLogado();
      var tmaHoje = data.filter(function(row) {
        return row.Usuario == usuario;
      })[0].TMA_do_dia;
      var tmaHojeHtml = validarDados(tmaHoje) + " " + tmaHoje;
      document.getElementById("tmaHoje").innerHTML = tmaHojeHtml;
    });
  }
  
  // Função para mostrar os dados do TMA do mês
  function mostrarTMAMes() {
    obterDadosPlanilha(function(data) {
      var usuario = obterUsuarioLogado();
      var tmaMes = data.filter(function(row) {
        return row.Usuario == usuario;
      })[0].TMA_do_mes;
      var tmaMesHtml = validarDados(tmaMes) + " " + tmaMes;
      document.getElementById("tmaMes").innerHTML = tmaMesHtml;
    });
  }
  
  // Função para mostrar os dados de ligações atendidas
  function mostrarLigacoesAtendidas() {
    obterDadosPlanilha(function(data) {
      var usuario = obterUsuarioLogado();
      var ligacoesAtendidas = data.filter(function(row) {
        return row.Usuario == usuario;
      })[0].Ligacoes_atendidas;
      document.getElementById("ligacoesAtendidas").innerHTML = ligacoesAtendidas;
    });
  }
  
  // Função para mostrar os dados de tempo total em atendimento
  function mostrarTempoTotal() {
    obterDadosPlanilha(function(data) {
      var usuario = obterUsuarioLogado();
      var tempoTotal = data.filter(function(row) {
        return row.Usuario == usuario;
      })[0].Tempo_total_em_atendimento;
      document.getElementById("tempoTotal").innerHTML = tempoTotal;
    });
  }
  
  // Função que é executada ao carregar a página
  function carregarPagina() {
    mostrarTMAHoje();
    mostrarTMAMes();
    mostrarLigacoesAtendidas();
    mostrarTempoTotal();
  }
  
  // Função para obter os dados da planilha
function obterDadosPlanilha(callback) {
    var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pubhtml";
    Tabletop.init({
      key: url,
      callback: callback,
      simpleSheet: true
    });
  }
  
  // Função para obter o usuário logado
  function obterUsuarioLogado() {
    // Suponha que o usuário logado seja "fulano"
    return "fulano";
  }
  
  // Função para criar o gráfico de colunas
  function criarGraficoColunas(data) {
    var usuario = obterUsuarioLogado();
    var dadosFiltrados = data.filter(function(row) {
      return row.Usuario == usuario && row.TMA != "" && row.TMA != "0";
    });
    var valores = [];
    var meses = [];
    for (var i = 0; i < dadosFiltrados.length; i++) {
      valores.push(parseFloat(dadosFiltrados[i].TMA));
      meses.push(dadosFiltrados[i].Mes);
    }
    var chart = new Chart(document.getElementById('graficoColunas'), {
      type: 'bar',
      data: {
        labels: meses,
        datasets: [{
          label: 'TMA',
          data: valores,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  
  // Função que é executada ao carregar a página
  function carregarPagina() {
    obterDadosPlanilha(function(data) {
      criarGraficoColunas(data);
    });
  }


  // importar o tabletop.js
<script src="https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js"></script>

// criar a função de validação
function validatePage4() {
  // definir a URL da planilha
  var spreadsheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pubhtml";

  // utilizar o tabletop.js para carregar a planilha
  Tabletop.init({
    key: spreadsheetUrl,
    callback: function(data, tabletop) {
      // definir as linhas que serão validadas
      var rowsToValidate = [2, 3, 4, 5, 6];

      // percorrer as linhas
      for (var i = 0; i < rowsToValidate.length; i++) {
        var row = rowsToValidate[i];

        // percorrer as colunas B até H
        for (var j = 2; j <= 8; j++) {
          var cellValue = data.Página4.elements[row - 1]["col" + j];

          // verificar se o valor é um número
          if (!isNaN(cellValue)) {
            // verificar se o valor é maior que o limite
            if (j == 2 && cellValue > 0.03) {
              // definir a cor vermelha
              document.getElementById("cel" + row + j).style.color = "red";
            } else if (j == 3 && cellValue > 0.03) {
              document.getElementById("cel" + row + j).style.color = "red";
            } else if (j == 4 && cellValue > 0.03) {
              document.getElementById("cel" + row + j).style.color = "red";
            } else if (j == 5 && cellValue > 0.02) {
              document.getElementById("cel" + row + j).style.color = "red";
            } else if (j == 6 && cellValue > 20) {
              document.getElementById("cel" + row + j).style.color = "red";
            } else if (j == 7 && cellValue > 45) {
              document.getElementById("cel" + row + j).style.color = "red";
            } else if (j == 8 && cellValue > 0.02) {
              document.getElementById("cel" + row + j).style.color = "red";
            } else {
              // definir a cor verde
              document.getElementById("cel" + row + j).style.color = "green";
            }
          } else {
            // definir "N/A" se não houver dados na célula
            document.getElementById("cel" + row + j).innerHTML = "N/A";
          }
        }
      }
    },
    simpleSheet: true
  });
}

// chamar a função de validação quando a página carregar
window.onload = function() {
  validatePage4();
};

fetch("https://spreadsheets.google.com/feeds/cells/1mU6EjK6-xhU6A_uUZ0SCdKjMYG9cOYJ-TO0hBQxSEcw/5/public/full?alt=json")
  .then(response => response.json())
  .then(data => {
    const entries = data.feed.entry;
    for (let i = 0; i < entries.length; i++) {
      const cell = entries[i];
      if (cell.title.$t.match(/^B[2-9]/)) {
        const value = parseFloat(cell.content.$t.replace(",", "."));
        const element = document.getElementById(cell.title.$t);
        if (value >= 0 && value < 60) {
          element.style.backgroundColor = "green";
        } else if (value >= 60 && value < 75) {
          element.style.backgroundColor = "yellow";
        } else if (value >= 75) {
          element.style.backgroundColor = "red";
        }
      }
    }
  })
  .catch(error => console.error(error));
