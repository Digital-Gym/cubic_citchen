// Получение ссылок на элементы HTML
var playButton = document.getElementById('playButton');
var audioPlayer = document.getElementById('audioPlayer');

// Добавление слушателя события для клика на кнопке playButton
playButton.addEventListener('click', function(event) {
  event.preventDefault(); // Отмена стандартного действия ссылки

  // Проверка состояния аудиоплеера и выполнение соответствующих действий
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.classList.add('playing');
  } else {
    audioPlayer.pause();
    playButton.classList.remove('playing');
  }
});

// Установка громкости аудиоплеера
audioPlayer.volume = 0.3; // Значение от 0 до 1 (30% громкости)
