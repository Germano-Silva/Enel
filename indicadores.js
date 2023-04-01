//indicadores
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


let resolution = [];

fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pub?gid=381885766&single=true&output=tsv')
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
        mediaElement.style.color = 'green';
        pt.style.color = 'green';
        es.style.color = 'green';
      } else if (media >= 8.0 && media < 10.0) {
        mediaElement.style.color = 'yellow';
        pt.style.color = 'yellow';
        es.style.color = 'yellow';
      } else {
        mediaElement.style.color = 'red';
        pt.style.color = 'red';
        es.style.color = 'red';
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
      return 'green';
    } else if (value < 10.0) {
      return 'yellow';
    } else {
      return 'red';
    }
  });

  // Cria o gráfico com as cores correspondentes
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [{
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
          return 'green';
        } else if (value < 10.0) {
          return 'yellow';
        } else {
          return 'red';
        }
      });
    
      // Cria o gráfico com as cores correspondentes
      const ctx = document.getElementById('myChart01').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: months,
          datasets: [{
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
          return 'green';
        } else if (value < 10.0) {
          return 'yellow';
        } else {
          return 'red';
        }
      });
    
      // Cria o gráfico com as cores correspondentes
      const ctx = document.getElementById('myChart02').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: months,
          datasets: [{
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