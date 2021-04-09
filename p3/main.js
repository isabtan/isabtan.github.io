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
//DOTS - COUNTRY
//

let countryFilter = '';
function filterByCountry(event) {
  let dots = document.querySelectorAll('.cls-3');
  // was the same country clicked?
  if (countryFilter == event.target.dataset.country){
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
        dot.classList.add('highlight');
      } else {
        dot.classList.remove('highlight');
      }
    });
  }
}
document.querySelector('#rc-vt-2').addEventListener('click', filterByCountry);
document.querySelector('#rc-th-2').addEventListener('click', filterByCountry);
document.querySelector('#rc-sg-2').addEventListener('click', filterByCountry);
document.querySelector('#rc-ph-2').addEventListener('click', filterByCountry);
document.querySelector('#rc-my-2').addEventListener('click', filterByCountry);
document.querySelector('#rc-laos-2').addEventListener('click', filterByCountry);
document.querySelector('#rc-ind-2').addEventListener('click', filterByCountry);
document.querySelector('#rc-tl-2').addEventListener('click', filterByCountry);
document.querySelector('#rc-cam-2').addEventListener('click', filterByCountry);
document.querySelector('#rc-bur-2').addEventListener('click', filterByCountry);
document.querySelector('#rc-brunei-2').addEventListener('click', filterByCountry);


//
//DOTS - YEAR
//

let yearFilter = '';
function filterByYear(event) {
  let ydots = document.querySelectorAll('.cls-3');
  // was the same country clicked?
  if (yearFilter == event.target.dataset.year){
    ydots.forEach(function (ydot){
      ydot.classList.remove('highlight');
    })
    yearFilter = ''
  } else {
    // store currently filtered year
    yearFilter = event.target.dataset.year;
    // display year ydots
    ydots.forEach(function (ydot){
      if (ydot.dataset.year == yearFilter) {
        ydot.classList.add('highlight');
      } else {
        ydot.classList.remove('highlight');
      }
    });
  }
}

document.querySelector('#_1940').addEventListener('click', filterByYear);
document.querySelector('#_1945').addEventListener('click', filterByYear);
document.querySelector('#_1950').addEventListener('click', filterByYear);
document.querySelector('#_1955').addEventListener('click', filterByYear);
document.querySelector('#_1965').addEventListener('click', filterByYear);
document.querySelector('#_1970').addEventListener('click', filterByYear);
document.querySelector('#_1975').addEventListener('click', filterByYear);
document.querySelector('#_1980').addEventListener('click', filterByYear);
document.querySelector('#_1985').addEventListener('click', filterByYear);
document.querySelector('#_1990').addEventListener('click', filterByYear);
document.querySelector('#_1995').addEventListener('click', filterByYear);
document.querySelector('#_2000').addEventListener('click', filterByYear);
document.querySelector('#_2005').addEventListener('click', filterByYear);
document.querySelector('#_2010').addEventListener('click', filterByYear);
document.querySelector('#_2015').addEventListener('click', filterByYear);
document.querySelector('#_2020').addEventListener('click', filterByYear);

/*
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

//timor-leste dots
function filterByTl(event) {
  let dots = document.querySelectorAll('.tl');
  dots.forEach(function (dot){
    if (dot.dataset.country == event.target.dataset.country) {
      dot.style.fill = 'black';
    } else {
      dot.style.fill = 'white';
    }
  });
}
document.querySelector('#rc-tl-2').addEventListener('click', filterByTl);

//cambodia dots
function filterByCam(event) {
  let dots = document.querySelectorAll('.cam');
  dots.forEach(function (dot){
    if (dot.dataset.country == event.target.dataset.country) {
      dot.style.fill = 'black';
    } else {
      dot.style.fill = 'white';
    }
  });
}
document.querySelector('#rc-cam-2').addEventListener('click', filterByCam);

//burma/myanmar dots
function filterByBur(event) {
  let dots = document.querySelectorAll('.bur');
  dots.forEach(function (dot){
    if (dot.dataset.country == event.target.dataset.country) {
      dot.style.fill = 'black';
    } else {
      dot.style.fill = 'white';
    }
  });
}
document.querySelector('#rc-bur-2').addEventListener('click', filterByBur);

//brunei dots
function filterByBr(event) {
  let dots = document.querySelectorAll('.br');
  dots.forEach(function (dot){
    if (dot.dataset.country == event.target.dataset.country) {
      dot.style.fill = 'black';
    } else {
      dot.style.fill = 'white';
    }
  });
}
document.querySelector('#rc-brunei-2').addEventListener('click', filterByBr);


//
//YEAR
//

//1950
function filterByY1950(event) {
  let ydots = document.querySelectorAll('.y1950');
  ydots.forEach(function (ydot){
    if (ydot.dataset.country == event.target.dataset.country) {
      ydot.style.fill = 'black';
    } else {
      ydot.style.fill = 'white';
    }
  });
}
document.querySelector('#_1950').addEventListener('click', filterByY1950);

//1955
function filterByY1955(event) {
  let ydots = document.querySelectorAll('.y1955');
  ydots.forEach(function (ydot){
    if (ydot.dataset.country == event.target.dataset.country) {
      ydot.style.fill = 'black';
    } else {
      ydot.style.fill = 'white';
    }
  });
}
document.querySelector('#_1955').addEventListener('click', filterByY1955);

//1965
function filterByY1965(event) {
  let ydots = document.querySelectorAll('.y1965');
  ydots.forEach(function (ydot){
    if (ydot.dataset.country == event.target.dataset.country) {
      ydot.style.fill = 'black';
    } else {
      ydot.style.fill = 'white';
    }
  });
}
document.querySelector('#_1965').addEventListener('click', filterByY1965);

//1970
function filterByY1970(event) {
  let ydots = document.querySelectorAll('.y1970');
  ydots.forEach(function (ydot){
    if (ydot.dataset.country == event.target.dataset.country) {
      ydot.style.fill = 'black';
    } else {
      ydot.style.fill = 'white';
    }
  });
}
document.querySelector('#_1970').addEventListener('click', filterByY1970);

//1975
function filterByY1975(event) {
  let ydots = document.querySelectorAll('.y1975');
  ydots.forEach(function (ydot){
    if (ydot.dataset.country == event.target.dataset.country) {
      ydot.style.fill = 'black';
    } else {
      ydot.style.fill = 'white';
    }
  });
}
document.querySelector('#_1975').addEventListener('click', filterByY1975);

//1980
function filterByY1980(event) {
  let ydots = document.querySelectorAll('.y1980');
  ydots.forEach(function (ydot){
    if (ydot.dataset.country == event.target.dataset.country) {
      ydot.style.fill = 'black';
    } else {
      ydot.style.fill = 'white';
    }
  });
}
document.querySelector('#_1980').addEventListener('click', filterByY1980);

//1985
function filterByY1985(event) {
  let ydots = document.querySelectorAll('.y1985');
  ydots.forEach(function (ydot){
    if (ydot.dataset.country == event.target.dataset.country) {
      ydot.style.fill = 'black';
    } else {
      ydot.style.fill = 'white';
    }
  });
}
document.querySelector('#_1985').addEventListener('click', filterByY1985);

//1990
function filterByY1990(event) {
  let ydots = document.querySelectorAll('.y1990');
  ydots.forEach(function (ydot){
    if (ydot.dataset.country == event.target.dataset.country) {
      ydot.style.fill = 'black';
    } else {
      ydot.style.fill = 'white';
    }
  });
}
document.querySelector('#_1990').addEventListener('click', filterByY1990);

//1995
function filterByY1995(event) {
  let ydots = document.querySelectorAll('.y1995');
  ydots.forEach(function (ydot){
    if (ydot.dataset.country == event.target.dataset.country) {
      ydot.style.fill = 'black';
    } else {
      ydot.style.fill = 'white';
    }
  });
}
document.querySelector('#_1995').addEventListener('click', filterByY1995);

//2000
function filterByY2000(event) {
  let ydots = document.querySelectorAll('.y2000');
  ydots.forEach(function (ydot){
    if (ydot.dataset.country == event.target.dataset.country) {
      ydot.style.fill = 'black';
    } else {
      ydot.style.fill = 'white';
    }
  });
}
document.querySelector('#_2000').addEventListener('click', filterByY2000);
*/
