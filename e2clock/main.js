var clockDiv = document.querySelector('.clock')
document.body.style.backgroundColor = 'black';

    
document.onmousemove = function mousePosition(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    let datex = new Date();
	let hoursx = datex.getHours();
	let minutesx = datex.getMinutes();
	let secondsx = datex.getSeconds();
	let clockk = hoursx + ':' + minutesx + ':' + secondsx;


    document.querySelector('#cont').insertAdjacentHTML('afterbegin', ` 
    
    <div class="clockk" style= "
    font-size: ${18}px;
    left:${x}px;  
    top:${y}px;
    ">${clockk}
    </div>  `);
}

document.onclick = function mousePosition(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    let datex = new Date();
	let hoursx = datex.getHours();
	let minutesx = datex.getMinutes();
	let secondsx = datex.getSeconds();
	let clockkgr = hoursx + ':' + minutesx + ':' + secondsx;


    document.querySelector('#cont').insertAdjacentHTML('afterend', ` 
    <div class="circle" style= "left:${x}px;  
    top:${y}px;"></div>
    <div class="clockkgr" style= "
    font-size: ${20}px;
    left:${x}px;  
    top:${y}px;
    ">  ${clockkgr}
    </div>  `);
}