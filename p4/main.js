let showPressed = document.querySelector(".show-pressed");

let elements = {
  'a': {
   'audio': 'rainfall.mp3',
   'video': 'img/rainfall.mov',
 },
};

let input = document.querySelector('input');
let audio = document.createElement('audio');
let video = document.createElement('video');

function keyEvent(event) {
  if (event.key in Object.keys(elements)) {
    audio.pause();
    video.pause();
    video.classList.remove(".active");

    let data = elements[event.key];
    audio.src = data.audio;
    audio.play();

    video.src = data.video;
    video.play();
    video.classList.add(".active");

  }
}

document.addEventListener('keyup', keyEvent);

document.addEventListener("keyup", function(event){
    showPressed.innerText = event.key;

  if (event.key){
  showPressed.classList.toggle("press");
  } else {
    showPressed.classList.remove("press");
}
})
