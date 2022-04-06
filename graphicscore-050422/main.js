var editor = ace.edit('editor');

//make editor have a theme of black
editor.setTheme('ace/theme/monokai');

//set the mode of the editorr to be javascript
editor.getSession().setMode('ace/mode/javascript');

//make font size bigger
editor.setOptions({
    fontSize:'20pt'
});

//check if tone.js works, '3' means we can have a chord of 3 notes if we wanted to
//use a polysynth and not a regular synth because 
var vol = new Tone.Volume(-12).toMaster();
var polySynth = new Tone.PolySynth(3, Tone.FMSynth);
function go(){
    
}
