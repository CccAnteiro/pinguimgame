var MaxHeight, MaxWidth, YPos, XPos, interval1, interval2, interval3, interval4, moveTo,TX, TX2, TY, TY2, TX3, TY3, Dist, Pontos;
function init(){
	TX = -295;
	TY = -215;
	TX2 = -364;
	TY2 = -317;
	TX3 = -420;
	TY3 = -580;
	Pontos = 0;
	YPos = -187;
	XPos = -56;
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
}
function move(){
	if ((YPos >= 0)||(YPos <= -700)||(XPos >= 0)||(XPos >= MaxHeight)) {
	    stop();
	}
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px  "+YPos + "px";
	Dist = Math.round(Math.sqrt(Math.pow((TX-XPos),2)+Math.pow((TY-YPos),2)));
	
if(Dist == 0)
		Score();
	document.getElementById("pos").innerHTML=toMove.style.backgroundPosition;
	document.getElementById("distancia").innerHTML='Proximo Tesouro a: ' + Dist;
	document.getElementById("Pontuação").innerHTML='Score:' + Pontos;
	}
function Score(){
		Pontos += 5;
	toMove = document.getElementById("scroller");
	if(Pontos == 5){
		TX = TX2;
		TY = TY2;
		stop();
}		
	else if(Pontos == 10){
		TX2 = TX3;
		TY2 = TY3;
		stop();
	alert('PARABENS! Passou ao proximo nivel.');
	}
	}
function moveBx() {
	var myclass = new Array('front-right','front-stand','front-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos--;        
	move();
};
function moveCm() {
	var myclass = new Array('back-right','back-stand','back-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos++;        
	move();
};
function moveDir() {
	var myclass = new Array('right-right','right-stand','right-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos--;        
	move();
};
function moveEsq() {
	var myclass = new Array('left-right','left-stand','left-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos++;        
	move();
};
function moveB() {
	stop(); 
	interval1 = setInterval(moveBx, 50);
};
function moveC() {
	stop();
	interval3 = setInterval(moveCm, 50);
};
function moveD() {
	stop();	
	interval2 = setInterval(moveDir, 50);
};
function moveE() {
	stop();
	interval4 = setInterval(moveEsq, 50);
};
function stop() {
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	clearInterval(interval4);
};
window.onload =init;
function Key(e) {
    if (e.keyCode===37) moveE();
    if (e.keyCode===38) moveC();
    if (e.keyCode===39) moveD();
    if (e.keyCode===40) moveB();
}