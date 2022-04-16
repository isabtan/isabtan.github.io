let ready = false;

let osc;
let osc2;
let lfo; // low frequency oscillator
// let reverb;
// let eq3;
// let tremolo;
let fr = 24;

let wave;
let wave2;
let wave3;
let wave4;


// creates canvas to match browser size
function setup(){
    createCanvas(windowWidth, windowHeight);
    frameRate(fr);
    // filter(BLUR, 3);
   
    // tremolo = new Tone.Tremolo(10, 1);
    // tremolo.toMaster(); 

    osc = new Tone.Oscillator().toDestination(); //by default frequency tuned to 440hz --> A4
    // osc.connect(reverb);
    // osc.connect(eq);
    // osc.connect(tremolo);
    osc2 = new Tone.Oscillator().toDestination();
    // osc2.connect(reverb);
    // osc2.connect(eq);
    // osc2.connect(tremolo);

    osc.type = 'sawtooth';
    osc2.type = 'square';

    // lfo = new Tone.LFO("0.9hz", 30, Math.floor(Math.random() * 10));
    // lfo.connect( osc.frequency ); 
    // console.log(lfo.frequency.value);

    osc2.frequency.value = Math.floor(Math.random() * 880);
    osc.frequency.value = Math.floor(Math.random() * 20);
        console.log(osc.frequency.value);
        console.log(osc2.frequency.value);

    // reverb = new Tone.Reverb(6).toDestination();
    //  eq3 = new Tone.EQ3(-50, -100, -100).toDestination();
    //  eq3.lowFrequency = 10;
    //  eq3.highFrequency = 50;
    //  osc2.connect(eq3);
    //  osc.connect(eq3);


    wave = new Tone.Waveform();
    wave2 = new Tone.Waveform();
    wave3 = new Tone.Waveform();
    wave4 = new Tone.Waveform();
    console.log(wave);
    console.log(wave2);

    // Tone.Master.connect(wave); //conecct object to drive wave, connecting output of oscilator to inputof wave object
    // Tone.Master.connect(wave2);
    // Tone.Master.connect(wave3);
    // Tone.Master.connect(wave4);
    osc2.connect(wave); //conecct object to drive wave, connecting output of oscilator to inputof wave object
    osc2.connect(wave2);
    osc.connect(wave3);
    osc.connect(wave4);

    // osc.connect(wave); //conecct object to drive wave, connecting output of oscilator to inputof wave object
    // osc2.connect(wave2);
    // lfo.connect(wave3);

    Tone.Master.volume.value = -40 //change volume over 8 seconds

}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}


//main render loop
function draw() {
    background(0);
    // filter(ERODE);


    if (ready) {
       
        //setting white stroke for waveform
        stroke("#A298EF");
        strokeWeight(Math.floor(Math.random() * 180));
        blendMode(DIFFERENCE);
        //inorder to access waveform we would need buffer
        let buffer = wave.getValue(0); //an array of points along soundwave
        

        let start = 0;
        for (let i=1; i < buffer.length; i++) {
            if(buffer[i-1] < 0 && buffer[i] >= 0) {
                start = i;
                fr = 10;
      frameRate(fr);
                break; //interuppts a for loop
            }
        }

            let end = start + buffer.length/2;
        for (let i=start; i < end; i++) {

            //
            let x1 = map(i-1, start, end, 0, width); 
            let y1 = map(buffer[i-1], -1, 1, 0, height); 

            let x2 = map(i, start, end, 0, width); //mapping counter from left to right, from 0 and buffer.length and mapping it to 0 in width
            let y2 = map(buffer[i], -1, 1, 0, height); //going to be a value between -1 and 1, and them mapping those to a number btwn 0 and height
            
            //line(x1, y1, x2, y2);
            point(x1, y1, x2, y2); //dots
            // elipse(x1, y1, x2, y2);
        }

        stroke("#E81E31");
        strokeWeight(Math.floor(Math.random() * 80));
        blendMode(DIFFERENCE);

        let buffer2 = wave2.getValue(1);

        for (let i=1; i < buffer2.length; i++) {
            if(buffer2[i-1] < 0 && buffer2[i] >= 0) {
                start = i;
                fr = 10;
      frameRate(fr);
                break; //interuppts a for loop
            }
        }

            let end2 = start + buffer2.length/2;
        for (let i=start; i < end; i++) {

            //
            let x1 = map(i-1, start, end2, 4, width); 
            let y1 = map(buffer2[i-1], -1, 1, 4, height); 

            let x2 = map(i, start, end2, 4, width); //mapping counter from left to right, from 0 and buffer2.length and mapping it to 0 in width
            let y2 = map(buffer2[i], -1, 1, 4, height); //going to be a value between -1 and 1, and them mapping those to a number btwn 0 and height
            
            // line(x1, y1, x2, y2);
            point(x1, y1, x2, y2); //dots
            // // elipse(x1, y1, x2, y2);
        }

        stroke("#EBC21A");
        strokeWeight(Math.floor(Math.random() * 30));
        blendMode(DIFFERENCE);

        let buffer3 = wave3.getValue(1);

        for (let i=1; i < buffer3.length; i++) {
            if(buffer3[i-1] < 0 && buffer3[i] >= 0) {
                start = i;
                fr = 10;
      frameRate(fr);
                break; //interuppts a for loop
            }
        }

            let end3 = start + buffer3.length/2;
        for (let i=start; i < end; i++) {

            //
            let x1 = map(i-1, start, end3, 8, width); 
            let y1 = map(buffer3[i-1], -1, 1, 8, height); 

            let x2 = map(i, start, end3, 8, width); //mapping counter from left to right, from 0 and buffer3.length and mapping it to 0 in width
            let y2 = map(buffer3[i], -1, 1, 8, height); //going to be a value between -1 and 1, and them mapping those to a number btwn 0 and height
            
            // line(x1, y1, x2, y2);
            point(x1, y1, x2, y2); //dots
            // // elipse(x1, y1, x2, y2);
        }

        stroke("#6321D6");
        strokeWeight(Math.floor(Math.random() * 10));
        blendMode(DIFFERENCE);

        let buffer4 = wave4.getValue(1);

        for (let i=1; i < buffer4.length; i++) {
            if(buffer4[i-1] < 0 && buffer4[i] >= 0) {
                start = i;
                fr = 10;
      frameRate(fr);
                break; //interuppts a for loop
            }
        }

            let end4 = start + buffer4.length/2;
        for (let i=start; i < end; i++) {

            //
            let x1 = map(i-1, start, end4, 12, width); 
            let y1 = map(buffer4[i-1], -1, 1, 12, height); 

            let x2 = map(i, start, end4, 12, width); //mapping counter from left to right, from 0 and buffer4.length and mapping it to 0 in width
            let y2 = map(buffer4[i], -1, 1, 12, height); //going to be a value between -1 and 1, and them mapping those to a number btwn 0 and height
            
            // line(x1, y1, x2, y2);
            point(x1, y1, x2, y2); //dots
            // // elipse(x1, y1, x2, y2);
        }

    }
    else {
        fill(255);
        // blendMode(DIFFERENCE);
        noStroke();
        textAlign(CENTER, CENTER);
        // textFont('g2Erika');
        text("OSCILLATOR TEST 3", width/2, height/2);
        
        
    }
}
console.log(fr);

function mousePressed() {
    if (!ready) { // ! means not
        
        // tremolo.start();
        osc.start();
        osc2.start();
        //eq3.start();
        // lfo.start();
        ready = true;
    }
    else {
        ready = false;
        osc.stop();
        osc2.stop();
        Tone.Transport.stop();
        noLoop();
      }
}

