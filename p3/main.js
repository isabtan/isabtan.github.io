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

function vietnam() {
  let allCoins = coinCountry.querySelectorAll('p');
  allCoins.forEach(function (coin){
    if (coinCountry.dataset.country.startsWith('V')){
      coinCountry.style.display = 'block';
    } else {
      coinCountry.style.display = 'none';
    }
  });
}

document.querySelector('#viet1').addEventListener('click', vietnam);
