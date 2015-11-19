
		var image1 = document.getElementById("image1");
		var text1 = document.getElementById("text1");
		var text2 = document.getElementById("text2");
		var endFrame = document.getElementById("endFrame");

		var tl = new TimelineLite();

		tl.to(text1, .2, {opacity: 1});
		
		tl.to(image1, 0, {opacity: 1}, "+=2.2");
		tl.from(image1, 1, {x:-300}, "-=.2");
		
		tl.to(text1, 0, {opacity: 0}, "-=.1");
		tl.to(text2, 0, {opacity: 1}, "-=.1");
		
		tl.to(image1, 1, {y:140}, "+=1");

		tl.to(text2, .4, {opacity: 0}, "+=1.8");
		tl.to(endFrame, .4, {opacity: 1}, "-=.4");








