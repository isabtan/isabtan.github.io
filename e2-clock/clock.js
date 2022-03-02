// // a variable stores data, like texts strings, console will spit back whatever we put tinside
// var hahaText = "haha";
// var numberx = 12.01;
// var objectx = {yo: 'lollol', number:'888'};

//     // similar to objectst, like a grouping of sorts
// var colorArray = ["red", "grey", "blue", "yellow", "orange"]

// var result = colorArray[Math.floor(Math.random()*colorArray.length)]
// // const is like a variable but u dont change it at all

// console.log(result);

// // to specify an Array, use square brakets and put the number u want to access inside the braket
// colorArray[0];

var datex = new Date();
var hoursx = datex.getHours();
var minutesx = datex.getMinutes();
var secondsx = datex.getSeconds();

function changeTimex(){
    var datex = new Date();
    var hoursx = datex.getHours();
    var minutesx = datex.getMinutes();
    var secondsx = datex.getSeconds();

    //creating text for HTML
    var clock = hoursx + ':' + minutesx + ':' + secondsx;

    clockDiv.innerHTML = clock +"<br>"
    

}

setInterval(function(){
//anything i put in here happens once every second
 changeTimex()
},1000)

// var datex = new Date();
// var hoursx = datex.getHours();
// var minutesx = datex.getMinutes();
// var secondsx = datex.getSeconds();

console.log(datex)
console.log(hoursx)
console.log(minutesx)
console.log(secondsx)


// 2 : 13 : 12
// hoursx ':' minutesx ':' secondsx
// console.log(hoursx + ':' + minutesx + ':' + secondsx)

    //creating text for HTML
// var clock = hoursx + ':' + minutesx + ':' + secondsx;

// var clockDiv = document.getElementById('clock')
// var clockDiv = document.getElementsByClassName('.clock')[0]

var clockDiv = document.querySelector('.clock')

// clockDiv.innerHTML = clock
// clockDiv.style.backgroundColor = "yellow"
document.body.style.backgroundColor = 'tan'
clockDiv.style.fontSize = Math.random() * 100 + "px"


console.log(clockDiv)

