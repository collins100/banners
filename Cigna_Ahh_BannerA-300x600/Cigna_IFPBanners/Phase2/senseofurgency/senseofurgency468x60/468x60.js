//////////////////////////////////////////////////
//////////INIT
//////////////////////////////////////////////////
window.onload=function init() {
var logo = document.getElementById("exclamationMark"),
	frame1textA = document.getElementById("frame1textA"),
	frame1textB = document.getElementById("frame1textB"),
	frame2textA = document.getElementById("frame2textA"),
	frame2textB = document.getElementById("frame2textB"),
	frame3textA = document.getElementById("frame3textA"),
	frame3textB = document.getElementById("frame3textB"),
	frame4textA = document.getElementById("frame4textA"),
	frame4textB = document.getElementById("frame4textB"),
	frame5 = document.getElementById("frame5text"),
	frame6 = document.getElementById("frame6text"),
	frame7 = document.getElementById("frame7text"),
	animatedOrangeBox = document.getElementById("animatedOrangeBox"),
	animatedDarkOrangeBox = document.getElementById("animatedDarkOrangeBox"),
	frame6logo = document.getElementById("frame6logo"),
	frame6textA = document.getElementById("frame6textA"),
	frame6textB = document.getElementById("frame6textB"),
	frame6textC = document.getElementById("frame6textC"),
	CTAbutton = document.getElementById("CTAbutton"),
	frame7headA = document.getElementById("frame7headA"),
	frame7headB = document.getElementById("frame7headB"),
	frame7textA = document.getElementById("frame7textA"),
	frame7textB = document.getElementById("frame7textB"),
	discImg = document.getElementById("discImg"),
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
    	TweenLite.from(exclamationMark, 7.7, {scaleX: 4, scaleY: 4, y:"20", x:"1", delay:4,force3D:true});
		}
function EmarkFadeIn1() {
    	TweenLite.to(exclamationMark, .3, {opacity: "0.25"});
	    TweenLite.delayedCall(.3, EmarkFadeIn2);
		}
function EmarkFadeIn2() {
    	TweenLite.to(exclamationMark, 6.6, {opacity: "0.5"});
	    TweenLite.delayedCall(6.6, EmarkFadeIn3);
		}
function EmarkFadeIn3() {
    	TweenLite.to(exclamationMark, 4.5, {opacity: "0"});
		}
/**/
//////////////////////////////////////////////////
//////////BANNER FUNCTIONS

function eventOne() {
	TweenLite.to(animatedOrangeBox, 0, {opacity:"1"});
	TweenLite.to(frame1textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame1textA, 1, {x:"-131"});
    TweenLite.delayedCall(2, eventTwo);

}

 function eventTwo() {
	TweenLite.to(frame1textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame1textA, 1, {x:"469"});
	TweenLite.to(frame2textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame2textA, 1, {x:"-131"});
    TweenLite.delayedCall(2.3, eventThree);
}
   
 function eventThree() {
    TweenLite.to(animatedDarkOrangeBox, 0, {opacity:"0", height:"71"});
    TweenLite.to(frame2textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame2textA, 1, {x:"469"});
	TweenLite.to(frame3textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame3textA, 1, {x:"-131"});
	TweenLite.delayedCall(2.5, eventFour);
}

 function eventFour() {
	TweenLite.to(frame3textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame3textA, 1, {x:"469"});
	TweenLite.to(frame4textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame4textA, 1, {x:"-131"});
    TweenLite.delayedCall(2.5, eventSix);
}

 function eventSix() {
	TweenLite.to(frame4textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame4textA, 1, {x:"469"});
	TweenLite.from(frame6logo, .5, {y:"-150"});
	TweenLite.to(frame6logo, .75, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame6textA, 1, {x:"-131"});
	TweenLite.to(frame6textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame6textB, 1, {x:"-131"});
	TweenLite.to(frame6textB, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.to(animatedOrangeBox, 1, {y:"0", width:"366"});
    TweenLite.delayedCall(3.5, eventSeven);
}
 function eventSeven() {
	TweenLite.to(frame6textA, .5, {opacity: "0", ease:Quad.easeIn});

	TweenLite.to(frame6textB, .5, {opacity: "0", ease:Quad.easeIn});

	TweenLite.to(frame7headA, .5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame7headA, .75, {x:"-131"});
	TweenLite.to(frame7headB, .5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame7headB, .75, {x:"-131"});
	TweenLite.delayedCall(2.5, eventEight);
}
function eventEight() {
	TweenLite.to(frame7headA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame7headA, 1, {x:"469"});
	TweenLite.to(frame7headB, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame7headB, 1, {x:"469"});
	TweenLite.to(frame6logo, .5, {y:"-150"});
	TweenLite.to(frame6logo, .75, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(animatedOrangeBox, .5, {y:"0", width:"292", delay:1});
	TweenLite.to(frame7textA, .5, {opacity: "1", ease:Quad.easeIn, delay:1});
	TweenLite.from(frame7textA, 0, {x:"-131", delay:0});
	TweenLite.to(frame7textB, .5, {opacity: "1", ease:Quad.easeIn, delay:1});
	TweenLite.from(frame7textB, 0, {x:"-131", delay:0});
	TweenLite.to(frame7Logo, .2, {opacity: "1", ease:Quad.easeIn, delay:2.0});
	TweenLite.from(frame7Logo, 0, {x:"-131", delay:0});
	TweenLite.to(CTAbutton, .2, {opacity: "1", ease:Quad.easeIn, delay:2.0});
	TweenLite.from(CTAbutton, 0, {x:"469", delay:0});
	TweenLite.to(discImg, .2, {opacity: "1",left:407, ease:Quad.easeIn, delay:2.0});
}
function showIt(){

	TweenLite.to(disclaimer,.4, {css:{autoAlpha:1}});

}
function hideIt(){
	TweenLite.to(disclaimer, .1, {css:{autoAlpha:0}});


}
document.getElementById("discImg").addEventListener("mouseover", showIt);
document.getElementById("discImg").addEventListener("mouseout", hideIt);
