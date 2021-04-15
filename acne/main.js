let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let cellFusion = document.querySelector('.start');

function fuse(event) {
  //show modal for produce item only
  if (event.target.classList.contains('start')) {
    cellFusion.innerHTML = `<p></p>`;
    red.classList.add('go');
    blue.classList.add('go');
    }
  }


cellFusion.addEventListener("click", fuse);
