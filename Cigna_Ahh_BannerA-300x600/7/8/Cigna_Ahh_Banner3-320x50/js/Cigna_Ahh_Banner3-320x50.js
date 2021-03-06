(function() {
    var back = document.getElementById("back");
    var slideAtext1 = document.getElementById("slideAtext1");
    var slideAtext2 = document.getElementById("slideAtext2");
    var slideBtext1 = document.getElementById("slideBtext1");
    var slideBtext2 = document.getElementById("slideBtext2");
    var slideBtext3 = document.getElementById("slideBtext3");
    var slideCtext1 = document.getElementById("slideCtext1");
    var slideCtext2 = document.getElementById("slideCtext2");
    var slideCtext3 = document.getElementById("slideCtext3");
    var slideCtext4 = document.getElementById("slideCtext4");
    var slideDtext1 = document.getElementById("slideDtext1");
    var slideDtext2 = document.getElementById("slideDtext2");
    var slideDtext3 = document.getElementById("slideDtext3");
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

    tl.to(back, .1, {left: -80,width:320})
        .to(logo, .3, {opacity: 1})
        .from(slideBtext1, .3, {opacity: 0, left: -320})
        .from(slideBtext2, .3, {opacity: 0, left: -320})
        .from(slideBtext3, .3, {opacity: 0, left: -320})
        .to([slideBtext1,slideBtext3,slideBtext2], .2, {opacity: 0}, '+=3')
        .from(slideDtext1, .3, {opacity: 0, left: -320})
        .from(slideDtext2, .3, {opacity: 0, left: -320})
        .from(slideDtext3, .3, {opacity: 0, left: -320})
        .to([slideDtext2,slideDtext3], .2, {opacity: 0}, '+=3')
        .from(slideAtext1, .3, {opacity: 0, left: -320})
        .from(slideAtext2, .3, {opacity: 0, left: -320})
        .to([slideDtext1,slideAtext1, slideAtext2], .2, {opacity: 0}, '+=3')
        .from(slideCtext1, .3, {opacity: 0, left: -320})
        .from(slideCtext2, .3, {opacity: 0, left: -320})
        .from(slideCtext3, .3, {opacity: 0, left: -320})
        .from(slideCtext4, .3, {opacity: 0, left: -320})
        .to([slideCtext1,slideCtext2,slideCtext3,slideCtext4], .2, {opacity: 0}, '+=4')
        .to(slideEtext, .2, {opacity: 1})
        .from(slideE11, .5, {opacity: 0, scale: .1})
        .from(slideE12, .5, {opacity: 0, scale: .1})
        .from(slideE13, .5, {opacity: 0, scale: .1})
        .to([slideE11, slideE12, slideE13], .2, {opacity: 0}, '+=3')
        .to(back, .1, {opacity: 0})
        .to(logo, .3, {left:-190})
        .from(getStart, .3, {opacity: 0, scale: .1});
})()



function glitters() {
    TweenLite.to(glitter, .3, {x:300, ease: Strong.easeOut, onComplete: glitterPos});

}
function glitterPos(){
    TweenLite.set(glitter, {x:-250});

}

document.getElementById("getStart").addEventListener("mouseover", glitters);



