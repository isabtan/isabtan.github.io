console.log("Heyy")

let Airtable = require("airtable");
console.log(Airtable);

// use the airtable library to get a letiable that represents one of our bases
let base = new Airtable({ apiKey: "key5wwEidzHhQfxhP" }).base(
  "apph3atwfzwOuq1MK"
);

//get the "books" table from the base, select ALL the records(rows, every line is a rec), and specify the functions that will receive the data
base("coins").select({view: "Grid view"}).eachPage(gotPageOfCoins, gotAllCoins);

// an empty array to hold our book data
const coins = [];

// callback function that receives our data
function gotPageOfCoins(records, fetchNextPage) {
  console.log("gotPageOfCoins()");
  // add the records from this page to our array
  coins.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllCoins(err) {
  console.log("gotAllCoins()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading coins");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogCoins();
  showCoins();
}


// just loop through the books and console.log them
function consoleLogCoins() {
  console.log("consoleLogCoins()");
  coins.forEach((coin) => {
    console.log("Coin:", coin);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
// look through our airtable data, create elements
function showCoins() {
  console.log("showCoins()");
  coins.forEach((coin) => {

    var coinCurrency = document.createElement("h2");
    coinCurrency.innerText = coin.fields.currency;
    coinCurrency.dataset.currency = coin.fields.currency;
    document.body.append(coinCurrency);

    var coinYear = document.createElement("p");
    coinYear.innerText = coin.fields.year;
    coinYear.dataset.year = coin.fields.year;
    document.body.append(coinYear);

    var coinCountry = document.createElement("p");
    coinCountry.innerText = coin.fields.country;
    coinCountry.dataset.country = coin.fields.country;
    document.body.append(coinCountry);

    var coinSize = document.createElement("p");
    coinSize.innerText = coin.fields.diameter_mm;
    coinSize.dataset.size = coin.fields.diameter_mm;
    document.body.append(coinSize);

    var coinMass = document.createElement("p");
    coinMass.innerText = coin.fields.weight_g;
    coinMass.dataset.mass = coin.fields.weight_g;
    document.body.append(coinMass);

    var coinImage = document.createElement("img");
    coinImage.src = coin.fields.image[0].url;
    document.body.append(coinImage);
  });
}



//dots
//vietnam dots
function filterByViet(event) {
  let dots = document.querySelectorAll('.vt');
  dots.forEach(function (dot){
    if (dot.dataset.country == event.target.dataset.country) {
      dot.style.fill = 'black';
    } else {
      dot.style.fill = 'white';
    }
  });
}
document.querySelector('#rc-vt-2').addEventListener('click', filterByViet);

//thailand dots
function filterByThai(event) {
  let dots = document.querySelectorAll('.th');
  dots.forEach(function (dot){
    if (dot.dataset.country == event.target.dataset.country) {
      dot.style.fill = 'black';
    } else {
      dot.style.fill = 'white';
    }
  });
}
document.querySelector('#rc-th-2').addEventListener('click', filterByThai);

//singapore dots
function filterBySg(event) {
  let dots = document.querySelectorAll('.sg');
  dots.forEach(function (dot){
    if (dot.dataset.country == event.target.dataset.country) {
      dot.style.fill = 'black';
    } else {
      dot.style.fill = 'white';
    }
  });
}
document.querySelector('#rc-sg-2').addEventListener('click', filterBySg);

//philippines dots
function filterByPh(event) {
  let dots = document.querySelectorAll('.ph');
  dots.forEach(function (dot){
    if (dot.dataset.country == event.target.dataset.country) {
      dot.style.fill = 'black';
    } else {
      dot.style.fill = 'white';
    }
  });
}
document.querySelector('#rc-ph-2').addEventListener('click', filterByPh);

//malaysia dots
function filterByMy(event) {
  let dots = document.querySelectorAll('.my');
  dots.forEach(function (dot){
    if (dot.dataset.country == event.target.dataset.country) {
      dot.style.fill = 'black';
    } else {
      dot.style.fill = 'white';
    }
  });
}
document.querySelector('#rc-my-2').addEventListener('click', filterByMy);

//laos dots
function filterByLaos(event) {
  let dots = document.querySelectorAll('.laos');
  dots.forEach(function (dot){
    if (dot.dataset.country == event.target.dataset.country) {
      dot.style.fill = 'black';
    } else {
      dot.style.fill = 'white';
    }
  });
}
document.querySelector('#rc-laos-2').addEventListener('click', filterByLaos);

//indonesia dots
function filterByInd(event) {
  let dots = document.querySelectorAll('.ind');
  dots.forEach(function (dot){
    if (dot.dataset.country == event.target.dataset.country) {
      dot.style.fill = 'black';
    } else {
      dot.style.fill = 'white';
    }
  });
}
document.querySelector('#rc-ind-2').addEventListener('click', filterByInd);
