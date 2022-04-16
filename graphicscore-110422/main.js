let ready = false;

// let osc;
// let osc2;
// let lfo; // low frequency oscillator

let wave;

let scale;

// The master sequence
let sequence = [0, 1, 5, 4, 2, 6];

let track;
let track2;
let track3;

let gui;

let settings = {
  mixup: mixup,
  rotateLeft: rotateLeft,
  rotateRight: rotateRight,
  invert: invert,
  mutate: mutate,
  tempo: 60
};

// let synth;

// creates canvas to match browser size
function setup(){
    createCanvas(windowWidth, windowHeight);
    // osc = new Tone.Oscillator().toDestination(); //by default frequency tuned to 440hz --> A4
    //         //tone.master is basically speakers/output of sketch
    // osc.frequency.value = random(10, 90);  //220hz --> A3
    // osc2 = new Tone.Oscillator().toDestination();

    // // synth = new Tone.Synth().toDestination();
    // osc.type = 'sawtooth';
    // osc2.type = 'square';
    // // synth.type = 'sine';

    // lfo = new Tone.LFO("0.9hz", 30, 90);
    // lfo.connect( osc.frequency ); 

    // osc2.frequency.value = Math.floor(Math.random() * 100);
    // osc.frequency.value = Math.floor(Math.random() * 50);
    // console.log(osc.frequency.value);
    // console.log(osc2.frequency.value);
    gui = new dat.GUI();
    gui.add(settings, "mixup").name("Shuffle");
    gui.add(settings, "rotateLeft").name("Rotate left");
    gui.add(settings, "rotateRight").name("Rotate right");
    gui.add(settings, "invert").name("Invert");
    gui.add(settings, "mutate").name("Mutate");
    gui.add(settings, "tempo", 30, 240, 1).onChange(changeTempo);
  
    gui.width = 200;
    gui.close();
  
    scale = Tonal.Scale.get("a2 minor").notes;


    wave = new Tone.Waveform();
    
    Tone.Master.connect(wave); //conecct object to drive wave, connecting output of oscilator to inputof wave object

    Tone.Master.volume.rampTo(-2, 60); //change volume over x seconds

}

function changeTempo(newValue) {
    Tone.Transport.bpm.value = newValue;
  }

  // Place all the Tone.js initialization code here
function initializeAudio() {
    track = new Track(); // base sequence
    track2 = new Track(4, "8n", "8n"); // melody
    track3 = new Track(-7, "1n", "1n"); // bass
  
    let loop = new Tone.Loop(
      time => {
        // change our the sequence
        let options = [invert, mutate, rotateLeft, rotateRight, mixup];
        let choice = random(options);
        choice(); // apply the function to transform the sequence
      },
      "2m" // every 2 measures
    );
    loop.start("+2m"); // delay the start by 2 measures
  
    Tone.Transport.start();
    Tone.Master.volume.value = masterVolume;
  }
//when window resizes, update the canvas size
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}



// //main render loop
// function draw() {
//     background(0);

//     if (ready) {
//         drawWaveform(wave);
//     }
//     else {
//         fill('#F0F9FA');
//         noStroke();
//         textAlign(CENTER, CENTER);
//         // textFont('g2Erika');
//         text("OSCILLATOR TEST 2", width/2, height/2);
        
//     }
// }

// function drawWaveform(wave, w=width, h=height) {
//  //setting white stroke for waveform
//  stroke(255);
//  strokeWeight(2);
//  //inorder to access waveform we would need buffer
//  let buffer = wave.getValue(0); //an array of points along soundwave

//  // make wave fluctuate less, look for a trigger point where the samples are going from
//  // negative to positive
//  let start = 0;
//  for (let i=1; i < buffer.length; i++) {
//      if(buffer[i-1] < 0 && buffer[i] >= 0) {
//          start = i;
//          break; //interuppts a for loop
//      }
//  }

//      let end = start + buffer.length/2;
//  for (let i=start; i < end; i++) {

//      //
//      let x1 = map(i-1, start, end, 0, w); 
//      let y1 = map(buffer[i-1], -1, 1, 0, h); 

//      let x2 = map(i, start, end, 0, w); //mapping counter from left to right, from 0 and buffer.length and mapping it to 0 in width
//      let y2 = map(buffer[i], -1, 1, 0, h); //going to be a value between -1 and 1, and them mapping those to a number btwn 0 and height
     
//      //line(x1, y1, x2, y2);
//      point(x1, y1, x2, y2); //dots
//  }
// }
function draw() {
    if (ready) {
      background(0, 25);
  
      // uncomment these to draw the note numbers in the 'sequence' array
      noStroke();
      fill("#6BF003");
      textAlign(BOTTOM, BOTTOM);
      textSize(16);
      push();
      for (let i=0; i < sequence.length; i++) {
        text(sequence[i], 20, 40);
        translate(30, 0);
      }
      pop();
  
      // define the text size based on the window height
      let tSize = min(width, height) / 20;
  
      textSize(tSize);
      textAlign(CENTER, CENTER);
  
      translate(width / 2, height / 2);
      // let's draw the whole scale in a circle pattern
      for (let i = 0; i < scale.length; i++) {
        // calculate a position along a circle
        let angle = map(i, 0, scale.length, -PI / 2, TWO_PI - PI / 2);
        let radius = min(width, height) / 2.5;
        let x = cos(angle) * radius;
        let y = sin(angle) * radius;
  
        let noteName = Tonal.Note.pitchClass(scale[i]);
  
        if (noteName == Tonal.Note.pitchClass(track3.currentNote)) {
          stroke('#EBC21A');
         point(x, y, 0, 0);
          fill('#EBC21A');
          circle(x, y, 10);
       
        }
  
        if (noteName == Tonal.Note.pitchClass(track2.currentNote)) {
          stroke('#E81E31');
        //   line(x, y, 0, 0);
          fill('#E81E31');
          circle(x, y, 10);
        //   blendMode(OVERLAY);
        }
  
        if (noteName == Tonal.Note.pitchClass(track.currentNote)) {
          stroke('#9DD9E6');
        //   line(x, y, 0, 0);
          fill('#9DD9E6');
          circle(x, y, 10);
        //   blendMode(OVERLAY);
        }
  
        noStroke();
        fill('#E81E31');
        // // erase the background behind the note name
        // circle(x, y, tSize * 1.9);
        // fill(255);
        // text(noteName, x, y);
      }
  
      //text(track.currentNote, 0, 0);
    } else {
      background(0);
      fill(255);
      noStroke();
      textAlign(CENTER, CENTER);
      text("SEQUENCE TEST", width / 2, height / 2);
    }
  }
  function mapNote(noteNumber, scale) {
    let numNotes = scale.length;
    let i = modulo(noteNumber, numNotes);
    let note = scale[i];

    let octaveTranspose = floor(noteNumber / numNotes);
    let interval = Tonal.Interval.fromSemitones(octaveTranspose * 12);
    return Tonal.Note.transpose(note, interval);
  }

  function modulo(n, m) {
    return ((n % m) + m) % m;
  }


// function mousePressed() {
//     if (!ready) { // ! means not
//         // can start audio objects here cus clicked/is ready on text (else)
//         osc.start();
//         osc2.start();
//         // lfo.start();
//         // metal.start();
//         ready = true;
//         // synth.triggerAttackRelease(80, "8n"); //(frequency, duration of note/"innoten")
//     }
   
//     else {
//         ready = false;
//         osc.stop();
//         osc2.stop();
//         Tone.Transport.stop();
//       }
// }

function mousePressed() {
    if (!ready) {
      // ! means 'not'
      ready = true;
      initializeAudio();
    } else {
      // click again to start/stop...
      if (Tone.Transport.state == "paused") Tone.Transport.start();
      else if (Tone.Transport.state == "started") Tone.Transport.pause();
    }
  }

  class Track {
    // patternTypes:
    // "up" | "down" | "upDown" | "downUp" |
    // "alternateUp" | "alternateDown" |
    // "random" | "randomOnce" | "randomWalk"
  
    constructor(
      tranpose = 0,
      noteDuration = "8n",
      tempo = "8n",
      patternType = "randomWalk"
    ) {
      this.transpose = tranpose; // this will shift the sequence by a number of notes
  
      this.noteDuration = noteDuration;
  
      // the tempo can be entered as relative 'beat' measurements
      // eg: 4n -> quarter notes
      //     8n -> eight notes
      //     etc..
      this.tempo = tempo;
  
      // Every track gets its own synth
      this.synth = new Tone.Synth();
      this.synth.toDestination();
  
      // This is our repeating Pattern object
      this.pattern = new Tone.Pattern(
        // this is the 'callback' function, defined here as an anonymous
        // (ie 'on the fly') function
        (time, index) => {
          let note = mapNote(sequence[index] + this.transpose, scale);
          this.synth.triggerAttackRelease(note, this.noteDuration, time);
          this.currentNote = note;
        },
        // This array simply contains [0, 1, 2, 3, ...] etc
        Array.from(sequence.keys()),
        //  See above for different pattern type options
        patternType
      );
  
      this.pattern.interval = this.tempo;
      this.pattern.start();
  
      // This variable holds the current note being played. This is useful
      // for visualizatons
      this.currentNote;
    }
  }
  
  //------------------------------------------------------
  
  // shuffle the note in the sequence
  function mixup() {
    shuffle(sequence, true); // modify sequence in-place
  }
  
  function rotateLeft() {
    sequence = Tonal.Collection.rotate(1, sequence);
  }
  
  function rotateRight() {
    sequence = Tonal.Collection.rotate(-1, sequence);
  }
  
  function invert() {
    for (let i = 0; i < sequence.length; i++) {
      sequence[i] = scale.length - sequence[i];
    }
  }
  
  function mutate() {
    let i = floor(random(sequence.length));
    if (random(1) < 0.5) sequence[i]++;
    else sequence[i]--;
  }