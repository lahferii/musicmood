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
const imgWrapper = document.getElementById('img-wrapper');
const img = document.getElementById('img')
let lagu = new Audio('./dist/audio/lagu.mp3');

play.addEventListener('click', function(){
  box.classList.toggle('animate-cardIn');  
  
  setTimeout(function(){
    box.classList.toggle('animate-cardOut');
  }, 50)
  
  setTimeout(function(){
    card.classList.toggle('hidden');
    card.classList.toggle('flex');
    
  }, 500)
  setTimeout(function(){
    lagu.play();
    songWrapper.classList.toggle('hidden');
    songWrapper.classList.toggle('flex');
    imgWrapper.classList.toggle('animate-fadeIn');
    setTimeout(function(){
      img.classList.toggle('animate-pulse')
    }, 6500)
  }, 1000)

  setTimeout(function(){
    alert('dasar anak kontol')
    document.location = 'index.html'
  }, 29000)
});