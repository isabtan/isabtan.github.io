let ready = false;

    // let progress
let osc;
let osc2;
let osc3;
let lfo; // low frequency oscillator
let lfo2;

let fr = 24;

let wave;
let wave2;
let wave3;
let wave4;
let wave5;
let wave6;

let colorPalleteXL;
let colorsXL = ["#D8CDEF", "#E1FFFF", "#FEEF97", "#FFC7D7", "#BFCE6F", "#95B3CD", "#BEEF00", "#2C2F23", "#E6E5D8", "#CE531E"];

let colorPalleteL;
let colorsL = ["#31187B", "#0013C1", "#FF9900", "#E21C57", "#034C03", "#C11100", "#220828", "#444936", "#F8FFDB"];

let colorPalleteM;
let colorsM = ["#E50D3F", "#3EBC97", "#FFD12C", "#FF008A", "#BEEF00", "#B62D0F", "#013240", "#60664C", "#FFFAD2"];

let colorPalleteS;
let colorsS = ["#7C21D6", "#24FBEE", "#FFFF00", "#FF65A5", "#00C901", "#F93822", "#EDA600", "#7B8462", "#FFF9CC"];

let colorPalleteXS;
let colorsXS = ["#95CFCF", "#D9ACD4", "#FF5448", "#F59740", "#CFDB2F", "#E0938B", "#C38AB5", "#959D7B", "#FFFBDB"];

let colorPalleteXXS;
let colorsXXS = ["#FFFFFF", "#EEE7DD", "#FFFAC0", "#FEDEF3", "#D1EC86", "#FCD8D8", "#E5F2F3", "#ACB399", "#FFFAE8"];

let waveType;
let waves = ["sine", "triangle", "sawtooth", "sine"];

let waveType2;
let waves2 = ["sine", "triangle", "sawtooth"];

let waveType3;
let waves3 = ["sine", "triangle", "sawtooth", "square"];

let randCol;



// creates canvas to match browser size
function setup(){
    createCanvas(windowWidth, windowHeight);
        // progress = map(osc.currentTime(), 0, osc.duration(), 255, 0);
    frameRate(fr);

    osc = new Tone.Oscillator().toDestination(); //by default frequency tuned to 440hz --> A4
    osc2 = new Tone.Oscillator().toDestination();
    osc3 = new Tone.Oscillator().toDestination();

    waveType = floor(random(0, 3));
    waveType2 = floor(random(0, 2));
    waveType3 = floor(random(0, 3));

    // var item = items[Math.floor(Math.random()*items.length)];

    osc.type = waves[waveType];
    osc2.type = waves2[waveType2];
    osc3.type = waves3[waveType3];

    lfo = new Tone.LFO(Math.floor(Math.random() * 300) + "hz", 0, 90);
    lfo.connect( osc.frequency );
    lfo.connect( osc3.frequency );

    lfo2 = new Tone.LFO(Math.floor(Math.random() * 30) + "hz", 30, 90);
    lfo2.connect( osc3.frequency );
    console.log(lfo2.min);
    console.log(lfo.output);

    osc2.frequency.value = Math.floor(Math.random() * 900);
    osc.frequency.value = Math.floor(Math.random() * 100);
    osc3.frequency.value = Math.floor(Math.random() * 350);
        console.log(osc.frequency.value);
        console.log(osc2.frequency.value);

   env = new Tone.Envelope({
		attack: 1.0,
		decay: 0.2,
		sustain: 0.5,
		release: 0.8,
	}).toDestination();


    wave = new Tone.Waveform();
    wave2 = new Tone.Waveform();
    wave3 = new Tone.Waveform();
    wave4 = new Tone.Waveform();
    wave5 = new Tone.Waveform();
    wave6 = new Tone.Waveform();
    console.log(wave);
    console.log(wave2);

    osc2.connect(wave); //conecct object to drive wave, connecting output of oscilator to inputof wave object
    osc2.connect(wave2);
    osc.connect(wave3);
    osc.connect(wave4);
    osc3.connect(wave5);
    osc3.connect(wave6);

    // Tone.Master.volume.value = -40 //change volume over 8 seconds rampTo(-2, 8);
    Tone.Master.volume.rampTo(-40, 3);

    colorPalleteXL = floor(random(0, 9));
    colorPalleteL = floor(random(0, 8));
    colorPalleteM = floor(random(0, 8));
    colorPalleteS = floor(random(0, 8));
    colorPalleteXS = floor(random(0, 8));
    colorPalleteXXS = floor(random(0, 8));

    env.connect(Tone.Master);
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

var counter = 0;
//main render loop
function draw() {
    background(0);

    if (ready) {
        counter+=1;


console.log(strokeWeight);
        stroke(colorsXL[colorPalleteXL]);
        // stroke("#2C2F23");
        console.log(colorsXL[colorPalleteXL]);
        // noLoop();

        strokeWeight(Math.floor(Math.random() * 230));
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
            // let y1 = map(buffer[i-1], -1, 1, 0, height);
            // let y1 = map(buffer[i-1], -1, 1, 110, 690);
            let y1 = map(buffer[i-1], -1, 1, 110, 890);

            let x2 = map(i, start, end, 0, width); //mapping counter from left to right, from 0 and buffer.length and mapping it to 0 in width
            let y2 = map(buffer[i], -1, 1, 0, height); //going to be a value between -1 and 1, and them mapping those to a number btwn 0 and height

            //line(x1, y1, x2, y2)
            point(x1, y1, x2, y2); //dots
            // elipse(x1, y1, x2, y2);
        }

        stroke(colorsL[colorPalleteL]);
        // stroke("#F8FFDB");
        console.log(colorsL[colorPalleteL]);
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
            // let y1 = map(buffer2[i-1], -1, 1, 95, 710);\
            let y1 = map(buffer2[i-1], -1, 1, 95, 910);

            let x2 = map(i, start, end2, 4, width); //mapping counter from left to right, from 0 and buffer2.length and mapping it to 0 in width
            let y2 = map(buffer2[i], -1, 1, 4, height); //going to be a value between -1 and 1, and them mapping those to a number btwn 0 and height

            point(x1, y1, x2, y2); //dots
        }

        // console.log(buffer2);

        stroke(colorsM[colorPalleteM]);
        // stroke("#FFFAD2");
        console.log(colorsM[colorPalleteM]);
        strokeWeight(Math.floor(Math.random() * 80));

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
            let y1 = map(buffer3[i-1], -1, 1, 80, 740);

            let x2 = map(i, start, end3, 8, width); //mapping counter from left to right, from 0 and buffer3.length and mapping it to 0 in width
            let y2 = map(buffer3[i], -1, 1, 8, height); //going to be a value between -1 and 1, and them mapping those to a number btwn 0 and height

            // line(x1, y1, x2, y2);
            point(x1, y1, x2, y2); //dots
            // // elipse(x1, y1, x2, y2);
        }

        stroke(colorsS[colorPalleteS]);
        // stroke("#FFF9CC");
        console.log(colorsS[colorPalleteS]);
        strokeWeight(Math.floor(Math.random() * 50));
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
            let x1 = map(i-1, start, end4, 24, width);
            // let y1 = map(buffer4[i-1], -1, 1, 100, 720);
            let y1 = map(buffer4[i-1], -1, 1, 120, 1000);

            let x2 = map(i, start, end4, 24, width); //mapping counter from left to right, from 0 and buffer4.length and mapping it to 0 in width
            let y2 = map(buffer4[i], -1, 1, 24, height); //going to be a value between -1 and 1, and them mapping those to a number btwn 0 and height

            point(x1, y1, x2, y2); //dots

        }

        stroke(colorsXS[colorPalleteXS]);
        // stroke("#FFFBDB");
        console.log(colorsXS[colorPalleteXS]);
        strokeWeight(Math.floor(Math.random() * 10));

        blendMode(DIFFERENCE);

        let buffer5 = wave5.getValue(1);

        for (let i=1; i < buffer5.length; i++) {
            if(buffer5[i-1] < 0 && buffer5[i] >= 0) {
                start = i;
                fr = 10;
      frameRate(fr);
                break; //interuppts a for loop
            }
        }

            let end5 = start + buffer5.length/2;
        for (let i=start; i < end; i++) {

            //
            let x1 = map(i-1, start, end5, -10, width);
            let y1 = map(buffer5[i-1], -1, 1, 0, height);

            let x2 = map(i, start, end5, 8, width); //mapping counter from left to right, from 0 and buffer5.length and mapping it to 0 in width
            let y2 = map(buffer5[i], -1, 1, 0, height); //going to be a value between -1 and 1, and them mapping those to a number btwn 0 and height

            // line(x1, y1, x2, y2);
            point(x1, y1, x2, y2); //dots
            // // elipse(x1, y1, x2, y2);
        }

        stroke(colorsXXS[colorPalleteXXS]);
        // stroke("#FFFAE8");
        console.log(colorsXXS[colorPalleteXXS]);
        strokeWeight(Math.floor(Math.random() * 10));
        // console.log(strokeWeight);
        blendMode(DIFFERENCE);

        let buffer6 = wave6.getValue(1);

        for (let i=1; i < buffer6.length; i++) {
            if(buffer6[i-1] < 0 && buffer6[i] >= 0) {
                start = i;
                fr = 10;
      frameRate(fr);
                break; //interuppts a for loop
            }
        }

            let end6 = start + buffer6.length/2;
        for (let i=start; i < end; i++) {

            //
            let x1 = map(i-1, start, end6, -10, width);
            let y1 = map(buffer6[i-1], -1, 1, 90, 680);

            let x2 = map(i, start, end6, 8, width); //mapping counter from left to right, from 0 and buffer6.length and mapping it to 0 in width
            let y2 = map(buffer6[i], -1, 1, 0, height); //going to be a value between -1 and 1, and them mapping those to a number btwn 0 and height

            // line(x1, y1, x2, y2);
            point(x1, y1, x2, y2); //dots
            // // elipse(x1, y1, x2, y2);
        }




    }
    else {
        fill(255);
        noStroke();
        textAlign(CENTER, CENTER);
        // textFont('regular');
        text("CLICK TO START DRONES", width/2, height/2);

        textAlign(LEFT);
        // text("osc1: " + osc.frequency.value + "hz" + ", " + osc.type, 30, 25);
        // text("osc2: " + osc2.frequency.value + "hz" + ", " + osc2.type, 30, 50);
        // text("osc3: " + osc3.frequency.value + "hz" + ", " + osc3.type, 30, 75);
        // text("lfo2: " + lfo2.value, 30, 100);
        text("OSC1: " + osc.frequency.value + "hz" + "    OSC2: " + osc2.frequency.value + "hz" + "    OSC3: " + osc3.frequency.value + "hz" + "    XL: " + colorsXL[colorPalleteXL] + "    L: " + colorsL[colorPalleteL] + "   M: " + colorsM[colorPalleteM] + "    S: " + colorsS[colorPalleteS] + "    XS: " + colorsXS[colorPalleteXS] + "    XXS: " + colorsXXS[colorPalleteXXS], width/60, height/1.03);
    
        // text(" l: " + colorsL[colorPalleteL], 30, 125);
        // text("   m: " + colorsM[colorPalleteM], 30, 150);
        // text("   s: " + colorsS[colorPalleteS], 30, 175);
        // text("   xs: " + colorsXS[colorPalleteXS], 30, 200);
        // text("  xxs: " + colorsXXS[colorPalleteXXS], 30, 225);
    }
    console.log(counter)
if(counter >= 4){
    ready = false;
    osc.stop();
    osc2.stop();
    lfo.stop();
        // lfo2.stop();
    Tone.Transport.stop();
    noLoop();
    }
}



function mousePressed() {
    if (!ready) { // ! means not

        // tremolo.start();
        osc.start();
        osc2.start();
        osc3.start();
        //eq3.start();
        lfo.start();
        lfo2.start();
        setTimeout(function(){
            ready = true;


        },150)
    }
    else {
        ready = false;
        osc.stop();
        osc2.stop();
        osc3.stop();
        lfo.stop();
        lfo2.stop();
        Tone.Transport.stop();
        noLoop();
      }
}
console.log(mousePressed);
