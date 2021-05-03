let showPressed = document.querySelector(".show-pressed");

let elements = {
  'a': {
   'audio': 'rainfall.mp3',
   'video': 'img/rainfall.mp4',
    name: 'rainfall',
   // 'category': white nose,
 },
   'b': {
    'audio': 'slurping.mov',
    'video': 'img/slurping.mp4',
    name: 'woman slurping ramen',
  },
  'c': {
   'audio': 'schoolbell.mp3',
   'video': 'img/schoolbell.mp4',
   name: 'school bell ringing',
 },
   'd': {
    'audio': 'afghanistan.mp3',
    'video': 'img/afghanistan.mp4',
    name: 'afghanistan national anthem',
  },
    'e': {
     'audio': 'fireplace.mov',
     'video': 'img/fireplace.mp4',
     name: 'fireplace',
   },
   'f': {
    'audio': 'cooking.mov',
    'video': 'img/cooking.mp4',
    name: 'frying eggs',
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
    'm': {
     'audio': 'waterfall.mp3',
     'video': 'img/waterfall.mp4',
    },
    'n': {
     'audio': 'brushhair.mp4',
     'video': 'img/brushhair-vid.mp4',
    },
    'o': {
     'audio': 'alarm.mov',
     'video': 'img/alarm.mp4',
    },
    'p': {
     'audio': 'dominicanrep.mov',
     'video': 'img/dominicanrep.mp4',
    },
    'q': {
     'audio': 'boil.mp3',
     'video': 'img/boil.mp4',
    },
    'r': {
     'audio': 'typing.mp3',
     'video': 'img/typing.mp4',
    },
    's': {
     'audio': 'forkscrape.mp3',
     'video': 'img/forkscrape.mp4',
    },
    't': {
     'audio': 'egypt.mov',
     'video': 'img/egypt.mp4',
    },
    'u': {
     'audio': 'wind.wav',
     'video': 'img/wind.mp4',
    },
    'v': {
     'audio': 'poprocks.mp3',
     'video': 'img/poprocks.mp4',
    },
    'w': {
     'audio': 'spoonbite.mp3',
     'video': 'img/spoonbite.mp4',
    },
    'x': {
     'audio': 'fiji.mp3',
     'video': 'img/fiji.mp4',
    },
    'y': {
     'audio': 'treerustle.mov',
     'video': 'img/treerustle.mp4',
    },
    'z': {
     'audio': 'woodtap.m4a',
     'video': 'img/woodtap.mp4',
    },
    '1': {
     'audio': 'burp.m4a',
     'video': 'img/burp.mp4',
    },
    '2': {
     'audio': 'ghana.mp3',
     'video': 'img/ghana.mp4',
    },
    '3': {
     'audio': 'treeswind.mp3',
     'video': 'img/treewind.mp4',
    },
    '4': {
     'audio': 'sandraking.mp3',
     'video': 'img/sandraking.mp4',
    },

};

//MARK
let videoContainer = document.querySelector('.video-container');
// this will loop through each `key` of your elements object e.g. a, b, c
    //const just means you can reassign the variable, which you wouldn’t want to do in a loop anyway
for(let key in elements) {
  let vid = document.createElement('video');
  vid.loop = true;
  vid.autoplay = true;
  vid.muted = true;
  // access info from your object by using the key to access the values object
  vid.src = elements[key].video;
  // maybe assign the key as a data attribute so that later you can
  // filter your videos and find the video that represents each key (to add a class to expand it)
  vid.dataset.key = key;
  videoContainer.append(vid);
}

let input = document.querySelector('input');
let audio = document.querySelector('audio');
let video = document.querySelector('video');
let name = document.querySelector('.category');
// let category = document.querySelector('.category');




                    // document.addEventListener("mouseup", function(event){
                    //   let data = elements;
                    //   video.src = data.video;
                    //   video.play();
                    // })
                    //
                    // var videos = [];
                    //
                    // function showNoises() {
                    //   console.log("showNoises()");
                    //   videos.forEach(video => {
                    //
                    //
                    //     var noiseContainer = document.createElement("div");
                    //     noiseContainer.classList.add("noise-container");
                    //     document.querySelector(".videos").append(noiseContainer);
                    //
                    //       var noiseVideos = document.createElement("video");
                    //       noiseVideos.classList.add("noise-video");
                    //       noiseVideos.src = data.video;
                    //       noiseContainer.append(noiseVideos);
                    //
                    //       noiseVideos.play();
                    //   });
                    // }




// console.log(Object.getOwnPropertyNames(video));
//
// Object.getOwnPropertyNames(video));

    // const noiseVideos = elements['video'];
    // console.log(elements['video']);

            //JUST TO TEST, PROPERTY ACCESSOR?
  // document.querySelector(".videos").src = elements['video'];



// elements.display = "block";
// document.querySelectorAll(video in elements);


        //TEST1 ???
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

    document.querySelector(".category").classList.add("cactive");
    document.querySelector(".category").innerHTML = elements[name];
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
