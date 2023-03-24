//Carregar planilha do Google Sheets
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pubhtml';

function init() {
  Tabletop.init({
    key: public_spreadsheet_url,
    callback: showInfo,
    simpleSheet: true
  });
}

function showInfo(data, tabletop) {
  //Obter dados da planilha
  var emailCol = "Email";
  var senhaCol = "Senha";
  var emailInput = document.getElementById("email").value;
  var senhaInput = document.getElementById("senha").value;
  var dataFound = false;
  
  //Verificar se o email e a senha correspondem aos dados da planilha
  for (var i = 0; i < data.length; i++) {
    if (data[i][emailCol] === emailInput && data[i][senhaCol] === senhaInput) {
      dataFound = true;
      break;
    }
  }
  
  //Redirecionar usuário se o email e a senha correspondem aos dados da planilha
  if (dataFound) {
    window.location.href = "user.html";
  } else {
    alert("E-mail ou senha incorretos. Tente novamente.");
  }
}

document.addEventListener('DOMContentLoaded', init);
