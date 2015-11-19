(function() {
    var slideA = document.getElementById("slideA");
    var slideAtext1 = document.getElementById("slideAtext1");
    var slideAtext2 = document.getElementById("slideAtext2");
    var back = document.getElementById("back");
    var slideBtext1 = document.getElementById("slideBtext1");
    var slideCtext1 = document.getElementById("slideCtext1");
    var slideCtext2 = document.getElementById("slideCtext2");
    var slideD = document.getElementById("slideD");
    var slideDtext1 = document.getElementById("slideDtext1");
    var slideDtext2 = document.getElementById("slideDtext2");
    var logo = document.getElementById("logo");
    var slideE = document.getElementById("slideE");
    var slideEtext1 = document.getElementById("slideEtext1");
    var slideE11 = document.getElementById("slideE11");
    var slideE12 = document.getElementById("slideE12");
    var slideE13 = document.getElementById("slideE13");
    var getStart = document.getElementById("getStart");
    var glitter = document.getElementById("glitter");


    /*		TIMELINE ACTIONS		*/
    var tl = new TimelineMax({repeat:3,repeatDelay:5});

    tl.to(back, .2, {width: 792,height:90})
        .to(logo, .3, {opacity: 1,scale:1}, '-=.1')
        .from(slideBtext1, .4, {opacity: 0, left: -970})
        .to(slideBtext1, .2, {opacity: 0}, '+=2')
        .to(slideD, .4, {opacity: 1})
        .from(slideDtext1, .4, {opacity: 0, left: -970})
        .from(slideDtext2, .4, {opacity: 0, left: -970})
        .to([slideDtext1, slideDtext2], .2, {opacity: 0}, '+=2')
        .to(slideA, .4, {opacity: 1})
        .from(slideAtext1, .4, {opacity: 0, left: -970})
        .from(slideAtext2, .4, {opacity: 0})
        .to([slideAtext1, slideAtext2], .2, {opacity: 0}, '+=2')
        .from(slideCtext1, .4, {opacity: 0, left: -970})
        .from(slideCtext2, .4, {opacity: 0})
        .to([slideCtext1, slideCtext2], .2, {opacity: 0}, '+=2')
        .to(slideEtext1, .3, {opacity: 1})
        .to(slideE, .2, {opacity: 1}, '-=.3')
        .to(slideEtext1, .2, {opacity: 1})
        .from(slideE11, .5, {opacity: 0})
        .from(slideE12, .5, {opacity: 0})
        .from(slideE13, .5, {opacity: 0})
        .to(logo, .3, {scale:.8,top:-18}, '-=.1')
        .from(getStart, .3, {opacity: 0}, '-=.1')

})()

function glitters() {
    TweenLite.to(glitter, .4, {x:300, ease: Strong.easeOut, onComplete: glitterPos});

}
function glitterPos(){
    TweenLite.set(glitter, {x:-250});

}

document.getElementById("getStart").addEventListener("mouseover", glitters);



