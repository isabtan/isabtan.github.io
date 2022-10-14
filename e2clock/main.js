var clockDiv = document.querySelector('.clock')
document.body.style.backgroundColor = '#f1f1f1';

    
document.onmousemove = function mousePosition(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    let datex = new Date();
	let hoursx = ("00" + datex.getHours()).slice(-2);
	let minutesx = ("00" + datex.getMinutes()).slice(-2); 
	let secondsx = ("00" + datex.getSeconds()).slice(-2);
	// let clockk = hoursx + ':' + minutesx + ':' + secondsx;
    let clockk = hoursx + ':' + minutesx + ':' + secondsx;


    document.querySelector('#cont').insertAdjacentHTML('afterbegin', ` 
    
    <div class="clockk" style= "
    font-size: ${25}px;
    left:${x}px;  
    top:${y}px;
    ">${clockk}
    </div>  `);
}

document.onclick = function mousePosition(event) {
    let x = event.offsetX;
    let y = event.offsetY;


    document.querySelector('#cont').insertAdjacentHTML('afterbegin', ` 
    <div class="circle" style= "left:${x}px;  
    top:${y}px;"></div>`);
}