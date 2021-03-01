console.log('hi everyone~');

function openNav() {
  document.getElementById("body").style.display = "block";


  document.getElementById("start").style.opacity = "0";
}

var $win = $(window),
    w = 0,
    h = 0,
    opacity = 0.3,
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

$win.resize(getWidth).mousemove(function(e) {

    opacity = (e.pageX/w) * (e.pageY/h);
    $('h1').text(opacity);

    $('#bod').css('opacity',opacity);

}).resize();
