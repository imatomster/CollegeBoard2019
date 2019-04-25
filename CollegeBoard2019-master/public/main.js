/* JAVASCRIPT */

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
var booleanUse = true;
// RESET VAR
rcv = canvasT.width - 15;
bcv = canvasT.height - 20;
tcv = 15;
lcv = 15;
pos = 0;
increase = true;
booleanUse = true;

// Setting up Event Listener
var canvasTLeft = canvasT.offsetLeft;
var canvasTTop = canvasT.offsetTop;
var canvasTElements = [];


// EXTERNAL SOURCE : START
// https://stackoverflow.com/questions/5014851/get-click-event-of-each-rectangle-inside-canvas
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
// END


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
	drawInstructions();
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
	ctx.strokeText("Meteor Avalanche!", canvasT.width/2 - ctx.measureText("Meteor Avalanche!").width/2, canvasT.height/4 - 15);
}
function drawInstructions(){
	//TITLE TEXT
	ctx.beginPath();
	ctx.font = "50px Comic Sans MS";
	ctx.fillStyle = "red";
	ctx.strokeText("Instructions:", canvasT.width/2 - ctx.measureText("Instructions:").width/2, canvasT.height - 250);
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
	// push the button to the array
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
	document.getElementById("meteorSet").style.display = "none";

	// RESET VARIABLES
	rcv = canvasM.width - 15;
	bcv = canvasM.height - 20;
	tcv = 15;
	lcv = 15;
	heroX = 0;
	heroY = 0;
	booleanUse = true;
	// resets up canvas m
	startM();
}

/* CANVASMETEOR */
// CANVAS SETUP
var canvasM = document.getElementById("canvasMeteor");
var ctxM = canvasM.getContext("2d");
// NEW VAR
var heroX = 0;
var heroY = 0;
var collisionCheck = false;
var meteorList = [];
// EXTERNAL SOURCE : START
// https://stackoverflow.com/questions/5014851/get-click-event-of-each-rectangle-inside-canvas
// AddEventListener for clicks
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
// END

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
	drawMeteorText();
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

function drawMeteorText(){
	if (booleanUse == true){
		ctxM.beginPath();
		ctxM.font = "50px Comic Sans MS";
		ctxM.strokeStyle = "yellow";
		ctxM.strokeText("Click Anywhere to Start!", 
			rcv/2 - ctxM.measureText("Click Anywhere to Start!").width/2,
			bcv/2 - 75);
	}
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
	// Sets the css to absolute so that the image can move on the canvas
	hero.style.position = "absolute";
	// begins if function with the "heroY" being the main determining var
	if (heroY < 0){
		// Increase is like a switch which tells whether or not to raise "heroY"
		if(increase && heroY >= -30){
			// the highest jump point is 30 px off the ground 
			// If the hero has not reached its highest jump point then shift the top position pixel up
			hero.style.top = heroY + bcv -  80 - heroHeight + 6 + 'px';
			heroY--;
		}else if (!increase && heroY <= 0){
			// If the hero has reached its highest jump point then shift the top position pixel down
			hero.style.top = heroY + bcv -  80 - heroHeight + 6 + 'px';
			heroY++;
		}else if (heroY <= -30){
			// if the hero is at its high, flip the increase switch to fall back down
			increase = false;
			heroY++;
		}
	// If the hero is back on the ground (heroY = 0) then end the interval and the jump is over	
	} else if (heroY == 0){
		clearInterval(jump);
		heroY = 0;
	}
}

function moveHero(e){
	if (document.getElementById("canvasMeteor").style.display == "block"){
		let tempX = heroX + rcv / 2 + 70 + 20
		let tempX2 = heroX + rcv / 2 - 30

		// when right arrow key is pressed
		if (e.keyCode == 39) {
			if (tempX < rcv){
		        heroX+=20;
		        drawHero();
		    }
	    }
	    // when left arrow key is pressed
	    else if (e.keyCode == 37) {
	        if (tempX2 > lcv){
		        heroX-=20;
		        drawHero();
		    }
	    }
	    // when up arrow key is pressed
	    else if (e.keyCode == 38 && heroY == 0) {
	    	increase = true;
	        heroY-=1;
	       	var jump = setInterval(function() { 
	       		jumpHero(hero, hero.width, hero.height, jump); }, 
	       		10);} 
	}	
}

window.addEventListener("keydown", moveHero, false);


canvasM.addEventListener('click', engageMeteor, false);

function engageMeteor (){
	if (booleanUse == true){
		cleanCanvas();
		spawnMeteor();
	}
}

function cleanCanvas(){
	booleanUse = false;
	ctxM.clearRect(0, 0, canvasM.width, canvasM.height);
	startM();
}

function spawnMeteor(){
	for (let i = 0; i < 10; i++) {
		drawMeteor(i);
	}
}


function drawMeteor(id) {
	var meteorSet = document.getElementById('meteorSet');
	meteorSet.style.display = "block";
	meteorSet.innerHTML += `<img id="meteor${id}"
						src="images/meteor.png">`
	var meteor = document.getElementById(`meteor${id}`); 

	var k = Math.floor(Math.random() * 20) + 10;
	var x = Math.floor(Math.random() * 850) + 100;
	var y = 0;
	var mPixel = Math.floor(Math.random() * 150) + 50;

	meteor.style.display = "block";
	meteor.style.position = "absolute";
	meteor.style.width = mPixel + 'px';
	meteor.style.height = mPixel + 'px';
	meteor.style.left = x + 'px';
	meteor.style.top = y + 'px';
	meteor.style.zIndex = 20;
	meteor.style.opacity = 0;

	meteorList[id] = setInterval(fallMeteor, k);
	function fallMeteor() {
		var meteor = document.getElementById(`meteor${id}`)
		if(y < 720){
			// moves it down screen
			y++;
			meteor.style.top = y + 'px';

			//fade in
			if (y == 2){
				fadeIn();
				function fadeIn() {
					meteor.style.opacity = 0;
				    var fadeTop = setInterval(function () {
				        if (meteor.style.opacity < 1) {
				            meteor.style.opacity -= -0.1;
				        } else {
				            clearInterval(fadeTop);
				        }
				    }, 60);
				}
			}

			// fade out
			if (y == 525){
				fadeOut();
				function fadeOut() {
				    meteor.style.opacity = 1;
				    var fadeBot = setInterval(function () {
				        if (meteor.style.opacity > 0) {
				            meteor.style.opacity -= 0.1;
				        } else {
				            clearInterval(fadeBot);
				        }
				    }, 60);
				}
			}
		}else if (y == 720){
			y = 0;
			mPixel = Math.floor(Math.random() * 150) + 50;
			x = Math.floor(Math.random() * 850) + 100;
			meteor.style.width = mPixel + 'px';
			meteor.style.height = mPixel + 'px';
			meteor.style.left = x + 'px';
		}

		collisionCheck = checkCollide(hero, meteor);
		if (collisionCheck == true){
			gameOver();
			document.getElementById("meteorSet").innerHTML = "";
			for(let i = 0; i < 10; i++){
				clearInterval(meteorList[i]);
			}
			// clearInterval(commenceMeteor);
		}
	}
}

// EXTERNAL SOUCE: START
// https://stackoverflow.com/questions/13916966/adding-collision-detection-to-images-drawn-on-canvas
function checkCollide(a, b){
	if (a.x < b.x + b.width && a.x + a.width > b.x
        && a.y < b.y + b.height / 4 && a.y + a.height > b.y) {
        return true;
	}
}
// END

function gameOver(){
	// Draw gameover
	ctxM.beginPath();
	ctxM.font = "100px Comic Sans MS";
	ctxM.strokeStyle = "yellow";
	ctxM.strokeText("Game Over!", 
		rcv/2 - ctxM.measureText("Game Over!").width/2,
		bcv/2 - 75);


	setTimeout(function() { 
		meteorToTitle();
	} , 5000)
}


function meteorToTitle(){
	collisionCheck = true;
	booleanUse = false;

	// Clear the Array for the Meteors
	for(let i = 0; i < 10; i++){
		clearInterval(meteorList[i]);
	}
	meteorList = [];


	//opens titlecanvas
	document.getElementById("canvasTitle").style.display = "block";
	//opens images
	document.getElementById("imagesTitle").style.display = "block";
	//hides up meteor canvas
	document.getElementById("canvasMeteor").style.display = "none";
	//hides images
	document.getElementById("imagesMeteor").style.display = "none";
	document.getElementById("imagesHero").style.display = "none";

	document.getElementById("meteorSet").style.display = "none";
	// clears m canvas
	ctxM.clearRect(0, 0, canvasM.width, canvasM.height);
}