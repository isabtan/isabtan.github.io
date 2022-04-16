function setup() {
    createCanvas(400, 400);
    noStroke();
}

function draw() {
    background(255, 255, 255);
    fill(200, 200, 200);

    //size of cell
    var size = 25
    // distance between squares
    var margin = 40;
    //distance outside sqaures
    var oMargin = 10;
    //grid width and height outside sqaures
    var gw = 2;
    var gh = 10;

    // two for loops are needed to make a grid of squares
    // the outer loop controls how many rows are made
    // the inner loop controls how many columns are made
    for (let y = 0; y < gw; y++) {
        for (let x = 0; x < gh; x++) {
            rect(x * margin + oMargin, y * margin + oMargin, size, size);
        }
    }
}