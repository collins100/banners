// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
      enablerInitHandler();
  } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT,
enablerInitHandler);
  }
}

function enablerInitHandler() {

    function bgExitHandler(e) {
        Enabler.exit('Register for Savings');
    }
    function headerExitHandler(e) {
        Enabler.exit('Prescribing Information (Please See statement)');
    }
    function footerExitHandler(e) {
        Enabler.exit('Med-Watch (Within ISI)');
    }

    document.getElementById('bg-exit').addEventListener('click', bgExitHandler, false);
    document.getElementById('header-exit').addEventListener('click', headerExitHandler, false);
    document.getElementById('footer-exit').addEventListener('click', footerExitHandler, false);

    // Start ad, initialize animation,
    // load in your image assets, call Enabler methods,
    // and/or include other Studio modules.
    // Also, you can start the Polite Load


		var image1 = document.getElementById("image1");
		var text1 = document.getElementById("text1");
		var text2 = document.getElementById("text2");
		var endFrame = document.getElementById("endFrame");

		var tl = new TimelineLite();

		tl.to(text1, .2, {opacity: 1});
		
		
		tl.to(text1, .2, {opacity: 0}, "+=2");
		tl.to(text2, .2, {opacity: 1}, "=0");
		
		tl.to(text2, .2, {opacity: 0}, "+=2");
		tl.to(text3, .2, {opacity: 1}, "=0");

		tl.to(text3, .4, {opacity: 0}, "+=2");
		tl.to(endFrame, .4, {opacity: 1}, "+=2");

}






