const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');
const errorText = document.getElementById('error');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  const email = emailInput.value;
  const password = passwordInput.value;
  const pagina = "user.html"
  
  // Verifica se o email e a senha estão na planilha
  const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDrMhGzfj_Bja0Z-o68AgF2U_1bSum06dUcwmnnTovwQhLkI7JBf1O56GU_fpUl-Bb55sbbV61Mw2o/pubhtml?gid=0&single=true';
  const emailColumn = 0;
  const passwordColumn = 1;
  
  fetch(spreadsheetUrl)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const rows = doc.querySelectorAll('.waffle tr');
                
      let foundUser = false;
      for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].querySelectorAll('td');
        const emailInSheet = cells[emailColumn].textContent.trim();
        const passwordInSheet = cells[passwordColumn].textContent.trim();

        if(email === emailInSheet && password !== passwordInSheet) {
          errorText.textContent = 'Senha inválida.';
          foundUser = true;
          break;
        }

        if (email === emailInSheet && password === passwordInSheet) {
          foundUser = true;
          localStorage.setItem('user', email);
          console.log(localStorage.getItem('user'));
          window.location.href = pagina;
          break;
        }
      }

      if (!foundUser) {
        errorText.textContent = 'Usuário não encontrado.';
        setTimeout(() => {
          errorText.textContent = '';
        }, 3000);
      }
    })
    .catch(error => {
      console.error('Erro ao buscar planilha:', error);
      errorText.textContent = 'Erro ao buscar planilha.';
      setTimeout(() => {
        errorText.textContent = '';
      }, 3000);
    });
});
