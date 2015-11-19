//////////////////////////////////////////////////
//////////INIT
//////////////////////////////////////////////////
window.onload=function init() {
var logo = document.getElementById("exclamationMark"),
	frame1textA = document.getElementById("frame1textA"),
	frame1textB = document.getElementById("frame1textB"),
	frame1textC = document.getElementById("frame1textC"),
	frame2textA = document.getElementById("frame2textA"),
	frame2textB = document.getElementById("frame2textB"),
	frame2textC = document.getElementById("frame2textC"),
	frame3textA = document.getElementById("frame3textA"),
	frame3textB = document.getElementById("frame3textB"),
	frame3textC = document.getElementById("frame3textC"),
	frame3textD = document.getElementById("frame3textD"),
	frame3textE = document.getElementById("frame3textE"),
	frame3textF = document.getElementById("frame3textF"),
	frame4textA = document.getElementById("frame4textA"),
	frame4textB = document.getElementById("frame4textB"),
	frame4textC = document.getElementById("frame4textC"),
	frame5 = document.getElementById("frame5text"),
	frame6 = document.getElementById("frame6text"),
	frame7 = document.getElementById("frame7text"),
	animatedOrangeBox = document.getElementById("animatedOrangeBox"),
	animatedDarkOrangeBox = document.getElementById("animatedDarkOrangeBox"),
	frame6logo = document.getElementById("frame6logo"),
	frame6textA = document.getElementById("frame6textA"),
	frame6textB = document.getElementById("frame6textB"),
	frame6textC = document.getElementById("frame6textC"),
	frame6textD = document.getElementById("frame6textD"),
	frame6textE = document.getElementById("frame6textE"),
	frame6textF = document.getElementById("frame6textF"),
	frame7headA = document.getElementById("frame7headA"),
	frame7headB = document.getElementById("frame7headB"),
	frame7headC = document.getElementById("frame7headC"),
	frame7headD = document.getElementById("frame7headD"),
	frame7headE = document.getElementById("frame7headE"),
	frame7headF = document.getElementById("frame7headF"),
	frame7textA = document.getElementById("frame7textA"),
	frame7textB = document.getElementById("frame7textB"),
	frame7textC = document.getElementById("frame7textC"),
	frame7textD = document.getElementById("frame7textD"),
	disclaimer = document.getElementById("disclaimer"),
	frame7Logo = document.getElementById("frame7Logo");
	EmarkScaleIn();
	EmarkFadeIn2();/**/
    eventOne(); 
}

//////////////////////////////////////////////////

    
//////////////////////////////////////////////////
//////////Question Mark FUNCTIONS
//////////////////////////////////////////////////
function EmarkScaleIn() {
    	TweenLite.from(exclamationMark, 7.7, {scaleX: 6, scaleY: 6, y:"0", x:"0", force3D:true});
		}
function EmarkFadeIn1() {
    	TweenLite.to(exclamationMark, .3, {opacity: "0.15"});
	    TweenLite.delayedCall(.3, EmarkFadeIn2);
		}
function EmarkFadeIn2() {
    	TweenLite.to(exclamationMark, 6.6, {opacity: "0.15"});
	    TweenLite.delayedCall(6.6, EmarkFadeIn3);
		}
function EmarkFadeIn3() {
    	TweenLite.to(exclamationMark, 1, {opacity: "0"});
		}
/**/
//////////////////////////////////////////////////
//////////BANNER FUNCTIONS

function eventOne() {
	TweenLite.to(animatedOrangeBox, 0, {opacity:"0"});
	TweenLite.to(frame1textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame1textA, 1, {x:"-300"});
	TweenLite.to(frame1textB, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame1textB, 1, {x:"-300"});
	//TweenLite.to(frame1textC, 1.5, {opacity: "1", ease:Quad.easeIn});
	//TweenLite.from(frame1textC, 1, {x:"-300"});
    TweenLite.delayedCall(2, eventTwo);
	TweenLite.to(animatedOrangeBox, 2.3, {opacity:"1", delay:1});
}

 function eventTwo() {
	TweenLite.to(frame1textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame1textA, 1, {x:"300"});
	TweenLite.to(frame1textB, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame1textB, 1, {x:"300"});
	//TweenLite.to(frame1textC, 1.5, {opacity: "0", ease:Quad.easeIn});
	//TweenLite.to(frame1textC, 1, {x:"300"});
	TweenLite.to(frame2textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame2textA, 1, {x:"-300"});
	TweenLite.to(frame2textB, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame2textB, 1, {x:"-300"});
	TweenLite.to(frame2textC, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame2textC, 1, {x:"-300"});
    TweenLite.delayedCall(2.3, eventThree);
}
   
function eventThree() {
		TweenLite.to(animatedDarkOrangeBox, 0, {opacity:"0", height:"71"});
TweenLite.to(frame2textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame2textA, 1, {x:"300"});
	TweenLite.to(frame2textB, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame2textB, 1, {x:"300"});
	TweenLite.to(frame2textC, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame2textC, 1, {x:"300"});
	TweenLite.to(frame3textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame3textA, 1, {x:"-300"});
	TweenLite.to(frame3textB, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame3textB, 1, {x:"-300"});
	TweenLite.to(frame3textC, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame3textC, 1, {x:"-300"});
	TweenLite.to(frame3textD, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame3textD, 1, {x:"-300"});
	//TweenLite.to(frame3textE, 1.5, {opacity: "1", ease:Quad.easeIn});
	//TweenLite.from(frame3textE, 1, {x:"-300"});
	//TweenLite.to(frame3textF, 1.5, {opacity: "1", ease:Quad.easeIn});
	//TweenLite.from(frame3textF, 1, {x:"-300"});
     TweenLite.delayedCall(2.5, eventFour);
}

 function eventFour() {
	TweenLite.to(frame3textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame3textA, 1, {x:"300"});
	TweenLite.to(frame3textB, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame3textB, 1, {x:"300"});
	TweenLite.to(frame3textC, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame3textC, 1, {x:"300"});
	TweenLite.to(frame3textD, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame3textD, 1, {x:"300"});
	//TweenLite.to(frame3textE, 1.5, {opacity: "0", ease:Quad.easeIn});
	//TweenLite.to(frame3textE, 1, {x:"300"});
	//TweenLite.to(frame3textF, 1, {x:"300"});
	TweenLite.to(frame4textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame4textA, 1, {x:"-300"});
	TweenLite.to(frame4textB, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame4textB, 1, {x:"-300"});
	//TweenLite.to(frame4textC, 1.5, {opacity: "1", ease:Quad.easeIn});
	//TweenLite.from(frame4textC, 1, {x:"-300"});
    TweenLite.delayedCall(2.5, eventSix);
}

 function eventSix() {
	TweenLite.to(frame4textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame4textA, 1, {x:"300"});
	TweenLite.to(frame4textB, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame4textB, 1, {x:"300"});
	//TweenLite.to(frame4textC, 1.5, {opacity: "0", ease:Quad.easeIn});
	//TweenLite.to(frame4textC, 1, {x:"300"});
	TweenLite.from(frame6logo, .5, {y:"-150"});
	TweenLite.to(frame6logo, .75, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame6textA, 1, {x:"-300"});
	TweenLite.to(frame6textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame6textB, 1, {x:"-300"});
	TweenLite.to(frame6textB, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame6textC, 1, {x:"-300"});
	TweenLite.to(frame6textC, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame6textD, 1, {x:"-300"});
	TweenLite.to(frame6textD, 1.5, {opacity: "1", ease:Quad.easeIn});
	//TweenLite.from(frame6textE, 1, {x:"-300"});
	//TweenLite.to(frame6textE, 1.5, {opacity: "1", ease:Quad.easeIn});
	//TweenLite.from(frame6textF, 1, {x:"-300"});
	//TweenLite.to(frame6textF, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.to(animatedOrangeBox, 1, {y:"298"});
    //TweenLite.delayedCall(.5, animatedOrangeBox, {});
   TweenLite.delayedCall(3.5, eventSeven);
}
 function eventSeven() {
	TweenLite.to(frame6textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame6textA, 1, {x:"300"});
	TweenLite.to(frame6textB, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame6textB, 1, {x:"300"});
	TweenLite.to(frame6textC, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame6textC, 1, {x:"300"});
	TweenLite.to(frame6textD, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame6textD, 1, {x:"300"});
	//TweenLite.to(frame6textE, 1.5, {opacity: "0", ease:Quad.easeIn});
	//TweenLite.to(frame6textE, 1, {x:"300"});
	//TweenLite.to(frame6textF, 1.5, {opacity: "0", ease:Quad.easeIn});
	//TweenLite.to(frame6textF, 1, {x:"300"});
 	TweenLite.to(frame6logo, .5, {y:"-150"});
	TweenLite.to(frame6logo, .75, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(animatedOrangeBox, .5, {y:"0", height:"232", delay:.5});
	TweenLite.to(animatedDarkOrangeBox, 0, {opacity:"1", delay:1.2});
	TweenLite.to(animatedDarkOrangeBox, .5, {y:"232", height: "158", delay:1.2});
	TweenLite.to(frame7headA, .5, {opacity: "1", ease:Quad.easeIn, delay:.1});
	TweenLite.from(frame7headA, 0, {x:"-300", delay:.1});
	TweenLite.to(frame7headB, .5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame7headB, 0, {x:"-300"});
	TweenLite.to(frame7headC, .5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame7headC, 0, {x:"-300"});
	TweenLite.to(frame7headD, .5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame7headD, 0, {x:"-300"});
	//TweenLite.to(frame7headE, .5, {opacity: "1", ease:Quad.easeIn});
	//TweenLite.from(frame7headE, 0, {x:"-300"});
	//TweenLite.to(frame7headF, .5, {opacity: "1", ease:Quad.easeIn});
	//TweenLite.from(frame7headF, 0, {x:"-300"});
	TweenLite.to(frame7textA, .5, {opacity: "1", ease:Quad.easeIn, delay:1});
	TweenLite.from(frame7textA, 0, {x:"-300", delay:0});
	TweenLite.to(frame7textB, .5, {opacity: "1", ease:Quad.easeIn, delay:1});
	TweenLite.from(frame7textB, 0, {x:"-300", delay:0});
	TweenLite.to(frame7textC, .5, {opacity: "1", ease:Quad.easeIn, delay:1});
	TweenLite.from(frame7textC, 0, {x:"-300", delay:0});
	TweenLite.to(frame7textD, .5, {opacity: "1", ease:Quad.easeIn, delay:1});
	TweenLite.from(frame7textD, 0, {x:"-300", delay:0});
	TweenLite.to(frame7Logo, .2, {opacity: "1", ease:Quad.easeIn, delay:2.0});
	TweenLite.from(frame7Logo, 0, {x:"-300", delay:0});
	TweenLite.to(CTAbutton, .2, {opacity: "1", ease:Quad.easeIn, delay:2.0});
	TweenLite.from(CTAbutton, 0, {x:"300", delay:0});
	TweenLite.to(disclaimer, .2, {opacity: "1", ease:Quad.easeIn, delay:2.0});
}
