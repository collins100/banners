(function() {
    var slideA = document.getElementById("slideA");
    var slideAimg = document.getElementById("slideAimg");
    var slideAtext1 = document.getElementById("slideAtext1");
    var slideAtext2 = document.getElementById("slideAtext2");
    var slideAtext3 = document.getElementById("slideAtext3");
    var slideB = document.getElementById("slideB");
    var slideBtext1 = document.getElementById("slideBtext1");
    var slideBtext2 = document.getElementById("slideBtext2");
    var slideBtext3 = document.getElementById("slideBtext3");
    var slideBtext4 = document.getElementById("slideBtext4");
    var slideButtext = document.getElementById("slideButtext");
    var slideC = document.getElementById("slideC");
    var slideCtext1 = document.getElementById("slideCtext1");
    var slideCtext2 = document.getElementById("slideCtext2");
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
    var ctaShimmer = document.getElementById("ctaShimmer");
    var slideAimg = document.getElementById("slideAimg");
    var lay3 = document.getElementById("lay3");
    var lay6 = document.getElementById("lay6");
    var lay1 = document.getElementById("lay2");

    /*		TIMELINE ACTIONS		*/
    var tl = new TimelineMax({repeat:3,repeatDelay:5});

    tl.to(slideAimg, .2, {opacity:1})
        .from(lay3,.4, {strokeWidth:2,stroke:"green",force3D: true}, '-=.1')
        .to(lay3,.4, {strokeWidth:.4,stroke:"green",transformOrigin:"20% 20%", ease: Linear.easeNone, force3D: true}, '-=.1')
        .to(lay6,.2, {rotation:80,transformOrigin:"80% 80%", ease: Linear.easeNone, force3D: true}, '-=.1')
        .to(lay1,.4, {strokeWidth:.1,stroke:"green", transformOrigin:"30% 30%",ease: Linear.easeNone, force3D: true}, '-=.1')
        .from(lay3,.4, {strokeWidth:.4,stroke:"green",force3D: true}, '-=.1')
        .to(lay3,.4, {strokeWidth:2,stroke:"green",transformOrigin:"20% 20%", ease: Linear.easeNone, force3D: true}, '-=.1')
        .to(lay6,.2, {rotation:120,transformOrigin:"80% 80%", ease: Linear.easeNone, force3D: true}, '-=.1')
        .to(lay1,.4, {strokeWidth:.5,stroke:"green", transformOrigin:"30% 30%",ease: Linear.easeNone, force3D: true}, '-=.1')
        .from(lay3,.4, {strokeWidth:2,stroke:"green",force3D: true}, '-=.1')
        .to(lay3,.4, {strokeWidth:.4,stroke:"green",transformOrigin:"20% 20%", ease: Linear.easeNone, force3D: true}, '-=.1')
        .to(lay6,.2, {rotation:180,transformOrigin:"80% 80%", ease: Linear.easeNone, force3D: true}, '-=.1')
        .to(lay1,.4, {strokeWidth:.3,stroke:"green", transformOrigin:"30% 30%",ease: Linear.easeNone, force3D: true}, '-=.1')
        .from(lay3,.4, {strokeWidth:.4,stroke:"green",force3D: true}, '-=.1')
        .to(lay3,.4, {strokeWidth:1,stroke:"green",transformOrigin:"20% 20%", ease: Linear.easeNone, force3D: true}, '-=.1')
        .to(lay6,.2, {rotation:230,transformOrigin:"80% 80%", ease: Linear.easeNone, force3D: true}, '-=.1')
        .to(lay1,.4, {strokeWidth:.6,stroke:"green", transformOrigin:"30% 30%",ease: Linear.easeNone, force3D: true}, '-=.1')
        .from(lay3,.4, {strokeWidth:1,stroke:"green",force3D: true}, '-=.1')
        .to(lay3,.4, {strokeWidth:.4,stroke:"green",transformOrigin:"20% 20%", ease: Linear.easeNone, force3D: true}, '-=.1')
        .to(lay6,.2, {rotation:360,transformOrigin:"80% 80%", ease: Linear.easeNone, force3D: true}, '-=.1')
        .to(lay1,.4, {strokeWidth:.2,stroke:"green", transformOrigin:"30% 30%",ease: Linear.easeNone, force3D: true}, '-=.1')
        .to(slideAimg, 1, {width:180, top:-40, ease: Linear.easeNone, force3D: true}, '-=4')
        .from(slideAtext1, .4, {opacity: 0, left: -300}, '-=4')
        .from(slideAtext2, .4, {opacity: 0, left: -300}, '-=3.2')
        .from(slideAtext3, .4, {opacity: 0, left: -300}, '-=2.5')
        .to([slideA,slideAimg], .2, {opacity: 0}, '+=0.4')
        .to(slideB, .2, {opacity: 1})
        .from(slideBtext1, .4, {opacity: 0, left: -300}, '-=1')
        .from(slideBtext2, .4, {opacity: 0, left: -300})
        .from(slideBtext3, .4, {opacity: 0, left: -300})
        .from(slideBtext4, .4, {opacity: 0, left: -300})
        .from(slideButtext, .4, {opacity: 0})
        .to([slideBtext1, slideBtext2, slideBtext3, slideBtext3, slideBtext4, slideButtext], .3, {
            opacity: 1,
            left: 300
        }, '+=1.5')
        .to(back, .4, {height: 555, width: 300, top: 0})
        .to(slideC, .3, {opacity: 1}, "-=.2")
        .from(slideCtext1, .4, {opacity: 0, left: -300})
        .from(slideCtext2, .4, {opacity: 0, left: -300})
        .to(logo, .4, {opacity: 1})
        .to([slideCtext1, slideCtext2], .2, {opacity: 0}, '+=1.5')
        .to(slideE, .2, {opacity: 1}, '-=.2')
        .to(slideEtext2, .2, {opacity: 1}, '-=.2')
        .fromTo(back1, .3, {top: -100, width: 300}, {top: 0, width: 300, height: 240, opacity: 1}, '-=.8')
        .fromTo(back, .3, {top: 0, width: 300}, {width: 300, top: 240, height: 315})
        .from(slideE11, .5, {opacity: 0, scale: .1}, "time")
        .from(slideE12, .5, {opacity: 0, scale: .1}, "time")
        .from(slideE13, .5, {opacity: 0, scale: .1})
        .from(getStart, .4, {opacity: 0, scale: .1}, '-=.5')
        .from(slideEtext21, .7, {opacity: 0, left: -300}, "end")
        .from(slideEtext22, .7, {opacity: 0, left: -300}, "end")
        .from(slideEtext23, .7, {opacity: 0, left: -300}, "end");
})()
function glitters() {
    TweenLite.to(glitter, .4, {x: 300, ease: Strong.easeOut, onComplete: glitterPos});

}
function glitterPos(){
    TweenLite.set(glitter, {x:-250});

}

document.getElementById("getStart").addEventListener("mouseover", glitters);

