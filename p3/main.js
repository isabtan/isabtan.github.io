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


//
//LABEL SELECT DOTS - COUNTRY
//

let countryFilter = '';
function filterByCountry(event) {
  console.log(event)
  document.querySelectorAll('.ring').forEach(item=>{
    item.classList.remove('selected-ring')
    })
  // document.querySelector(`.ring#${event.target.dataset.country.toLowerCase()}`).classList.add('selected-ring');

  let dots = document.querySelectorAll('.cls-3');
  // was the same country clicked?
  if (countryFilter == event.target.dataset.country){
    document.querySelector(`.ring#${event.target.dataset.country.toLowerCase()}`).classList.remove('selected-ring');

    dots.forEach(function (dot){
      dot.classList.remove('highlight');
    })
    countryFilter = ''
  } else {
    // store currently filtered country
    countryFilter = event.target.dataset.country;
    // display country dots
    dots.forEach(function (dot){
      if (dot.dataset.country == countryFilter) {
        document.querySelector(`.ring#${event.target.dataset.country.toLowerCase()}`).classList.add('selected-ring');
        dot.classList.add('highlight');
      } else {
        dot.classList.remove('highlight');
      }
    });
  }
}
document.querySelectorAll('[data-country]').forEach((filter) => {
  filter.addEventListener('click', filterByCountry);
});
// document.querySelector('#rc-vt-2').addEventListener('click', filterByCountry);
// document.querySelector('#rc-th-2').addEventListener('click', filterByCountry);
// document.querySelector('#rc-sg-2').addEventListener('click', filterByCountry);
// document.querySelector('#rc-ph-2').addEventListener('click', filterByCountry);
// document.querySelector('#rc-my-2').addEventListener('click', filterByCountry);
// document.querySelector('#rc-laos-2').addEventListener('click', filterByCountry);
// document.querySelector('#rc-ind-2').addEventListener('click', filterByCountry);
// document.querySelector('#rc-tl-2').addEventListener('click', filterByCountry);
// document.querySelector('#rc-cam-2').addEventListener('click', filterByCountry);
// document.querySelector('#rc-bur-2').addEventListener('click', filterByCountry);
// document.querySelector('#rc-brunei-2').addEventListener('click', filterByCountry);


//
//LABEL SELECT DOTS - YEAR
//

let yearFilter = '';

function filterByYear(event) {
	console.log(event)
	document.querySelectorAll('.ring').forEach(item => {
		item.classList.remove('selected-ring')
	})

	let ydots = document.querySelectorAll('.ydot');
	// was the same country clicked?
	if (yearFilter == event.target.dataset.year) {
		document.querySelectorAll('.ring').forEach((ring) => ring.classList.remove('selected-ring'));

		ydots.forEach(function(ydot) {
			ydot.classList.remove('highlight');
		})
		yearFilter = ''
	} else {
		// store currently filtered year
		yearFilter = event.target.dataset.year;
		// display year ydots
		ydots.forEach(function(ydot) {
			if (ydot.dataset.year == yearFilter) {
				document.querySelectorAll('.ring').forEach((ring) => ring.classList.add('selected-ring'));

				ydot.classList.add('highlight');
			} else {
				ydot.classList.remove('highlight');
			}
		});
	}
}
document.querySelectorAll('#l-year').forEach((filter) => {
	filter.addEventListener('click', filterByYear);
});
// document.querySelector('#_1940').addEventListener('click', filterByYear);
// document.querySelector('#_1945').addEventListener('click', filterByYear);
// document.querySelector('#_1950').addEventListener('click', filterByYear);
// document.querySelector('#_1955').addEventListener('click', filterByYear);
// document.querySelector('#_1965').addEventListener('click', filterByYear);
// document.querySelector('#_1970').addEventListener('click', filterByYear);
// document.querySelector('#_1975').addEventListener('click', filterByYear);
// document.querySelector('#_1980').addEventListener('click', filterByYear);
// document.querySelector('#_1985').addEventListener('click', filterByYear);
// document.querySelector('#_1990').addEventListener('click', filterByYear);
// document.querySelector('#_1995').addEventListener('click', filterByYear);
// document.querySelector('#_2000').addEventListener('click', filterByYear);
// document.querySelector('#_2005').addEventListener('click', filterByYear);
// document.querySelector('#_2010').addEventListener('click', filterByYear);
// document.querySelector('#_2015').addEventListener('click', filterByYear);
// document.querySelector('#_2020').addEventListener('click', filterByYear);


//
// DOTS - INDIVIDUAL
//
// let countryFilter = '';
//
// function filterByDot(event) {
// 	console.log(event)
// 	document.querySelectorAll('.ring').forEach(item => {
// 		item.classList.remove('selected-ring')
// 	})
// 	// document.querySelector(`.ring#${event.target.dataset.country.toLowerCase()}`).classList.add('selected-ring');
//
// 	let sdots = document.querySelectorAll('.sdot');
// 	// was the same country clicked?
// 	if (countryFilter == event.target.dataset.country) {
// 		document.querySelector('.ring').classList.remove('selected-ring');
//
// 		sdots.forEach(function(sdot) {
// 			sdot.classList.remove('highlight');
// 		})
// 		countryFilter = ''
// 	} else {
// 		// store currently filtered country
// 		countryFilter = event.target.dataset.country;
// 		// display country sdots
// 		sdots.forEach(function(sdot) {
// 			if (sdot.dataset.country == countryFilter) {
// 				document.querySelector('.ring').classList.add('selected-ring');
// 				sdot.classList.add('highlight');
// 			} else {
// 				sdot.classList.remove('highlight');
// 			}
// 		});
// 	}
// }
// document.querySelectorAll('.sdot').forEach((filter) => {
// 	filter.addEventListener('click', filterByDot);
// });
