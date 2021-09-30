//MAGIC 8 BALL RESPONSE SCRIPT
let inputElement = document.querySelector("#input");
let result = document.querySelector("#result");
// let audio= 'negative.mp3';

//Create an ARRAY of possible responses. Separate each 'string' with a comma.
var responses = [
    'It Is Certain',
    'Buy It Now!!!',
    'Without A Doubt!!!',
    'Yes Definitely',
    'You May Rely On It',
    'As I See It, Yesss',
    'Most Likely',
    'Outlook Good',
    'Yes',
    'Signs Point To Yes!!!',
    'Reply Hazy, Try Again',
    'Ask Again Later',
    'Better Not Tell You Now',
    'Cannot Predict Now ;)',
    'Concentrate & Ask Again.',
]

var negResponses = [
    'Don’t Count On It',
    'Out Of Budget',
    'My Sources Say No',
    'Outlook Not So Good.',
    'Very Doubtful'
]

//Create a variable that randomly selects a positive whole between 0 and the number of total responses.
    // var randomResponse = responses[Math.floor(Math.random() * responses.length)];

//Select the HTML element with the id '#display' and replace its contents with the result of the randomResponse equation
    // document.querySelector('#result').innerHTML = randomResponse;

inputElement.addEventListener("keydown", function(event){

    if (event.key == "Enter"){

        let buy = inputElement.value;
        console.log(buy);

        // inputElement.value = "";

        for (let i = 0; i < 20; i++){

            console.log(i);

            let letter = buy[i];
            console.log(letter);


            if (["n", "s", "h", "r"].includes(letter)){
                var randomNegResponse = negResponses[Math.floor(Math.random() * negResponses.length)];
                document.querySelector('#result').innerHTML = randomNegResponse;

                document.body.style.background = "#420000";
                document.getElementById('input').style.backgroundColor = "#420000";
                document.getElementById('title').style.color = "#DE2424";
                document.getElementById('input').style.color = "#DE2424";
                document.getElementById('result').style.color = "#DE2424";

                document.getElementById('result').classList.add("adderror");
                // document.audio.play();

              }
            
            if (["a", "b", "c", "d", "e", "f", "g","i", "j", "k", "l", "m", "o", "p", "q", "t", "u", "v", "w", "x", "y", "z",].includes(letter)){
            var randomResponse = responses[Math.floor(Math.random() * responses.length)];
            document.querySelector('#result').innerHTML = randomResponse;

            document.body.style.background = "#E8F3F4";
            document.getElementById('input').style.backgroundColor = "#E8F3F4";
            document.getElementById('title').style.color = "#000000";
            document.getElementById('input').style.color = "#000000";
            document.getElementById('result').style.color = "#000000";
            
            }
        };
    };
});
