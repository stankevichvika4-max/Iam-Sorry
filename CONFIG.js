const CONFIGDATA = {
  titleHeader: " Привет, Янинский:3",
  descriptionHeader:
    "Я поступила не красиво, прости.</br> Мы можем встретиться вдвоём и всё обсудить?.",
  buttonYes: "да🥹",
  buttonNo: "нет🥺",
  titleModar: " :3.",
  descriptionModar:
    "спасибо, что позволишь объясниться. </br> <3",
};

// --- Код для убегающей кнопки ---
document.addEventListener('DOMContentLoaded', function() {
  const noBtn = document.getElementById('buttonNo');
  
  if (noBtn) {
    const moveBtn = function() {
      const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
      const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
      noBtn.style.position = 'fixed';
      noBtn.style.left = x + 'px';
      noBtn.style.top = y + 'px';
    };
    
    noBtn.addEventListener('mouseenter', moveBtn);
    noBtn.addEventListener('click', function(e) {
      e.preventDefault();
      moveBtn();
    });
    noBtn.addEventListener('touchstart', function(e) {
      e.preventDefault();
      moveBtn();
    });
  }
});
