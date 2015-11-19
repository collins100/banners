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
	frame7headA = document.getElementById("frame7headA"),
	frame7headB = document.getElementById("frame7headB"),
	frame7textA = document.getElementById("frame7textA"),
	frame7textB = document.getElementById("frame7textB"),
	frame7textC = document.getElementById("frame7textC"),
	discImg = document.getElementById("discImg"),
	disclaimer = document.getElementById("disclaimer"),
	CTAbutton = document.getElementById("CTAbutton"),
	frame7Logo = document.getElementById("frame7Logo");
	EmarkScaleIn();
	EmarkFadeIn2();/**/
    eventOne(); 
    function showIt(){

    	TweenLite.to(disclaimer,.1, {css:{opacity:1}});

    }
    function hideIt(){

    	TweenLite.to(disclaimer,.1, {css:{opacity:0}});

    }
    discImg.addEventListener("mouseover", showIt);
    discImg.addEventListener("mouseout", hideIt);
};

//////////////////////////////////////////////////

    
//////////////////////////////////////////////////
//////////Question Mark FUNCTIONS
//////////////////////////////////////////////////
function EmarkScaleIn() {
    	TweenLite.from(exclamationMark, 7.7, {scaleX: 4, scaleY: 4, y:"0", x:"1", force3D:true,});
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
	TweenLite.to(animatedOrangeBox, 0, {opacity:"1"});
	TweenLite.to(frame1textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame1textA, 1, {x:"-320"});
  TweenLite.delayedCall(2, eventTwo);

}

 function eventTwo() {
	TweenLite.to(frame1textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame1textA, 1, {x:"320"});
	TweenLite.to(frame2textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame2textA, 1, {x:"-320"});
	TweenLite.to(frame2textB, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame2textB, 1, {x:"-320"});
  TweenLite.delayedCall(2.3, eventThree);
}
   
 function eventThree() {
  TweenLite.to(animatedDarkOrangeBox, 0, {opacity:"0", height:"71"});
  TweenLite.to(frame2textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame2textA, 1, {x:"320"});
	TweenLite.to(frame2textB, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame2textB, 1, {x:"320"});
	TweenLite.to(frame3textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame3textA, 1, {x:"-320"});
	TweenLite.to(frame3textB, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame3textB, 1, {x:"-320"});
  TweenLite.delayedCall(2.5, eventFour);
}

function eventFour() {
	TweenLite.to(frame3textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame3textA, 1, {x:"320"});
	TweenLite.to(frame3textB, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame3textB, 1, {x:"320"});
	TweenLite.to(frame4textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame4textA, 1, {x:"-320"});
  TweenLite.delayedCall(2.5, eventSix);
}

function eventSix() {
	TweenLite.to(frame4textA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame4textA, 1, {x:"320"});
	TweenLite.from(frame6logo, .5, {y:"-150"});
	TweenLite.to(frame6logo, .75, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame6textA, 1, {x:"-320"});
	TweenLite.to(frame6textA, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame6textB, 1, {x:"-320"});
	TweenLite.to(frame6textB, 1.5, {opacity: "1", ease:Quad.easeIn});
	//TweenLite.from(frame6textC, 1, {x:"-320"});
	//TweenLite.to(frame6textC, 1.5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.to(animatedOrangeBox, 1, {y:"0", width:"208"});
  TweenLite.delayedCall(3.5, eventSeven);
}
function eventSeven() {
	TweenLite.to(frame6textA, 1.5, {opacity: "0", ease: Quad.easeIn});
	TweenLite.to(frame6textB, 1.5, {opacity: "0", ease: Quad.easeIn});
	//TweenLite.to(frame6textC, 1.5, {opacity: "0", ease: Quad.easeIn});
	TweenLite.to(frame7headA, .5, {opacity: "1", ease: Quad.easeIn,delay:1});
	TweenLite.from(frame7headA, 0, {x: "-320"});
	TweenLite.to(frame7headB, .5, {opacity: "1", ease: Quad.easeIn,delay:1});
	TweenLite.from(frame7headB, 0, {x: "-320"});
	TweenLite.delayedCall(3.5, eventEight);

}
function eventEight() {
	TweenLite.to(frame7headA, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame7headA, 1, {x:"320"});
	TweenLite.to(frame7headB, 1.5, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame7headB, 1, {x:"320"});
	TweenLite.to(frame6logo, .5, {y:"-160"});
	TweenLite.to(frame6logo, .75, {opacity: "0", ease:Quad.easeIn});
	TweenLite.to(frame7textA, .5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame7textA, 0, {x:"-320", delay:0});
	TweenLite.to(frame7textB, .5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame7textB, 0, {x:"-320", delay:0});
	TweenLite.to(frame7textC, .5, {opacity: "1", ease:Quad.easeIn});
	TweenLite.from(frame7textC, 0, {x:"-320", delay:0});
	TweenLite.to(animatedOrangeBox, .5, {y:"0", width:"160",delay:.5});
	TweenLite.to(frame7Logo, .2, {opacity: "1", ease:Quad.easeIn, delay:1.0});
	TweenLite.from(frame7Logo, 0, {x:"-320", delay:0});
	TweenLite.to(CTAbutton, .2, {opacity: "1", ease:Quad.easeIn, delay:1.0});
	TweenLite.from(CTAbutton, 0, {x:"320", delay:0});
	TweenLite.to(discImg, .2, {opacity: "1",left:257, ease:Quad.easeIn, delay:1.0});
}
