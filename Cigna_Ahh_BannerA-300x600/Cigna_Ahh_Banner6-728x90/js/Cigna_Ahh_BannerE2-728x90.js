(function() {
    var back = document.getElementById("back");
    var slideAtext1 = document.getElementById("slideAtext1");
    var slideBtext1 = document.getElementById("slideBtext1");
    var slideBtext2 = document.getElementById("slideBtext2");
    var slideAtext2 = document.getElementById("slideAtext2");
    var slideAtext3 = document.getElementById("slideAtext3");
    var slideDtext1 = document.getElementById("slideDtext1");
    var slideDtext2 = document.getElementById("slideDtext2");
    var slideDtext3 = document.getElementById("slideDtext3");
    var slideDtext4 = document.getElementById("slideDtext4");
    var logo = document.getElementById("logo");
    var slideE = document.getElementById("slideE");
    var slideEtext = document.getElementById("slideEtext");
    var slideE11 = document.getElementById("slideE11");
    var slideE12 = document.getElementById("slideE12");
    var slideE13 = document.getElementById("slideE13");
    var getStart = document.getElementById("getStart");
    var glitter = document.getElementById("glitter");


    /*		TIMELINE ACTIONS		*/
    var tl = new TimelineMax({repeat: 3, repeatDelay: 5});

    tl.to(back, .1, {left: -160,width:728})
        .to(logo, .3, {opacity: 1})
        .from(slideAtext1, .3, {opacity: 0, top: -90})
        .from(slideAtext2, .3, {opacity: 0, top: -90})
        .from(slideAtext3, .3, {opacity: 0, top: -90})
        .to([slideAtext1,slideAtext2,slideAtext3], .2, {opacity: 0}, '+=2')
        .from(slideBtext1, .3, {opacity: 0, top: -90})
        .from(slideBtext2, .3, {opacity: 0, top: -90})
        .to([slideBtext1,slideBtext2], .2, {opacity: 0}, '+=2')
        .from(slideDtext1, .3, {opacity: 0, top: -90})
        .from(slideDtext2, .3, {opacity: 0, top: -90})
        .from(slideDtext3, .3, {opacity: 0, top: -90})
        .from(slideDtext4, .3, {opacity: 0, top: -90})
        .to([slideDtext1,slideDtext2,slideDtext3,slideDtext4], .2, {opacity: 0}, '+=2')
        .to(slideEtext, .2, {opacity: 1})
        .from(slideE11, .5, {opacity: 0, scale: .1})
        .from(slideE12, .5, {opacity: 0, scale: .1})
        .from(slideE13, .5, {opacity: 0, scale: .1})
        .to(logo, .3, {scale:.8,top:-20}, '-=.1')
        .from(getStart, .3, {opacity: 0, scale: .1});
})()



function glitters() {
    TweenLite.to(glitter, .3, {x:300, ease: Strong.easeOut, onComplete: glitterPos});

}
function glitterPos(){
    TweenLite.set(glitter, {x:-250});

}

document.getElementById("getStart").addEventListener("mouseover", glitters);



