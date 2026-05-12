function playSong(url) {
  window.open(url, '_blank');
}

function openLetter() {
  document.getElementById('popup').classList.remove('hidden');
}

function closeLetter() {
  document.getElementById('popup').classList.add('hidden');
}