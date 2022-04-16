//because browsers cant just start blasting sound at user
let ready = false;

let osc;
let osc2;
let lfo; // low frequency oscillator
// let metal; //metal synth

let wave;
let wave2;

// let g2Erika;

// function preload() {
//     g2Erika = loadFont('G2-Erika-Mono.otf');
// }

// creates canvas to match browser size
function setup(){
    createCanvas(windowWidth, windowHeight);
    osc = new Tone.Oscillator().toDestination(); //by default frequency tuned to 440hz --> A4
            //tone.master is basically speakers/output of sketch
                // osc.connect(Tone.Master);
                // osc.toDestination(); //shorthand/synonnym for tone.master, last step in the chain
    osc.frequency.value = random(10, 90);  //220hz --> A3

    osc2 = new Tone.Oscillator().toDestination();
    osc.type = 'sawtooth';
    osc2.type = 'square';
    // osc2.frequency.value = random(90, 220);

    lfo = new Tone.LFO("0.9hz", 30, 90);
    lfo.connect( osc.frequency ); 

    osc2.frequency.value = Math.floor(Math.random() * 130);
    osc.frequency.value = Math.floor(Math.random() * 50);
    console.log(osc.frequency.value);
    console.log(osc2.frequency.value);
    // metal = new Tone.MetalSynth().toDestination();
    // metal.frequency.value = 800;
    //add reverb, 
    


    wave = new Tone.Waveform();
    wave2 = new Tone.Waveform();
    console.log(wave);
    console.log(wave2);
    // osc.connect(wave);
    // osc2.connect(wave);
    Tone.Master.connect(wave); //conecct object to drive wave, connecting output of oscilator to inputof wave object
    Tone.Master.connect(wave2);

    Tone.Master.volume.rampTo(-2, 8); //change volume over 8 seconds

}

//when window resizes, update the canvas size
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

// let g2Erika;

// function preload() {
//     g2Erika = loadFont('G2-Erika-Mono.otf');
// }



//main render loop
function draw() {
    background(0);

    if (ready) {
       
        //setting white stroke for waveform
        stroke(255);
        strokeWeight(3);
        //inorder to access waveform we would need buffer
        let buffer = wave.getValue(0); //an array of points along soundwave

        // make wave fluctuate less, look for a trigger point where the samples are going from
        // negative to positive
        let start = 0;
        for (let i=1; i < buffer.length; i++) {
            if(buffer[i-1] < 0 && buffer[i] >= 0) {
                start = i;
                break; //interuppts a for loop
            }
        }

            // drawing those waveforms/points using for loop
            //created end point so that we only draw a portion of the buffer, and so that the starting point doesnt jump left and right as much
            //draw same number of sample in each frame
            let end = start + buffer.length/2;
        for (let i=start; i < end; i++) {

            //
            let x1 = map(i-1, start, end, 0, width); 
            let y1 = map(buffer[i-1], -1, 1, 0, height); 

            let x2 = map(i, start, end, 0, width); //mapping counter from left to right, from 0 and buffer.length and mapping it to 0 in width
            let y2 = map(buffer[i], -1, 1, 0, height); //going to be a value between -1 and 1, and them mapping those to a number btwn 0 and height
            
            //line(x1, y1, x2, y2);
            point(x1, y1, x2, y2); //dots
        }
    }
    else {
        fill(255);
        noStroke();
        textAlign(CENTER, CENTER);
        // textFont('g2Erika');
        text("OSCILLATOR TEST 2", width/2, height/2);
        
    }
}


//important thing to know abt audio in the browser
//is that audio libraies r not gna start generating sounds
//and may behave strangely until there's user input (ex: clicking mouse)
function mousePressed() {
    if (!ready) { // ! means not

        // can start audio objects here cus clicked/is ready on text (else)
        osc.start();
        osc2.start();
        // lfo.start();
        // metal.start();
        ready = true;
    }
    else {
        ready = false;
        osc.stop();
        osc2.stop();
        Tone.Transport.stop();
      }
}

