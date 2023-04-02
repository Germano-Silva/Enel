//TMA OPERAÇÃO
fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pub?gid=120659748&single=true&output=tsv')
.then(response => response.text())
.then(data => {
  const rows = data.split('\n');
  const tmaGeral = rows.map(row => row.split('\t'));
  console.log(tmaGeral);

  const row = tmaGeral[1];
  console.log(row[0]);
  const portugues = [];
  portugues.push(row[0]);
  const pt = document.getElementById('pt');
  pt.textContent = portugues.join(', ');
  console.log(row[1]);
  const espanhol = [];
  espanhol.push(row[1]);
  const es = document.getElementById('es');
  es.textContent = espanhol.join(', ');
  const sum = row.slice(1).reduce((acc, val) => acc + parseFloat(val), 0);
  const media = sum / (row.length - 1);
  console.log(media);
  const mediaElement = document.getElementById('media');
  mediaElement.textContent = media.toFixed(2);

  if (media >= 10.0) {
    mediaElement.style.color = '#09915A';
    pt.style.color = '#09915A';
    es.style.color = '#09915A';
  } else if (media >= 8.0 && media < 10.0) {
    mediaElement.style.color = '#0859F9';
    pt.style.color = '#0859F9';
    es.style.color = '#0859F9';
  } else {
    mediaElement.style.color = '#EF2E04';
    pt.style.color = '#EF2E04';
    es.style.color = '#EF2E04';
  }
});

//indicadores LIGAÇÕES
let indicadores = [];

fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pub?gid=2118668185&single=true&output=tsv')
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
          const valor = parseFloat(indicadores[1][i].replace(',', '.').replace('%',''));
          const cor = valor < 2.00 ? "#09915A" : valor < 3.00 ? "#0859F9" : "#EF2E04";

          document.getElementById("linha1").innerHTML +=
              "<td style='color: " + cor + "'>" + valor.toFixed(2) + "% </td>";
        }
        for (var i = 0; i < indicadores.length; i++) {
          var valor = indicadores[2][i].replace(':', '').replace(':','');
          var valorInteiro = parseInt(valor);
          var cor = "#ffffff"; // cor padrão
          
          if (valorInteiro < 20) {
              cor = "#09915A";
          } else if (valorInteiro >= 20 && valorInteiro < 30) {
              cor = "#0859F9";
          } else if (valorInteiro >= 30) {
              cor = "#EF2E04";
          }
          
          var celula = document.createElement("td");
          celula.style.color = cor;
          celula.innerHTML = "00:00:" + valorInteiro + "s";
          document.getElementById("linha2").appendChild(celula);
      }
      for (var i = 0; i < indicadores.length; i++) {
        var valor = indicadores[3][i].replace(':', '').replace(':','');
        var valorInteiro = parseInt(valor);
        var cor = "#ffffff"; // cor padrão
        
        if (valorInteiro < 30) {
            cor = "#09915A";
        } else if (valorInteiro >= 30 && valorInteiro < 45) {
            cor = "#0859F9";
        } else if (valorInteiro >= 45) {
            cor = "#EF2E04";
        }
        
        var celula = document.createElement("td");
        celula.style.color = cor;
        celula.innerHTML = "00:00:" + valorInteiro + "s";
        document.getElementById("linha3").appendChild(celula);
    }
        for (var i = 0; i < indicadores.length; i++) {
          const valor = parseFloat(indicadores[4][i].replace(',', '.').replace('%',''));
          const cor = isNaN(valor) ? "#ffffff" : valor < 1.50 ? "#09915A" : valor < 2.00 ? "#0859F9" : "#EF2E04";

          document.getElementById("linha4").innerHTML +=
              "<td style='color: " + cor + "'>" + (isNaN(valor) ? "" : valor.toFixed(2)) + "% </td>";
      }
      for (var i = 0; i < indicadores.length; i++) {
        var valor = indicadores[5][i].replace(':', '').replace(':','');
        var valorInteiro = parseInt(valor);
        var cor = "#ffffff"; // cor padrão
        
        if (valorInteiro < 10) {
            cor = "#09915A";
        } else if (valorInteiro >= 10 && valorInteiro < 20) {
            cor = "#0859F9";
        } else if (valorInteiro >= 20) {
            cor = "#EF2E04";
        }
        
        var celula = document.createElement("td");
        celula.style.color = cor;
        celula.innerHTML = "00:00:" + valorInteiro + "s";
        document.getElementById("linha5").appendChild(celula);
    }
    for (var i = 0; i < indicadores.length; i++) {
      var valor = indicadores[6][i].replace(':', '').replace(':','');
      var valorInteiro = parseInt(valor);
      var cor = "#ffffff"; // cor padrão
      
      if (valorInteiro < 10) {
          cor = "#09915A";
      } else if (valorInteiro >= 10 && valorInteiro < 20) {
          cor = "#0859F9";
      } else if (valorInteiro >= 20) {
          cor = "#EF2E04";
      }
      
      var celula = document.createElement("td");
      celula.style.color = cor;
      celula.innerHTML = "00:00:" + valorInteiro + "s";
      document.getElementById("linha6").appendChild(celula);
  }
    });


let resolution = [];

fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pub?gid=381885766&single=true&output=tsv')
    .then((response) => response.text())
    .then((data) => {
        const rows = data.split("\n");
        rows.forEach((row) => {
            const cells = row.split("\t");
            resolution.push(cells);
        });
        for (var i = 0; i < resolution.length; i++) {
            document.getElementById("meses").innerHTML +=
                "<th>" + resolution[0][i] + "</th>";
        }
        for (var i = 0; i < resolution.length; i++) {
          const valor = parseFloat(resolution[1][i+1].replace(',', '.').replace('%',''));
          const cor = isNaN(valor) ? "#ffffff" : valor <= 75.00 ? "#EF2E04" : valor > 75.00 && valor < 85.00 ? "#0759F8" : "#09915A";

          document.getElementById("resolution1").innerHTML +=
              "<td style='color: " + cor + "'>" + (isNaN(valor) ? "" : valor.toFixed(2)) + " % </td>";
        }
        for (var i = 0; i < resolution.length; i++) {
          const valor = parseFloat(resolution[2][i+1].replace(',', '.').replace('%',''));
          const cor = isNaN(valor) ? "#ffffff" : valor <= 75.00 ? "#EF2E04" : valor > 75.00 && valor < 85.00 ? "#0759F8" : "#09915A";

          document.getElementById("resolution2").innerHTML +=
              "<td style='color: " + cor + "'>" + (isNaN(valor) ? "" : valor.toFixed(2)) + " % </td>";
        }
        for (var i = 0; i < resolution.length; i++) {
          const valor = parseFloat(resolution[3][i+1].replace(',', '.').replace('%',''));
          const cor = isNaN(valor) ? "#ffffff" : valor <= 75.00 ? "#EF2E04" : valor > 75.00 && valor < 85.00 ? "#0759F8" : "#09915A";

          document.getElementById("resolution3").innerHTML +=
              "<td style='color: " + cor + "'>" + (isNaN(valor) ? "" : valor.toFixed(2)) + " % </td>";
        }
        for (var i = 0; i < resolution.length; i++) {
          const valor = parseFloat(resolution[4][i+1].replace(',', '.').replace('%',''));
          const cor = isNaN(valor) ? "#ffffff" : valor <= 75.00 ? "#EF2E04" : valor > 75.00 && valor < 85.00 ? "#0759F8" : "#09915A";

          document.getElementById("resolution4").innerHTML +=
              "<td style='color: " + cor + "'>" + (isNaN(valor) ? "" : valor.toFixed(2)) + " % </td>";
        }
        for (var i = 0; i < resolution.length; i++) {
          const valor = parseFloat(resolution[5][i+1].replace(',', '.').replace('%',''));
          const cor = isNaN(valor) ? "#ffffff" : valor <= 75.00 ? "#EF2E04" : valor > 75.00 && valor < 85.00 ? "#0759F8" : "#09915A";

          document.getElementById("resolution5").innerHTML +=
              "<td style='color: " + cor + "'>" + (isNaN(valor) ? "" : valor.toFixed(2)) + " % </td>";
        }
        for (var i = 0; i < resolution.length; i++) {
          const valor = parseFloat(resolution[6][i+1].replace(',', '.').replace('%',''));
          const cor = isNaN(valor) ? "#ffffff" : valor <= 75.00 ? "#EF2E04" : valor > 75.00 && valor < 85.00 ? "#0759F8" : "#09915A";

          document.getElementById("resolution6").innerHTML +=
              "<td style='color: " + cor + "'>" + (isNaN(valor) ? "" : valor.toFixed(2)) + " % </td>";
        }
        for (var i = 0; i < resolution.length; i++) {
          const valor = parseFloat(resolution[7][i+1].replace(',', '.').replace('%',''));
          const cor = isNaN(valor) ? "#ffffff" : valor <= 75.00 ? "#EF2E04" : valor > 75.00 && valor < 85.00 ? "#0759F8" : "#09915A";

          document.getElementById("resolution7").innerHTML +=
              "<td style='color: " + cor + "'>" + (isNaN(valor) ? "" : valor.toFixed(2)) + " % </td>";
        }

    });



 
    // Busca os dados da planilha no formato TSV
fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pub?gid=2035908972&single=true&output=tsv')
.then(response => response.text())
.then(data => {
  // Converte os dados TSV em uma matriz
  const matrix = parseTSV(data);

  // Extrai as informações dos meses e do TMA
  const months = matrix[0].slice(1);
  const tma = matrix[1].slice(1);

  // Calcula a cor de cada coluna do gráfico
  const colors = tma.map(value => {
    if (value < 8.0) {
      return '#09915A';
    } else if (value < 10.0) {
      return '#0859F9';
    } else {
      return '#EF2E04';
    }
  });

  // Cria o gráfico com as cores correspondentes
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [{
        label : 'TMA',
        data: tma,
        backgroundColor: colors,
      }]
    },
    options: {
      legend: { display: false },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            callback: function(value, index, values) {
              return value + ' Minutos';
            }
          },
          scaleLabel: {
            display: true,
            labelString: 'Minutos'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'TMA Mensal'
          }
        }]
      }
    }
  });
});

// Função para converter dados TSV em uma matriz
function parseTSV(tsv) {
return tsv.trim().split('\n').map(line => line.split('\t'));
}

//TMA PT
    // Busca os dados da planilha no formato TSV
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pub?gid=1363269643&single=true&output=tsv')
    .then(response => response.text())
    .then(data => {
      // Converte os dados TSV em uma matriz
      const matrix = parseTSV(data);
    
      // Extrai as informações dos meses e do TMA
      const months = matrix[0].slice(1);
      const tma = matrix[1].slice(1);
    
      // Calcula a cor de cada coluna do gráfico
      const colors = tma.map(value => {
        if (value < 8.0) {
          return '#09915A';
        } else if (value < 10.0) {
          return '#0859F9';
        } else {
          return '#EE2B04';
        }
      });
    
      // Cria o gráfico com as cores correspondentes
      const ctx = document.getElementById('myChart01').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: months,
          datasets: [{
            label : 'TTMA',
            data: tma,
            backgroundColor: colors,
          }]
        },
        options: {
          legend: { display: false },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                callback: function(value, index, values) {
                  return value + ' Minutos';
                }
              },
              scaleLabel: {
                display: true,
                labelString: 'Minutos'
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'TMA Mensal'
              }
            }]
          }
        }
      });
    });
    
    // Função para converter dados TSV em uma matriz
    function parseTSV(tsv) {
    return tsv.trim().split('\n').map(line => line.split('\t'));
    }


//TMA ES
    // Busca os dados da planilha no formato TSV
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pub?gid=1526843340&single=true&output=tsv')
    .then(response => response.text())
    .then(data => {
      // Converte os dados TSV em uma matriz
      const matrix = parseTSV(data);
    
      // Extrai as informações dos meses e do TMA
      const months = matrix[0].slice(1);
      const tma = matrix[1].slice(1);
    
      // Calcula a cor de cada coluna do gráfico
      const colors = tma.map(value => {
        if (value < 8.0) {
          return '#09915A';
        } else if (value < 10.0) {
          return '#0859F9';
        } else {
          return '#EE2B04';
        }
      });
    
      // Cria o gráfico com as cores correspondentes
      const ctx = document.getElementById('myChart02').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: months,
          datasets: [{
            label : 'TMA',
            data: tma,
            backgroundColor: colors,
          }]
        },
        options: {
          legend: { display: false },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                callback: function(value, index, values) {
                  return value + ' Minutos';
                }
              },
              scaleLabel: {
                display: true,
                labelString: 'Minutos'
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'TMA Mensal'
              }
            }]
          }
        }
      });
    });
    
    // Função para converter dados TSV em uma matriz
    function parseTSV(tsv) {
    return tsv.trim().split('\n').map(line => line.split('\t'));
    }