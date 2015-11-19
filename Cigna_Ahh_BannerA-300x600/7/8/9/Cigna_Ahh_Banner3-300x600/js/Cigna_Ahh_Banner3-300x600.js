(function() {

    var back = document.getElementById("back");
    var slideBtext1 = document.getElementById("slideBtext1");
    var slideBtext = document.getElementById("slideBtext");
    var slideBtext2 = document.getElementById("slideBtext2");
    var slideBtext3 = document.getElementById("slideBtext3");
    var slideAtext1 = document.getElementById("slideAtext1");
    var slideAtext2 = document.getElementById("slideAtext2");
    var slideD = document.getElementById("slideD");
    var slideDtext1 = document.getElementById("slideDtext1");
    var slideDtext2 = document.getElementById("slideDtext2");
    var slideDtext3 = document.getElementById("slideDtext3");
    var slideCtext1 = document.getElementById("slideCtext1");
    var slideCtext2 = document.getElementById("slideCtext2");
    var slideCtext3 = document.getElementById("slideCtext3");
    var slideCtext4 = document.getElementById("slideCtext4");
    var slideE = document.getElementById("slideE");
    var slideEtext1 = document.getElementById("slideEtext1");
    var slideE11 = document.getElementById("slideE11");
    var slideE12 = document.getElementById("slideE12");
    var slideE13 = document.getElementById("slideE13");
    var slideEtext2 = document.getElementById("slideEtext2");
    var slideEtext21 = document.getElementById("slideE21");
    var slideEtext22 = document.getElementById("slideE22");
    var getStart = document.getElementById("getStart");
    var glitter = document.getElementById("glitter");
    var logo = document.getElementById("logo");
    var code = document.getElementById("code");
    var dis = document.getElementById("dis");


    /*		TIMELINE ACTIONS		*/
    var tl = new TimelineMax({repeat:3,repeatDelay:5});
    tl.fromTo(back, .2, {top: 600}, {top: 0, width: 300, height: 555}, "-=.2")
        .from(slideBtext1, .4, {opacity: 0, left: -300})
        .to(logo, .4, {opacity: 1})
        .to(slideBtext1, .3, {top: -100}, "+=1")
        .to(back, .3, {top: -280})
        .from(slideBtext2, .4, {opacity: 0, left: -300})
        .from(slideBtext3, .4, {opacity: 0, left: -300})
        .to([slideBtext1, slideBtext2, slideBtext3], .3, {left: 300}, "+=3")
        .to(back, .3, {top: -600})
        .to(slideD, .2, {opacity: 1}, '-=.4')
        .from(slideDtext1, .4, {opacity: 0, left: -300})
        .from(slideDtext2, .4, {opacity: 0, left: -300})
        .from(slideDtext3, .4, {opacity: 0, left: -300})
        .to([slideDtext2, slideDtext3], .3, {left: 300}, "+=3")
        .from(slideAtext1, .4, {opacity: 0, left: -300})
        .from(slideAtext2, .4, {opacity: 0, left: -300})
        .to([slideAtext1, slideAtext2,slideDtext1], .4, {left: 300}, "+=3")
        .to(back, .3, {top: 0})
        .to(slideBtext, .1, {opacity:0})
        .from(slideCtext1, .4, {opacity: 0, left: -300})
        .from(slideCtext2, .4, {opacity: 0, left: -300})
        .from(slideCtext3, .4, {opacity: 0, left: -300})
        .from(slideCtext4, .4, {opacity: 0, left: -300})
        .to([slideCtext1, slideCtext2, slideCtext3,slideCtext4], .4, {left: 300}, "+=4")
        .to(back, .4, {width: 300, top: 0, height: 240})
        .to(slideE, .2, {opacity: 1}, '-=.2')
        .to(slideEtext2, .2, {opacity: 1}, '-=.2')
        .from(slideE11, .5, {opacity: 0, scale: .1})
        .from(slideE12, .5, {opacity: 0, scale: .1})
        .from(slideE13, .5, {opacity: 0, scale: .1})
        .from(slideEtext21, .4, {opacity: 0, left: -300})
        .from(slideEtext22, .4, {opacity: 0, left: -300})
        .from(dis, .4, {opacity: 0})
        .from(getStart, .4, {opacity: 0, scale: .1});
       
})()


function glitters() {
    TweenLite.to(glitter, .4, {x: 300, ease: Strong.easeOut, onComplete: glitterPos});

}
function glitterPos(){
    TweenLite.set(glitter, {x:-250});

}
function showIt(){
    TweenLite.to(dis, .1, {css:{autoAlpha:0}});
    TweenLite.to(code, .4, {css:{autoAlpha:1}});

}
function hideIt(){
    TweenLite.to(code, .1, {css:{autoAlpha:0}});
    TweenLite.to(dis, .4, {css:{autoAlpha:1}});

}
document.getElementById("getStart").addEventListener("mouseover", glitters);
document.getElementById("dis").addEventListener("mouseover", showIt);
document.getElementById("code").addEventListener("mouseout", hideIt);



