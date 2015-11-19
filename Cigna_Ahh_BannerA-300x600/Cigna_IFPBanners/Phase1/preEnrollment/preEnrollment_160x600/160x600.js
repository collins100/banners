//////////////////////////////////////////////////
//////////INIT
//////////////////////////////////////////////////
window.onload=function init() {
var logo = document.getElementById("questionMark"),
	frame1 = document.getElementById("frame1"),
	frame2 = document.getElementById("frame2"),
	frame3 = document.getElementById("frame3"),
	frame4 = document.getElementById("frame4"),
	frame5 = document.getElementById("frame5text"),
	frame5textC = document.getElementById("frame5textC"),
	frame6 = document.getElementById("frame6text"),
	frame7 = document.getElementById("frame7text"),
	animatedCyanBox = document.getElementById("animatedCyanBox"),
	animatedBlueBox = document.getElementById("animatedBlueBox"),
	frame5textA = document.getElementById("frame6textA"),
	frame5textB = document.getElementById("frame6textB"),
	frame6logo = document.getElementById("frame6logo"),
	frame6textA = document.getElementById("frame6textA"),
	frame6textB = document.getElementById("frame6textB"),
	frame6textC = document.getElementById("frame6textC"),
	CTAbutton = document.getElementById("CTAbutton"),
	frame7Logo = document.getElementById("frame7Logo"),
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
	CTAbutton = document.getElementById("CTAbutton");
	frame7Logo = document.getElementById("frame7Logo");
	QmarkScaleIn();
	QmarkFadeIn1();
    eventOne(); 
}

//////////////////////////////////////////////////

    
//////////////////////////////////////////////////
//////////Question Mark FUNCTIONS
//////////////////////////////////////////////////
function QmarkScaleIn() {
    	TweenLite.from(questionMark, 5.7, {scaleX: 6, scaleY: 6, y:"0", x:"70", force3D:true,});
		}
function QmarkFadeIn1() {
    	TweenLite.to(questionMark, .3, {opacity: "0.25"});
	    TweenLite.delayedCall(.3, QmarkFadeIn2);
		}
function QmarkFadeIn2() {
    	TweenLite.to(questionMark, 6.8, {opacity: ".5"});
	    TweenLite.delayedCall(4.8, QmarkFadeIn3);
		}
function QmarkFadeIn3() {
    	TweenLite.to(questionMark, .5, {opacity: "1"});
		}
/**/
//////////////////////////////////////////////////
//////////BANNER FUNCTIONS

function eventOne() {
	TweenLite.to(frame1, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame1, 1, {x:"-300"});
    TweenLite.delayedCall(1.5, eventTwo);
}

 function eventTwo() {
	TweenLite.to(frame1, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame1, 1, {x:"300"});
	TweenLite.to(frame2, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame2, 1, {x:"-300"});
    TweenLite.delayedCall(1.5, eventThree);
}
   
 function eventThree() {
	TweenLite.to(frame2, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame2, 1, {x:"300"});
	TweenLite.to(frame3, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame3, 1, {x:"-300"});
    TweenLite.delayedCall(1.5, eventFour);
}

 function eventFour() {
	TweenLite.to(frame3, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame3, 1, {x:"300"});
	TweenLite.to(frame4, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame4, 1, {x:"-300"});
    TweenLite.delayedCall(2.2, eventFive);
}

 function eventFive() {
	TweenLite.to(frame4, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame4, 1, {x:"300"});
	TweenLite.to(questionMark, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(questionMark, 1, {x:"300"});
	TweenLite.to(frame5textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame5textA, 1, {x:"-300"});
	TweenLite.to(frame5textB, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame5textB, 1, {x:"-300"});
	TweenLite.to(frame5textC, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame5textC, 1, {x:"-300"});
    TweenLite.delayedCall(2.5, eventSix);
}
 function eventSix() {
	TweenLite.to(frame5textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame5textA, 1, {x:"300"});
	TweenLite.to(frame5textB, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame5textB, 1, {x:"300"});
	TweenLite.to(frame5textC, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame5textC, 1, {x:"300"});
	TweenLite.from(frame6logo, .5, {y:"-150"});
	TweenLite.to(frame6logo, .75, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame6textA, 1, {x:"-300"});
	TweenLite.to(frame6textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame6textB, 1, {x:"-300"});
	TweenLite.to(frame6textB, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame6textC, 1, {x:"-300"});
	TweenLite.to(frame6textC, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.to(animatedCyanBox, 1, {y:"300"});
    //TweenLite.delayedCall(.5, animatedCyanBox, {});
    TweenLite.delayedCall(3.5, eventSeven);
}
 function eventSeven() {
	TweenLite.to(frame6textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame6textA, 1, {x:"300"});
	TweenLite.to(frame6textB, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame6textB, 1, {x:"300"});
	TweenLite.to(frame6textC, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame6textC, 1, {x:"300"});
 	TweenLite.to(frame6logo, .5, {y:"-150"});
	TweenLite.to(frame6logo, .75, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(animatedCyanBox, .5, {y:"0", height:"232", delay:.5});
	TweenLite.to(animatedBlueBox, 0, {opacity:"1", delay:1.2});
	TweenLite.to(animatedBlueBox, .5, {y:"212", delay:1.2});
	TweenLite.to(frame7headA, .5, {opacity: "1", ease:Quad.easeIn, delay:.1});
	TweenLite.from(frame7headA, 0, {x:"-300", delay:.1});
	TweenLite.to(frame7headB, .5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame7headB, 0, {x:"-300", delay:0});
	TweenLite.to(frame7headC, .5, {opacity: "1", ease:Quad.easeIn, delay:0});
	TweenLite.from(frame7headC, 0, {x:"-300", delay:0});
	TweenLite.to(frame7headD, .5, {opacity: "1", ease:Quad.easeIn, delay:0});
	TweenLite.from(frame7headD, 0, {x:"-300", delay:0});
	TweenLite.to(frame7headE, .5, {opacity: "1", ease:Quad.easeIn, delay:0});
	TweenLite.from(frame7headE, 0, {x:"-300", delay:0});
	TweenLite.to(frame7headF, .5, {opacity: "1", ease:Quad.easeIn, delay:0});
	TweenLite.from(frame7headF, 0, {x:"-300", delay:0});
	TweenLite.to(frame7textA, .5, {opacity: "1", ease:Quad.easeIn, delay:1});
	TweenLite.from(frame7textA, 0, {x:"-300", delay:0});
	TweenLite.to(frame7textB, .5, {opacity: "1", ease:Quad.easeIn, delay:1});
	TweenLite.from(frame7textB, 0, {x:"-300", delay:0});
	TweenLite.to(frame7textC, .5, {opacity: "1", ease:Quad.easeIn, delay:1});
	TweenLite.from(frame7textC, 0, {x:"-300", delay:0});
	TweenLite.to(frame7textD, .5, {opacity: "1", ease:Quad.easeIn, delay:1});
	TweenLite.from(frame7textD, 0, {x:"-300", delay:0});
	TweenLite.to(frame7Logo, .2, {opacity: "1", ease:Quad.easeIn, delay:2});
	TweenLite.from(frame7Logo, 0, {x:"-300", delay:0});
	TweenLite.to(CTAbutton, .2, {opacity: "1", ease:Quad.easeIn, delay:2});
	TweenLite.from(CTAbutton, 0, {x:"300", delay:0});
	TweenLite.to(disclaimer, .2, {opacity: "1", ease:Quad.easeIn, delay:2});
}
