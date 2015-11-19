//////////////////////////////////////////////////
//////////INIT
//////////////////////////////////////////////////
window.onload=function init() {
var logo = document.getElementById("exclamationMark"),
	frame1 = document.getElementById("frame1"),
	frame2 = document.getElementById("frame2"),
	frame3 = document.getElementById("frame3"),
	frame4 = document.getElementById("frame4"),
	frame5 = document.getElementById("frame5text"),
	frame6 = document.getElementById("frame6text"),
	frame7 = document.getElementById("frame7text"),
	animatedCyanBox = document.getElementById("animatedCyanBox"),
	animatedBlueBox = document.getElementById("animatedBlueBox"),
	frame5textA = document.getElementById("frame6textA"),
	frame5textB = document.getElementById("frame6textB"),
	frame6textA = document.getElementById("frame6textA"),
	frame6textB = document.getElementById("frame6textB"),
	frame6textC = document.getElementById("frame6textC"),
	frame6logo = document.getElementById("frame6logo"),
	CTAbutton = document.getElementById("CTAbutton"),
	frame7headA = document.getElementById("frame7headA"),
	frame7headB = document.getElementById("frame7headB"),
	frame7headC = document.getElementById("frame7headC"),
	frame7textA = document.getElementById("frame7textA"),
	frame7textB = document.getElementById("frame7textB"),
	disclaimer = document.getElementById("disclaimer"),
	frame7Logo = document.getElementById("frame7Logo");
	EmarkScaleIn();
	EmarkFadeIn2();
    eventOne(); 
}

//////////////////////////////////////////////////

    
//////////////////////////////////////////////////
//////////Question Mark FUNCTIONS
//////////////////////////////////////////////////
function EmarkScaleIn() {
    	TweenLite.from(exclamationMark, 5.7, {scaleX: 4, scaleY: 4, y:"0", x:"0", delay:6,force3D:true});
		}
function EmarkFadeIn1() {
    	TweenLite.to(exclamationMark, .3, {opacity: "0.25", left:500});
	    TweenLite.delayedCall(.3, EmarkFadeIn2);
		}
function EmarkFadeIn2() {
    	TweenLite.to(exclamationMark, 6.8, {opacity: "0.25",left:700});
	    TweenLite.delayedCall(4.8, EmarkFadeIn3);
		}
function EmarkFadeIn3() {
    	TweenLite.to(exclamationMark, .5, {opacity: "0"});
		}
/**/
//////////////////////////////////////////////////
//////////BANNER FUNCTIONS
function eventOne() {
	TweenLite.to(frame1, 1.5, {opacity: "1", ease:Linear.easeIn});
	TweenLite.from(frame1, 2, {x:"-100"});
    TweenLite.delayedCall(2.5, eventTwo);
}

 function eventTwo() {
	TweenLite.to(frame1, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame1, 1, {x:"728"});
	TweenLite.to(frame2, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame2, 2, {x:"-100"});
    TweenLite.delayedCall(2.5, eventThree);
}
   
 function eventThree() {
	TweenLite.to(frame2, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame2, 1, {x:"728"});
	TweenLite.to(frame3, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame3, 2, {x:"-100"});
    TweenLite.delayedCall(2.5, eventFour);
}

 function eventFour() {
	TweenLite.to(frame3, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame3, 1, {x:"728"});
	TweenLite.to(frame4, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame4, 2, {x:"-100"});
    TweenLite.delayedCall(2.2, eventFive);
}

 function eventFive() {
	TweenLite.to(frame4, 1, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame4, 1, {x:"728"});
	TweenLite.to(exclamationMark, 1, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(exclamationMark, 1, {x:"728"});
    TweenLite.delayedCall(0.5, eventSix);
}
 function eventSix() {
	TweenLite.from(frame6logo, .5, {y:"-150"});
	TweenLite.to(frame6logo, .75, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame6textA, 1, {x:"-100"});
	TweenLite.to(frame6textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame6textB, 1, {x:"-100"});
	TweenLite.to(frame6textB, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.to(animatedOrangeBox, 1, {y:"0", width:"501"});
    TweenLite.delayedCall(3.5, eventSeven);
}
 function eventSeven() {
	TweenLite.to(frame6textA, 0.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame6textA, 1, {x:"728"});
	TweenLite.to(frame6textB, 0.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame6textB, 1, {x:"728"});
	TweenLite.to(frame6logo, 0.5, {opacity: "0", ease:Quad.easeIn, delay:2});
	TweenLite.to(frame6logo, 1, {y:"-200"});
	TweenLite.to(animatedOrangeBox, .5, {y:"0", width:"497", delay:.5});
	TweenLite.to(animatedDarkOrangeBox, 0, {opacity:"1", delay:1.2});
	TweenLite.to(animatedDarkOrangeBox, .5, {y:"20", delay:1.2});
	TweenLite.from(frame7headA, 1, {x:"-100", delay:.1});
	TweenLite.to(frame7headA, 1.5, {opacity: "1", ease:Quad.easeIn, delay:.1});
	TweenLite.to(frame7textA, 1, {opacity: "1", ease:Quad.easeIn, delay:1});
	TweenLite.from(frame7textA, 1.5, {x:"-100", delay:0});
	TweenLite.to(frame7Logo, .2, {opacity: "1", ease:Quad.easeIn, delay:1});
	TweenLite.from(frame7Logo, 0, {x:"350", delay:0});
	TweenLite.to(CTAbutton, .2, {opacity: "1", ease:Quad.easeIn, delay:2});
	TweenLite.from(CTAbutton, 0, {x:"300", delay:0});
	TweenLite.to(disclaimer, .2, {opacity: "1", ease:Quad.easeIn, delay:2});
}
