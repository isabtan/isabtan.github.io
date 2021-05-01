let showPressed = document.querySelector(".show-pressed");

let elements = {
  'a': {
   'audio': 'rainfall.mp3',
   'video': 'img/rainfall.mp4',
   // 'name': rainfall,
   // 'category': white nose,
 },
   'b': {
    'audio': 'slurping.mov',
    'video': 'img/slurping.mp4',
  },
  'c': {
   'audio': 'schoolbell.mp3',
   'video': 'img/schoolbell.mp4',
 },
   'd': {
    'audio': 'afghanistan.mp3',
    'video': 'img/afghanistan.mp4',
  },
    'e': {
     'audio': 'fireplace.mov',
     'video': 'img/fireplace.mp4',
   },
   'f': {
    'audio': 'cooking.mov',
    'video': 'img/cooking.mp4',
  },
    'g': {
     'audio': 'dogbarking.mp3',
     'video': 'img/dogbarking.mp4',
   },
   'h': {
    'audio': 'brunei.mp3',
    'video': 'img/brunei.mp4',
  },
    'i': {
     'audio': 'ocean.mp3',
     'video': 'img/ocean.mp4',
   },
     'j': {
      'audio': 'whispers.mp3',
      'video': 'img/whispers.mp4',
    },
    'k': {
     'audio': 'crowdscream.mp3',
     'video': 'img/crowdscream.mp4',
    },
    'l': {
     'audio': 'china.mp3',
     'video': 'img/china.mp4',
    },

};

let input = document.querySelector('input');
let audio = document.querySelector('audio');
let video = document.querySelector('video');
let name = document.querySelector('.des');
let category = document.querySelector('.category');

// document.addEventListener("mouseup", function(event){
//   let data = elements;
//   video.src = data.video;
//   video.play();
// })

// var videos = [];

// function showNoises() {
//   console.log("showNoises()");
//   videos.forEach(video => {

    //
    // var noiseContainer = document.createElement("div");
    // noiseContainer.classList.add("noise-container");
    // document.querySelector(".videos").append(noiseContainer);
    //
    //   var noiseVideos = document.createElement("video");
    //   noiseVideos.classList.add("noise-video");
    //   noiseVideos.src = data.video;
    //   noiseContainer.append(noiseVideos);
    //
    //   noiseVideos.play();
//   });
// }


  document.addEventListener('click', () => {
  console.log('display videos');

    video.play();
})


        // function showNoises() {
        //   videos.forEach(video => {
        //
        //     noiseVideos = document.createElement("video");
        //     noiseVideos.classList.add("noise-videos");
        //     document.querySelector(".videos").append(noiseVideos);
        //
        //     window.addEventListener("click", function(event) {
        //       video.play();
        //     });
        //   })
        // }

function keyEvent(event) {
  if (event.key in elements) {
    audio.pause();
    video.play();
    video.classList.remove("active");

    let data = elements[event.key];
    audio.src = data.audio;
    audio.play();

    video.src = data.video;
    video.play();
    video.classList.add("active");

    // category = data.category;
    // category.innerTextr = category;

    // category.src = data.category;
    // category.innerText = category;
    // cateogry.classList.add("cactive");

  }
}
document.addEventListener('keyup', keyEvent);

document.addEventListener("keyup", function(event){

  if (event.key){
    showPressed.textContent = event.key;
    showPressed.classList.toggle("press");
  }

})
