const button = document.getElementById('button');
const card = document.getElementById('card');
const box = document.getElementById('box');

button.addEventListener('click', popupCard);

function popupCard(){
  setTimeout(
    function(){
      button.classList.toggle('hidden');
      card.classList.toggle('hidden');
      card.classList.toggle('flex');
    }, 150
  )
}

const play = document.getElementById('button-play');
const songWrapper = document.getElementById('song-wrapper');
play.addEventListener('click', playMusic);

function playMusic(){
  box.classList.toggle('animate-cardIn');
  box.classList.toggle('animate-cardOut');

  setTimeout(function(){
    card.classList.toggle('hidden');
    card.classList.toggle('flex');
  }, 450)
  setTimeout(function(){
    songWrapper.classList.toggle('hidden');
    songWrapper.classList.toggle('flex');
  }, 500)
}