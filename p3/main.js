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

                // //click
                  // document.querySelector(`.cls-3[data-detail~="${event.target.dataset.detail}"]`).addEventListener("click", function() {
                  //   console.log('hi');
                  //
                  //   let selectedDot = coins.find(coin => coin.fields.year == event.target.dataset.year && coin.fields.country == event.target.dataset.country);
                  //   console.log(selectedDot, 'was selected');
                  //
                  //   coinCurrency.classList.add("active");
                  //   coinYear.classList.add("active");
                  //   coinCountry.classList.add("active");
                  //   coinSize.classList.add("active");
                  //   coinMass.classList.add("active");
                  //   coinImage.classList.add("active");
                  //   coinImageMain.classList.add("active");
                  //
                  //   // associate year
                  //   coin.dataset.detail = coin.fields.currency;
                  // })
      // [data-currency="${coin.fields.currency}"]

          document.querySelectorAll(`.cls-3[data-year="${coin.fields.year}"][data-country~="${coin.fields.country}"][data-currency="${coin.fields.currency}"]`).forEach((dot) => {
    	dot.addEventListener("click", (event) => {
        coinCurrency.classList.toggle("active");
          coinYear.classList.toggle("active");
          coinCountry.classList.toggle("active");
          coinSize.classList.toggle("active");
          coinMass.classList.toggle("active");
          coinImage.classList.toggle("active");
          coinImageMain.classList.toggle("active");

          //node.textContent = text
          coinCurrency.textContent = coin.fields.currency;
          // coinImageMain.textContent = 'string';

          // associate year
          // coin.dataset.detail = coin.fields.currency;
    	});
    });

  });
}

                //after airtable and added class to coins (Mckayla session)
                //
                // $(document).ready(function(){
                //   $('#d-vt1').on('click', function(){
                //     $('#this-specific-coin').css('display', 'block');
                //   });
                // });
                //
                // <script>
                //     function addClass() {
                //         var v = document.getElementById("p");
                //         v.className += "addCSS";
                //     }
                // </script>

                // //click try again
                // function showDetail(event) {
                //   if (event.target.document.querySelector(`.cls-3[data-detail~="${event.target.dataset.detail}"]`)) {
                //       let selectedDot = coins.find(function (item) {
                //         if (coin.fields.currency == event.target.dataset.detail) {
                //           return true;
                //         }
                //       });
                //
                //     coinCurrency.classList.add('active');
                //   }
                // }
                //
                // function closeDetail() {
                //   coinCurrency.classList.remove('active');
                // }


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
document.querySelectorAll('#countryclick').forEach((filter) => {
  filter.addEventListener('click', filterByCountry);
});


//
//LABEL SELECT DOTS - YEAR
//

// Array.from(document.querySelectorAll(`.ydot`)).filter((dot) => Math.round(Number(dot.dataset.year) / 5 * 5) === DESIRED_YEAR)
	// let ydots = document.querySelectorAll('.ydot');

let yearFilter = '';

function filterByYear(event) {
	console.log(event)
	document.querySelectorAll('.ring').forEach(item => {
		item.classList.remove('selected-ring')
	})

	let ydots = document.querySelectorAll('.ydot');
	// was the same country clicked?
      //(Math.round(Number(ydot.dataset.year) / 5 * 5) == yearFilter)
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
