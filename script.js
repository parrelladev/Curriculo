// <!-- Adicionando funcionalidade do modo noturno -->
function enableNightMode() {
    document.body.classList.add('night-mode');
    localStorage.setItem('nightMode', 'true');
  }
  
  function disableNightMode() {
    document.body.classList.remove('night-mode');
    localStorage.setItem('nightMode', 'false');
  }
  
  // Verifica se o modo noturno está ativado ao carregar a página
  if (localStorage.getItem('nightMode') === 'true') {
    enableNightMode();
  }
  
  // Alterna entre o modo noturno e o modo padrão ao clicar no botão
  const nightModeBtn = document.getElementById('night-mode-btn');
  nightModeBtn.addEventListener('click', () => {
    const nightModeEnabled = localStorage.getItem('nightMode') === 'true';
    if (nightModeEnabled) {
      disableNightMode();
    } else {
      enableNightMode();
    }
  });
  

// <!-- Adicionando funcionalidade do baixar currículo -->
function baixarArquivo() {
    var link = 'https://drive.google.com/file/d/1fJC9-v0DLuKVOTOiZTXRTI1Lrb9y8KNZ/view?usp=sharing'; // Insira o link do arquivo que deseja baixar aqui
    var nomeArquivo = 'curriculo_angelo_parrella.pdf'; // Insira o nome que deseja dar ao arquivo aqui
  
    var elementoLink = document.createElement('a');
    elementoLink.href = link;
    elementoLink.download = nomeArquivo;
  
    elementoLink.style.display = 'none';
    document.body.appendChild(elementoLink);
  
    elementoLink.click();
  
    document.body.removeChild(elementoLink);
  }

// <!-- Adicionando funcionalidade de ocultar fotos -->

$(window).resize(function () {
if (window.innerWidth < 768) {
    $(".imagem-responsiva").hide();
} else {
    $(".imagem-responsiva").show();
}
});