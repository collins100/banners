/*		VARIABLE DECLARATIONS		*/
	var textslideA = document.getElementById("textSlideA");
	var slideB = document.getElementById("slideB");
	var slideC = document.getElementById("slideC");
	var textslideC = document.getElementById("textSlideC");
	var textslideD = document.getElementById("textSlideD");
	var textfadeC = document.getElementById("textfadeC");
	var text1 = document.getElementById("textSlideA1");
	var text2 = document.getElementById("textSlideA2");
	var text3 = document.getElementById("textSlideA3");
/*		TIMELINE ACTIONS		*/
	var tl = new TimelineLite();
	tl.staggerFrom("#nav img", 0.5, {scale:0, autoalpha:0}, 0.2);
	//tl.to(textslideA, 0.9, {left: 0}, "-=.9");
	tl.from(text1, 0.9, {top: -100, opacity: 0, ease: Power2.easeOut}, "-=.9");
	tl.from(text2, 0.9, {top: -100, opacity: 0, ease: Power2.easeOut}, "-=.7");
	tl.from(text3, 0.9, {top: -100, opacity: 0, ease: Power2.easeOut}, "-=.5");
	tl.to(slideB, .85, {left: 0}, "+=0.98");
	tl.to(slideB, 1.85, {left:300, opacity: 0}, "changes+=1.6");
	tl.to(slideC, .89, {left: 0}, "changes+=1.28");
	tl.to(textslideC, .83, {left: 0, opacity:1}, "changes+=1.28");
	tl.to(textslideC, .76, {left: 300, opacity: 0}, "+=.74");
	tl.to(textslideD, .76, {left: 0, opacity:1}, "-=.8");
	tl.to(textfadeC, .96, {opacity:1}, "+=.35");