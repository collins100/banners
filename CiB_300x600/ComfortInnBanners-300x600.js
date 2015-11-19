/*		VARIABLE DECLARATIONS		*/

	var textslideA = document.getElementById("textSlideA");
	var textslideB = document.getElementById("textSlideB");
	var textslideC = document.getElementById("textSlideC");
	var slideA = document.getElementById("slideA");
	var slideB = document.getElementById("slideB");
	var slideC = document.getElementById("slideC");
	var slideD = document.getElementById("slideD");
	var textslideC = document.getElementById("textSlideC");
	var textslideD = document.getElementById("textSlideD");
	var textslideE = document.getElementById("textSlideE");

	var textfadeD = document.getElementById("textfadeD");
	var textfadeFoot = document.getElementById("textfadeFoot");
	var finePrintA = document.getElementById("finePrint1");
	var finePrintB = document.getElementById("finePrint2");
	var rested = document.getElementById("restedImg");
	var setImg = document.getElementById("setImg");
	var goImg = document.getElementById("goImg");
	var comfort = document.getElementById("comfortCrown");
	var suites = document.getElementById("suitesCrown");
	var choice = document.getElementById("choiceCrown");
	var divider = document.getElementById('divider');
	
	
/*		TIMELINE ACTIONS		*/
	var tl = new TimelineMax();
	tl.to(slideA, .1, {top: 0, opacity: 1, ease: Power2.easeOut}, "start-=.1")
	.to(rested, .1, {top: 340, opacity: 1, ease: Power2.easeOut}, "start-=.1")
	.to(slideB, .9, {top: 0, opacity: 1, ease: Power2.easeOut}, "two+=1.2")
	.to(setImg, .9, {top: 385, opacity: 1, ease: Power2.easeOut}, "two+=1.2")
	.to(slideC, .9, {top: 0, opacity: 1, ease: Power2.easeOut}, "same+=1.2")
	.to(goImg, .9, {top: 427, opacity: 1, ease: Power2.easeOut}, "same+=1.2")
	.to([slideA, slideB, slideC, divider], .5, {top: -100, opacity: 0}, "over+=.8")
	.to(textfadeFoot, .9, {opacity: 0}, "over+=.8")
	.to(rested, .7, {top: 273, opacity: 1, ease: Power2.easeOut}, "real-=.9")
	.to(setImg, .7, {top: 318, opacity: 1, ease: Power2.easeOut}, "real-=.6")
	.to(goImg, .7, {top: 363, opacity: 1, ease: Power2.easeOut}, "real-=.3")
	.to(comfort, .55, {top: 119, left: 67, opacity: 1, ease: Power3.easeOut}, "logo-=.1")
	.to(suites, .55, {top: 119, left: 150, opacity: 1, ease: Power3.easeOut}, "logo-=.1")
	.to(choice, .575, {top: 211, left: 67, opacity: 1, ease: Power3.easeOut}, "logo-=.25")
	.to([textfadeD,finePrintA], .5, {opacity:1},"+=.2")
	.to([rested, setImg, goImg, finePrintA], .1, {opacity: 0}, "+=.9")
	.to(finePrintB, .5, {opacity:1, top:585}, "end")
	.to(textslideE, .5, {opacity:1}, "end+=.3");


	
	



	
	

	





