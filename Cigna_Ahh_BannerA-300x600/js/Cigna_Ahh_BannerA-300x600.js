(function() {
    var slideAtext1 = document.getElementById("slideAtext1");
    var slideAtext2 = document.getElementById("slideAtext2");
    var slideAtext3 = document.getElementById("slideAtext3");
    var slideAtext4 = document.getElementById("slideAtext4");
    var slideAtext5 = document.getElementById("slideAtext5");
    var slideAtext6 = document.getElementById("slideAtext6");
    var slideAtext7 = document.getElementById("slideAtext7");
    var slideAtext8 = document.getElementById("slideAtext8");
    var slideAtext9 = document.getElementById("slideAtext9");
    var mans = document.getElementById("mans");
    var womans = document.getElementById("womans");
    var back = document.getElementById("back");
    var slideBtext1 = document.getElementById("slideBtext1");
    var slideBtext2 = document.getElementById("slideBtext2");
    var slideBtext3 = document.getElementById("slideBtext3");
    var slideBtext4 = document.getElementById("slideBtext4");
    var last = document.getElementById("last");
    var slideCtext1 = document.getElementById("slideCtext1");
    var slideCtext2 = document.getElementById("slideCtext2");
    var slideCtext3 = document.getElementById("slideCtext3");
    var slideCtext4 = document.getElementById("slideCtext4");
    var slideD = document.getElementById("slideD");
    var slideDtext1 = document.getElementById("slideDtext1");
    var slideDtext2 = document.getElementById("slideDtext2");
    var slideDtext3 = document.getElementById("slideDtext3");
    var slideDtext4 = document.getElementById("slideDtext4");
    var logo = document.getElementById("logo");
    var slideE = document.getElementById("slideE");
    var slideEtext1 = document.getElementById("slideEtext1");
    var slideE11 = document.getElementById("slideE11");
    var slideE12 = document.getElementById("slideE12");
    var slideE13 = document.getElementById("slideE13");
    var slideEtext2 = document.getElementById("slideEtext2");
    var slideEtext21 = document.getElementById("slideEtext21");
    var slideEtext22 = document.getElementById("slideEtext22");
    var slideEtext23 = document.getElementById("slideEtext23");
    var getStart = document.getElementById("getStart");
    var glitter = document.getElementById("glitter");


    /*		TIMELINE ACTIONS		*/
    var tl = new TimelineMax({repeat:3,repeatDelay:5});
    TweenLite.to(mans, 3, {scaleX: 1.1, scaleY: 1.1, y: "0", x: "0", ease: Linear.easeNone, delay: 5, force3D: true});
    TweenLite.to(womans, 4, {scaleX: 1.1, scaleY: 1.1, y: "0", x: "0", ease: Linear.easeNone, delay: 8, force3D: true});
    tl.from(slideAtext1, .4, {opacity: 0, left: -300})
        .from(slideAtext2, .4, {opacity: 0, left: -300})
        .from(slideAtext3, .4, {opacity: 0})
        .from(slideAtext4, .4, {opacity: 0})
        .from(slideAtext5, .4, {opacity: 0})
        .from(slideAtext6, .4, {opacity: 0})
        .from(slideAtext7, .4, {opacity: 0})
        .from(slideAtext8, .4, {opacity: 0})
        .from(slideAtext9, .4, {opacity: 0})
        .to(back, .3, {height: 70, width: 300, top: 530}, '+=1.5')
        .to([slideAtext1, slideAtext2, slideAtext3, slideAtext4, slideAtext5, slideAtext6, slideAtext7, slideAtext8, slideAtext9], .1, {top: 350}, '-=.3')
        .to(mans, .3, {opacity: 1}, '-=.8')
        .from(slideBtext1, .4, {opacity: 1, left: -300})
        .from(slideBtext2, .4, {opacity: 0})
        .from(slideBtext3, .4, {opacity: 0})
        .from(slideBtext4, .4, {opacity: 0})
        .to(mans, .2, {opacity: 0}, '+=1.5')
        .to([slideBtext1, slideBtext2, slideBtext3, slideBtext4], .2, {opacity: 0}, '-=.7')
        .to(womans, .3, {opacity: 1}, '-=.1')
        .from(slideCtext1, .4, {opacity: 1, left: -300})
        .from(slideCtext2, .4, {opacity: 0})
        .from(slideCtext3, .4, {opacity: 0})
        .from(slideCtext4, .4, {opacity: 0})
        .to(back, .2, {height: 555, width: 300, top: 0}, '+=1.5')
        .to(womans, .2, {opacity: 0}, '-=.4')
        .to([slideCtext1, slideCtext2, slideCtext3, slideCtext4], .3, {opacity: 0})
        .to(slideD, .2, {opacity: 1}, '-=.4')
        //.to(last, .1, {opacity:0}, '-=.7')
        .to(logo, .3, {opacity: 1}, '-=.1')
        .from(slideDtext1, .4, {opacity: 0, left: -300})
        .from(slideDtext2, .4, {opacity: 0, left: -300})
        .from(slideDtext3, .4, {opacity: 0, left: -300})
        .from(slideDtext4, .4, {opacity: 0, left: -300})
        .to(slideEtext1, .3, {opacity: 1}, '+=1.5')
        .to([slideDtext1, slideDtext2, slideDtext3, slideDtext4], .2, {opacity: 0}, '-=.3')
        .to(slideE, .2, {opacity: 1}, '-=.3')
        .to(back, .8, {height: 240, width: 300, top: 0}, '-=.5')
        .from(last, .8, {top: 564, width: 300}, '-=.9')
        .to(last, .1, {opacity: 1, top: 240, width: 300}, '-=.8')
        .to(slideEtext2, .2, {opacity: 1}, '-=.3')
        .to(slideEtext1, .2, {opacity: 1})
        .from(slideE11, .5, {opacity: 0, scale: .1})
        .from(slideE12, .5, {opacity: 0, scale: .1})
        .from(slideE13, .5, {opacity: 0, scale: .1})
        .from(getStart, .3, {opacity: 0, scale: .1}, '-=.5')
        .from(slideEtext21, .7, {opacity: 0, left: -300})
        .from(slideEtext22, .7, {opacity: 0, left: -300})
        .from(slideEtext23, .7, {opacity: 0, left: -300});
})()

function glitters() {
    TweenLite.to(glitter, .4, {x:300, ease: Strong.easeOut, onComplete: glitterPos});

}
function glitterPos(){
    TweenLite.set(glitter, {x:-250});

}

document.getElementById("getStart").addEventListener("mouseover", glitters);



