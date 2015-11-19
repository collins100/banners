
var frame1 = document.getElementById("frame1");
var frame2 = document.getElementById("frame2");
var frame3 = document.getElementById("frame3");
var frame4 = document.getElementById("frame4");
var frame6 = document.getElementById("frame6");
var tframe6 = document.getElementById("textFrame6");
var tframe7 = document.getElementById("frame7");
var tframe8 = document.getElementById("frame8");
var logo = document.getElementById("cignaLogo");
var logo2 = document.getElementById("cignaLogo2");
var disclaimerImg = document.getElementById("disclaimerImg");
var disclaimer = document.getElementById("disclaimer");
/*		TIMELINE ACTIONS		*/
var tl = new TimelineMax();
tl.to(frame1, .8, {left: 221, opacity:0, ease: Power2.easeOut}, "+=2")
.to(frame2, .8, {left: 10, opacity: 1, ease:Linear.easeIn}, "-=.5")
.to(frame2, .8, {left: 121, opacity: 0, ease: Power2.easeOut}, "+=2")//2
.to(frame3,.5, {left: 10, opacity: 1, ease:Quad.easeIn}, "-=.5")//2
.to(frame3, .8, {left: 121, opacity: 0, ease: Power2.easeOut}, "+=2") //3
.to(frame4, 1.0, {left: 10, opacity: 1, ease: Quad.easeIn}, "-=.5") //3
.to(frame4, .8, {left: 121, opacity: 0, ease: Power2.easeOut}, "+=2")
.to(frame6, 1.0, {left: 10, top:0,  opacity: 1, ease: Quad.easeIn}, "-=1.3")
.to(logo, 1.0, {top: 37, left: 0, opacity: 1, ease: Quad.easeIn}, "-=1.3")
.to(tframe6, 1.0, {left: 121, opacity: 0, ease: Power2.easeOut}, "+=2")
.to(tframe7, 1.0, {left: 10, top:0,  opacity: 1, ease: Quad.easeIn},"-=1")
.to(tframe7, 1.0, {left: 121, opacity: 0, ease: Power2.easeOut}, "+=2")
.to(tframe8, 1.0, {left: 10, top:0,  opacity: 1, ease: Quad.easeIn},"-=.6")
.to(logo,.8, {opacity:0}, "end-=1.9")
.to(logo2, 1.0, {left: 0, opacity: 1, ease: Quad.easeIn}, "end-=1.9")
    .to(disclaimerImg, 1.0, {opacity:1,left:67});

function showIt(){
    TweenLite.to(disclaimerImg,.1, {css:{opacity:0}});
    TweenLite.to(disclaimer,.2, {css:{opacity:1}});

}
function hideIt(){
    TweenLite.to(disclaimerImg,.1, {css:{opacity:1}});
    TweenLite.to(disclaimer,.2, {css:{opacity:0}});

}
document.getElementById("disclaimerImg").addEventListener("mouseover", showIt);
document.getElementById("disclaimer").addEventListener("mouseout", hideIt);