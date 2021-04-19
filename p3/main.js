console.log("Heyy")

let Airtable = require("airtable");
// let coins = [...];
console.log(Airtable);

// use the airtable library to get a letiable that represents one of our bases
let base = new Airtable({ apiKey: "key5wwEidzHhQfxhP" }).base(
  "apph3atwfzwOuq1MK"
);

//get the "books" table from the base, select ALL the records(rows, every line is a rec), and specify the functions that will receive the data
base("coins").select({view: "Grid view"}).eachPage(gotPageOfCoins, gotAllCoins);

// an empty array to hold our book data
const coins = [];
let countryFilter = '';
let yearFilter = '';

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
  let dotFilter = '';
  coins.forEach((coin) => {

    //creating a new div container
    var coinContainer = document.createElement("div");
    coinContainer.classList.add("coin-container");
    document.querySelector(".coinname").append(coinContainer);

        // coin title/currency/name to coin container
        var coinCurrency = document.createElement("h2");
        coinCurrency.classList.add("coin-currency");
        coinCurrency.innerText = coin.fields.currency;
        coinContainer.append(coinCurrency);


    //creating a new div container
    var coinDes = document.createElement("div");
    coinDes.classList.add("coin-des");
    document.querySelector(".coininfo").append(coinDes);

        var coinYear = document.createElement("p");
        coinYear.classList.add("coin-year");
        coinYear.innerText = coin.fields.year;
        coinYear.dataset.year = coin.fields.year;
        coinDes.append(coinYear);

        var coinCountry = document.createElement("p");
        coinCountry.classList.add("coin-country");
        coinCountry.innerText = coin.fields.country;
        coinCountry.dataset.country = coin.fields.country;
        coinDes.append(coinCountry);

        var coinSize = document.createElement("p");
        coinSize.classList.add("coin-size");
        coinSize.innerText = coin.fields.diameter_mm;
        coinSize.dataset.size = coin.fields.diameter_mm;
        coinDes.append(coinSize);

        var coinMass = document.createElement("p");
        coinMass.classList.add("coin-mass");
        coinMass.innerText = coin.fields.weight_g;
        coinMass.dataset.mass = coin.fields.weight_g;
        coinDes.append(coinMass);

        var coinNumMob = document.createElement("h4");
        coinNumMob.classList.add("coin-nummob");
        coinMass.innerText = coin.fields.mobilenumber;
        coinDes.append(coinNumMob);

// this symbol: || = how js handles 'or'
//ZOOMED PIC - top right, large
//creating a new div container
    var coinZoom = document.createElement("div");
    coinZoom.classList.add("coin-zoom");
    document.querySelector(".coinzoom").append(coinZoom);

        var coinImage = document.createElement("img");
        coinImage.classList.add("coin-zoompic");
        coinImage.src = coin.fields.image[0].url;

        coinZoom.append(coinImage);

  //MAIN PIC - inside, actual size
      var coinMain = document.createElement("div");
      coinMain.classList.add("coin-main");
      document.querySelector(".coinmain").append(coinMain);

          var coinImageMain = document.createElement("img");
          coinImageMain.classList.add("coin-mainpic");
          coinImageMain.src = coin.fields.imagemain[0].url;
          coinImageMain.style.width = `${coin.fields.diameter}mm`;
          coinImageMain.style.height = `${coin.fields.diameter}mm`;
          coinMain.append(coinImageMain);

//////////////////////////////////////////////////////// MARK:
  document.querySelectorAll(`.cls-3[data-year="${coin.fields.year}"][data-country~="${coin.fields.country}"][data-currency="${coin.fields.currency}"]`).forEach((dot) => {
    dot.addEventListener("click", (event) => {
    // ... active coins loop here
        let activeCoins = document.querySelectorAll('.active');
        activeCoins.forEach((coin) => {
          coin.classList.remove('active');
        })  //ricky: year, dot, and ring turns white when coin selected
        document.querySelectorAll('.selected-year').forEach((item) => {
          item.classList.remove('selected-year')
        });
        document.querySelectorAll('.selected-ring').forEach((item) => {
          item.classList.remove('selected-ring')
        });
        document.querySelectorAll('.ydot').forEach(function (dot){
          dot.classList.remove('highlight');
        })
    if (dotFilter != event.target.dataset.currency) {
      // ... add active class to coins here
          let yearCategory = document.querySelector(`.fill_year[data-year="${Math.floor(Number(event.target.dataset.year) / 5) * 5}"]`)
          yearCategory.classList.add('selected-year');
          yearFilter = yearCategory;

          let countryCategory = document.querySelector(`.ring#${event.target.dataset.country.toLowerCase()}`)
          countryCategory.classList.add('selected-ring');
          countryFilter = countryCategory;

          event.target.classList.add('highlight');

          coinCurrency.classList.add("active");
          coinYear.classList.add("active");
          coinCountry.classList.add("active");
          coinSize.classList.add("active");
          coinMass.classList.add("active");
          coinImage.classList.add("active");
          coinImageMain.classList.add("active");

      dotFilter = event.target.dataset.currency;
    } else {
      // the else in this case is when dotFilter == event.target.dataset.currency
      dotFilter = ''; // clear our tracking variable
      // we don't have to do anything else since we've already removed `active` classes above...
    }
  });

    });
  });
}

//
//LABEL SELECT DOTS - COUNTRY
//

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
document.querySelectorAll('#countryclick').forEach((filter) => {
  filter.addEventListener('click', filterByCountry);
});


//
//LABEL SELECT DOTS - YEAR
//

// Array.from(document.querySelectorAll(`.ydot`)).filter((dot) => Math.round(Number(dot.dataset.year) / 5 * 5) === DESIRED_YEAR)
	// let ydots = document.querySelectorAll('.ydot');

function filterByYear(event) {
	console.log(event)
	document.querySelectorAll('.selected-ring').forEach(item => {
		item.classList.remove('selected-ring')
	})
  document.querySelectorAll('.selected-year').forEach((item) => {
    item.classList.remove('selected-year')
  });


	let ydots = document.querySelectorAll('.ydot');
    	// was the same country clicked?
      //Ricky:  (Math.round(Number(ydot.dataset.year) / 5 * 5) == yearFilter)
	if (yearFilter == event.target.dataset.year) {
    event.target.classList.remove('selected-year');
		document.querySelectorAll(`.ring[data-year~="${event.target.dataset.year}"]`).forEach((ring) => ring.classList.remove('selected-ring'));

		ydots.forEach(function(ydot) {
			ydot.classList.remove('highlight');
		})
		yearFilter = ''
	} else {
		// store currently filtered year
		yearFilter = event.target.dataset.year;
    event.target.classList.add('selected-year');
		// display year ydots
		ydots.forEach(function(ydot) {
			if (Math.floor(Number(ydot.dataset.year) / 5) * 5 == yearFilter) {
				document.querySelectorAll(`.ring[data-year~="${event.target.dataset.year}"]`).forEach((ring) => ring.classList.add('selected-ring'));

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


//
// MEDIA QUERY MOBILE TEST
//

// let mob = window.matchMedia('(max-width: 800px)');
//
// function mob(event) {
//   console.log(hello);
// }
