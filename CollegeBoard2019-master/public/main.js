/* CANVASTITLE */
// UNHIDE CANVAS
document.getElementById("canvasTitle").style.display = "block";
document.getElementById("imagesTitle").style.display = "block";
// CANVAS SETUP
var canvasT = document.getElementById("canvasTitle");
var ctx = canvasT.getContext("2d");
//GLOBAL VAR
var rcv = canvasT.width - 15;
var bcv = canvasT.height - 20;
var tcv = 15;
var lcv = 15;
var pos = 0;
var increase = true;
// RESET VAR
rcv = canvasT.width - 15;
bcv = canvasT.height - 20;
tcv = 15;
lcv = 15;
pos = 0;
increase = true;

// Setting up Event Listener
var canvasTLeft = canvasT.offsetLeft;
var canvasTTop = canvasT.offsetTop;
var canvasTElements = [];
// AddEventListener for clicks
canvasT.addEventListener('click', function(event) {
    var x = event.pageX - canvasTLeft,
        y = event.pageY - canvasTTop;

    // Collision detection between clicked offset and element.
    canvasTElements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height 
            && x > element.left && x < element.left + element.width) {
            titleToMeteor();
        }
    });
}, false);

// START
function start(){
	if (document.getElementById("canvasTitle").style.display == "block"){
		drawBG();
		drawBorder();
	}
}
start();

// TEST
test();
function test(){
}

// DRAWING BORDER
function drawBorder(){
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.lineWidth = 10;
	ctx.rect(10, 10, rcv - 5, bcv)
	ctx.stroke();
}
function drawBG(){
	//CALLING FUNCTIONS
	bg();
	animateCLOUDS(rcv - 275, 30);
	drawMoon();
	drawMultipleStars();
	drawMountains();
	drawFLOOR();
	drawPlay();
	drawSign();	
	drawTitle();
}
function bg(){
	//BLUE BG
	ctx.beginPath();
	var grd = ctx.createLinearGradient(lcv + 600, tcv, rcv, bcv);
	grd.addColorStop(0, "#34495E");
	grd.addColorStop(1, "white");
	ctx.fillStyle = grd;
	ctx.fillRect(15, 15, canvasT.width - 30, canvasT.height - 30);
}
function drawTitle(){
	//TITLE TEXT
	ctx.beginPath();
	ctx.font = "50px Comic Sans MS";
	ctx.fillStyle = "red";
	ctx.strokeText("CollegeBoard2019!", canvasT.width/2 - ctx.measureText("CollegeBoard2019").width/2, canvasT.height/4 - 15);
}
function drawFLOOR(){
	/* FLOOR */
	// GREEN FLOOR OUTLINE
	ctx.beginPath();
	ctx.strokeStyle = "green";
	ctx.lineWidth = 10;
	ctx.moveTo(lcv, bcv - 50);
	ctx.quadraticCurveTo(rcv / 2, bcv - 100, rcv, bcv - 50);
	ctx.stroke();
	// CURVE FILL
	ctx.beginPath();
	ctx.fillStyle = "sandybrown";
	ctx.moveTo(lcv, bcv - 50);
	ctx.quadraticCurveTo(rcv / 2, bcv - 100, rcv, bcv - 50);
	ctx.fill();
	// FINISH RECT
	ctx.beginPath();
	ctx.fillStyle = "sandybrown";
	ctx.fillRect(lcv , bcv - 50, canvasT.width - 30, 55);
}
function animateCLOUDS(x , y){
	var cloud = document.getElementById('cloud');
	cloud.style.position = "absolute";
	cloud.style.top = y + 'px';
	cloud.style.left = x + 'px';
	pos = y;
  	setInterval(drawCLOUDS, 30);
  	function drawCLOUDS() {
		if(increase && pos<= 2*y){
			cloud.style.top = pos + 'px';
			pos++;
		}else if (!increase && pos >= y){
			cloud.style.top = pos + 'px';
			pos--;
		}else if (pos >= 2*y){
			increase = false;
			pos--;
		}else if (pos <= y) {
			increase = true;
			pos++;
		}
	}
}
function drawMoon(){
	var moon = document.getElementById('moon');
	moon.style.position = "absolute";
	moon.style.top = '30px';
	moon.style.left = '1165px';
}
function drawMultipleStars(){
	for(var s = 0; s <= 60; s++){
		//yellow stars
		var x = Math.floor(Math.random() * 1240) + 30;
 		var y = Math.floor(Math.random() * 315) + 45;
 		drawStars(3, x, y, "yellow");
 		//white stars
		var x = Math.floor(Math.random() * 1240) + 30;
 		var y = Math.floor(Math.random() * 315) + 45;
 		drawStars(3, x, y, "white");
	}
}
function drawStars(r, x, y, c){
	ctx.beginPath();
	ctx.strokeStyle = c;
	ctx.moveTo(x, y - r);
	ctx.lineTo(x + r/3, y - r/3);
	ctx.lineTo(x + r, y)
	ctx.lineTo(x + r/3, y + r/3);
	ctx.lineTo(x, y + r);
	ctx.lineTo(x - r/3, y + r/3);
	ctx.lineTo(x - r, y);
	ctx.lineTo(x - r/3, y - r/3);
	ctx.lineTo(x, y - r);
	ctx.stroke();
}
function drawMountains(){
	ctx.beginPath();
	ctx.fillStyle = "gray";
	ctx.moveTo(lcv, bcv);
	ctx.bezierCurveTo(lcv, 300, rcv, 300, rcv, bcv);
	ctx.fill();
	// Outline
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "brown";
	ctx.moveTo(lcv, bcv);
	ctx.bezierCurveTo(lcv, 300, rcv, 300, rcv, bcv);
	ctx.stroke();
}
function drawSign(){
	//left
	ctx.beginPath();
	ctx.fillStyle = "brown";
	ctx.fillRect(400, tcv, 10, 85);
	//outline
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "black";
	ctx.rect(400, tcv, 10, 85);
	ctx.stroke();
	//right
	ctx.beginPath();
	ctx.fillStyle = "brown";
	ctx.fillRect(875, tcv, 10, 85);
	//outline
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "black";
	ctx.rect(875, tcv, 10, 85);
	ctx.stroke();
	//center
	ctx.beginPath();
	ctx.fillStyle = "brown";
	ctx.fillRect(350, 100, 580, 100);
	//outline
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "black";
	ctx.rect(350, 100, 580, 100);
	ctx.stroke();
}
function drawPlay(){
	var posX = canvasT.width/2 - 60;
	var posY = canvasT.height/3;
	var width = 120;
	var height = 50;
	var color = "yellow";
	// push element to array
	canvasTElements.push({
	    colour: color,
	    width: width,
	    height: height,
	    top: posY,
	    left: posX
	});
	//center
	ctx.beginPath();
	ctx.fillStyle = "yellow";
	ctx.fillRect(canvasT.width / 2 - 60, canvasT.height / 3, 120, 50);
	//outline
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "black";
	ctx.rect(canvasT.width / 2 - 60, canvasT.height / 3, 120, 50);
	ctx.stroke();
	//play
	ctx.beginPath();
	ctx.font = "30px Comic Sans MS";
	ctx.strokeText("Play", canvasT.width/2 - ctx.measureText("Play").width/2, canvasT.height/3 + 35);
}
function titleToMeteor(){
	//hides titlecanvas
	document.getElementById("canvasTitle").style.display = "none";
	//hides images
	document.getElementById("imagesTitle").style.display = "none";
	//opens up secret canvas
	document.getElementById("canvasMeteor").style.display = "block";
	//opens up images
	document.getElementById("imagesMeteor").style.display = "block";
	document.getElementById("imagesHero").style.display = "block";
	/* var secretButton = document.getElementById("secret");
	secretButton.innerHTML = `<img id="moon"
		src="images/moon.png" style="width:100px" style="height:100px">`; */
	// no need to clear first canvas
	// can work on that later
	// RESET VARIABLES
	rcv = canvasM.width - 15;
	bcv = canvasM.height - 20;
	tcv = 15;
	lcv = 15;
	heroX = 0;
	heroY = 0;
	// resets up canvas m
	startM();
}

/* CANVASMETEOR */
// CANVAS SETUP
var canvasM = document.getElementById("canvasMeteor");
var ctxM = canvasM.getContext("2d");
//RESET VAR
rcv = canvasM.width - 15;
bcv = canvasM.height - 20;
tcv = 15;
lcv = 15;

var heroX = 0;
var heroY = 0;

// Setting up Event Listener
var canvasMLeft = canvasM.offsetLeft;
var canvasMTop = canvasM.offsetTop;
var canvasMElements = [];
// AddEventListener for clicks
canvasM.addEventListener('click', function(event) {
    var x = event.pageX - canvasMLeft,
        y = event.pageY - canvasMTop;

    // Collision detection between clicked offset and element.
    canvasMElements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height 
            && x > element.left && x < element.left + element.width) {
            meteorToTitle();
        }
    });
}, false);

//Functions
function startM (){
	if (document.getElementById("canvasMeteor").style.display == "block"){
		drawBGM();
		drawBorderM();
		drawHero();
	}
}

function drawBGM(){
	drawBackgroundM();
	drawBricks();
	drawSun();
	drawBack();
}
function drawBorderM(){
	ctxM.beginPath();
	ctxM.strokeStyle = "black";
	ctxM.lineWidth = 10;
	ctxM.rect(10, 10, rcv - 5, bcv)
	ctxM.stroke();
}
function drawBackgroundM(){
	ctxM.beginPath();
	ctxM.fillStyle = '#668cff';
	ctxM.fillRect(10, 10, canvasM.width - 15, canvasM.height - 20);
}
function drawBricks(){
	ctxM.beginPath();
	ctxM.fillStyle =  '#b3b3b3';
	ctxM.fillRect(lcv , bcv - 80, canvasM.width - 30, 85);
	ctxM.closePath();
	// border
	ctxM.beginPath();
	ctxM.strokeStyle = "black";
	ctxM.lineWidth = 5;
	ctxM.moveTo(lcv, bcv - 80);
	ctxM.lineTo(rcv, bcv - 80);
	ctxM.stroke();
	ctxM.closePath();
}

function drawSun(){
	var sun = document.getElementById('sun');
	sun.style.position = "absolute";
	sun.style.top = '30px';
	sun.style.left = '1125px';
}

function drawBack(){
	var posX = lcv + 20;
	var posY = tcv + 20;
	var width = 120;
	var height = 50;
	var color = "yellow";
	// push element to array
	canvasMElements.push({
	    colour: color,
	    width: width,
	    height: height,
	    top: posY,
	    left: posX
	});
	//center
	ctxM.beginPath();
	ctxM.fillStyle = "yellow";
	ctxM.fillRect(posX, posY, 120, 50);
	//outline
	ctxM.beginPath();
	ctxM.lineWidth = 5;
	ctxM.strokeStyle = "black";
	ctxM.rect(posX, posY, 120, 50);
	ctxM.stroke();
	//play
	ctxM.beginPath();
	ctxM.font = "30px Comic Sans MS";
	ctxM.strokeText("Back", posX + ctxM.measureText("Back").width/2 - 5, posY + 35);
}

function drawHero(){
	var brickLineWidth = 2.5;
	var hero = document.getElementById('hero');
	var heroWidth = hero.width;
	var heroHeight = hero.height;
	hero.style.position = "absolute";
	hero.style.left = heroX + rcv / 2 - 5 + 'px';
	hero.style.top = heroY + bcv -  80 - heroHeight + 6 + 'px';
	return hero;
}

function jumpHero(hero, heroWidth, heroHeight, jump){
	hero.style.position = "absolute";
	if (heroY < 0){
		if(increase && heroY >= 300){
			hero.style.top = heroY + bcv -  80 - heroHeight + 6 + 'px';
			heroY--;
		}else if (!increase && heroY <= 0){
			hero.style.top = heroY + bcv -  80 - heroHeight + 6 + 'px';
			heroY++;
		}else if (heroY <= 300){
			increase = false;
			heroY++;
		}else if (heroY >= 0) {
			increase = true;
			heroY--;
		}
	} else if (heroY == 0){
		clearInterval(jump);
		heroY = 0;
	}
}

function moveHero(e){
	if (document.getElementById("canvasMeteor").style.display == "block"){
		if (e.keyCode == 39) {
	        heroX+=20;
	        drawHero();
	    } //right arrow
	    else if (e.keyCode == 37) {
	        heroX-=20;
	        drawHero();
	    } //left arrow
	    else if (e.keyCode == 38 && heroY == 0) {
	        heroY-=20;
	       	var jump = setInterval(function() { jumpHero(hero, hero.width, hero.height, jump); }, 30);} 
			//up arrow
	    // else if (e.keyCode == 40) {
	    //     heroY+=20;
	    //     drawHero();
	    // } //down arrow
	}	
}

window.addEventListener("keydown", moveHero, false);

function meteorToTitle(){
	//opens titlecanvas
	document.getElementById("canvasTitle").style.display = "block";
	//opens images
	document.getElementById("imagesTitle").style.display = "block";
	//hides up meteor canvas
	document.getElementById("canvasMeteor").style.display = "none";
	//hides images
	document.getElementById("imagesMeteor").style.display = "none";
	document.getElementById("imagesHero").style.display = "none";

	// clears m canvas
	ctxM.clearRect(0, 0, canvasM.width, canvasM.height);
}