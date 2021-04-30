let showPressed = document.querySelector(".show-pressed");

let elements = {
  'a': {
   'audio': 'rainfall.mp3',
   'video': 'img/rainfall.mp4',
 },
};

let input = document.querySelector('input');
let audio = document.createElement('audio');
let video = document.querySelector('video');

video.play();

function keyEvent(event) {
  if (event.key in elements) {
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
