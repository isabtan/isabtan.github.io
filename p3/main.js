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
    coinYear.innerText = coin.fields.year;
    coinYear.dataset.year = coin.fields.year;
    coinDes.append(coinYear);

    var coinCountry = document.createElement("p");
    coinCountry.innerText = coin.fields.country;
    coinCountry.dataset.country = coin.fields.country;
    coinDes.append(coinCountry);

    var coinSize = document.createElement("p");
    coinSize.innerText = coin.fields.diameter_mm;
    coinSize.dataset.size = coin.fields.diameter_mm;
    coinDes.append(coinSize);

    var coinMass = document.createElement("p");
    coinMass.innerText = coin.fields.weight_g;
    coinMass.dataset.mass = coin.fields.weight_g;
    coinDes.append(coinMass);


//ZOOMED PIC - top right, large
//creating a new div container
    var coinZoom = document.createElement("div");
    coinZoom.classList.add("coin-zoompic");
    document.querySelector(".coinzoom").append(coinZoom);

    var coinImage = document.createElement("img");
    coinImage.src = coin.fields.image[0].url;

    coinZoom.append(coinImage);

  //MAIN PIC - inside, actual size
      var coinMain = document.createElement("div");
      coinMain.classList.add("coin-mainpic");
      document.querySelector(".coinmain").append(coinMain);

      var coinImageMain = document.createElement("img");
      coinImageMain.src = coin.fields.imagemain[0].url;
      //Mark Beasley 9:42 AM you would put this in your loop where you're creating your elements to add to your page
      coinImageMain.style.width = `${coin.fields.diameter}mm`;
      coinImageMain.style.height = `${coin.fields.diameter}mm`;
      coinMain.append(coinImageMain);

      //DANA KIMS DEMO
      // document.querySelectorAll('.cls-3').addEventListener("click", function(event) {
      // coinCointainer.classList.toggle("active");
      // coinDes.classList.toggle("active");
      // coinZoom.classList.toggle("active");
      // coinMain.classList.toggle("active");
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
		document.querySelectorAll(`.ring[data-year~="${event.target.dataset.year}"]`).forEach((ring) => ring.classList.remove('selected-ring'));

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

////////
///TEST SHOW DOTS
///////

    // function showMain(event) {
    //
    //   console.log(event)
    //   if (event.target.dataset.show).classList.toggle('active');

    //   //associate name

    //       coinCurrency.dataset.show = coin.fields.currency;
    //       coinYear.dataset.show = coin.fields.year;
    //       coinCountry.dataset.show = coin.fields.country;
    //       coinSize.dataset.show = coin.fields.diameter_mm;
    //       coinMass.dataset.show = coin.fields.weight_g;
    //       coinImage.dataset.show = coin.fields.image;
    //       coinImageMain.dataset.show = coin.fields.imagemain;
    //     }
    //   }
    //
    // document.querySelectorAll('.cls-3').addEventListener('click', showMain);
