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
     name: 'dogs barking',
   },
   'h': {
    'audio': 'brunei.mp3',
    'video': 'img/brunei.mp4',
    name: 'brunei national anthem',
  },
    'i': {
     'audio': 'ocean.mp3',
     'video': 'img/ocean.mp4',
     name: 'ocean waves',
   },
     'j': {
      'audio': 'whispers.mp3',
      'video': 'img/whispers.mp4',
      name: 'inaudible whispers',
    },
    'k': {
     'audio': 'crowdscream.mp3',
     'video': 'img/crowdscream.mp4',
     name: 'loud crowd screaming',
    },
    'l': {
     'audio': 'china.mp3',
     'video': 'img/china.mp4',
     name: 'china national anthem',
    },
    'm': {
     'audio': 'waterfall.mp3',
     'video': 'img/waterfall.mp4',
     name: 'waterfall',
    },
    'n': {
     'audio': 'brushhair.mp4',
     'video': 'img/brushhair-vid.mp4',
     name: 'brushing through long hair',
    },
    'o': {
     'audio': 'alarm.mov',
     'video': 'img/alarm.mp4',
     name: 'apple alarm',
    },
    'p': {
     'audio': 'dominicanrep.mov',
     'video': 'img/dominicanrep.mp4',
     name: 'dominican republic national anthem',
    },
    'q': {
     'audio': 'boil.mp3',
     'video': 'img/boil.mp4',
     name: 'boiling water',
    },
    'r': {
     'audio': 'typing.mp3',
     'video': 'img/typing.mp4',
     name: 'typing on mechanical keyboard',
    },
    's': {
     'audio': 'forkscrape.mp3',
     'video': 'img/forkscrape.mp4',
     name: 'fork scraping on plate',
    },
    't': {
     'audio': 'egypt.mov',
     'video': 'img/egypt.mp4',
     name: 'egypt national anthem',
    },
    'u': {
     'audio': 'wind.wav',
     'video': 'img/wind.mp4',
     name: 'strong wind blowing',
    },
    'v': {
     'audio': 'poprocks.mp3',
     'video': 'img/poprocks.mp4',
     name: 'popping candy',
    },
    'w': {
     'audio': 'spoonbite.mp3',
     'video': 'img/spoonbite.mp4',
     name: 'spoon biting',
    },
    'x': {
     'audio': 'fiji.mp3',
     'video': 'img/fiji.mp4',
     name: 'fiji national anthem',
    },
    'y': {
     'audio': 'treerustle.mov',
     'video': 'img/treerustle.mp4',
     name: 'bamboo trees rustling',
    },
    'z': {
     'audio': 'woodtap.m4a',
     'video': 'img/woodtap.mp4',
     name: 'wood tapping',
    },
    '1': {
     'audio': 'burp.m4a',
     'video': 'img/burp.mp4',
     name: 'man burping loud',
    },
    '2': {
     'audio': 'ghana.mp3',
     'video': 'img/ghana.mp4',
     name: 'ghana national anthem',
    },
    '3': {
     'audio': 'treeswind.mp3',
     'video': 'img/treewind.mp4',
     name: 'trees blowing in wind',
    },
    '4': {
     'audio': 'sandraking.mp3',
     'video': 'img/sandraking.mp4',
     name: 'zen sand raking',
    },
    '5': {
     'audio': 'siren.mp3',
     'video': 'img/siren.mp4',
     name: 'hongkong police siren',
    },
    '6': {
     'audio': 'honduras.mov',
     'video': 'img/honduras.mp4',
     name: 'honduras national anthem',
    },
    '7': {
     'audio': 'singingbowl.wav',
     'video': 'img/singingbowl.mp4',
     name: 'tibetan singing bowl',
    },
    '8': {
     'audio': 'honeycomb.mov',
     'video': 'img/honeycomb.mp4',
     name: 'person chewing honeycomb',
    },
    '9': {
     'audio': 'stirmacaroni.wav',
     'video': 'img/stirmacaroni.mp4',
     name: 'stirring macaroni & cheese',
    },
    '0': {
     'audio': 'indonesia.mp3',
     'video': 'img/indonesia.mp4',
     name: 'indonesia national anthem',
    },
    '-': {
     'audio': 'droplet.mp3',
     'video': 'img/droplets.mp4',
     name: 'water droplets',
    },
    '=': {
     'audio': 'vibration.mp3',
     'video': 'img/vibration.mp4',
     name: 'large vibrations',
    },
    '[': {
     'audio': 'dishdrop.mp3',
     'video': 'img/dishdrop.mp4',
     name: 'dropping utensils',
    },
    ']': {
     'audio': 'japan.mov',
     'video': 'img/japan.mp4',
     name: 'japan national anthem',
    },

};

console.log(elements[0]);

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
    // elements[event.key].dataset.key = key;
    // key.dataset.key = event.key;
  videoContainer.append(vid);
}

let input = document.querySelector('input');
let audio = document.querySelector('audio');
let video = document.querySelector('video');
let name = document.querySelector('.category');
// let category = document.querySelector('.category');


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
    document.querySelector(".category").innerHTML = elements['name'];
    // category = data.category;
    // category.innerHTML = category;

    // category.src = data.category;
    // category.innerText = category;
    // cateogry.classList.add("cactive");

  }
}
document.addEventListener('keyup', keyEvent);

document.addEventListener("keyup", function(event){
// showPressed.classList.remove("press");

  if (event.key){
    showPressed.textContent = event.key;
    showPressed.classList.toggle("press");
  } // else {
  //   showPressed.classList.add("press");
  // }

})
