let controller;
let revealScene;


//Custom Cursor
function customCursor(e){
    let cursor = document.querySelector('.cursor')
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
}
window.addEventListener('mousemove', customCursor)


function revealAnimation(){
    //Initialize Controller
    controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll('section');
    const navigation = document.querySelector('.navigation')
    const camera = document.querySelector('.camera');
    const headerReveal = document.querySelector('.header-filler');
    const headerReveal2 = document.querySelector('.left-header');


    const headerTimeline = gsap.timeline({defaults: {duration: 1.4, ease: "power2.out"}})
    headerTimeline.fromTo(navigation, 1, {x: '-100%', opacity: 0, scale: 0}, {x: 0, opacity: 1, scale:1});
    headerTimeline.fromTo(headerReveal2, 1.4, {y: '-100%', opacity: 0, scale: 0}, {y: 0, opacity: 1, scale: 1 })

    sections.forEach((section) =>{
        const filler = section.querySelector('.section-filler')
        const team = section.querySelectorAll('.team');
        //Gsap
        const revealTimeline = gsap.timeline({defaults: {duration: 1, ease: "power2.out"}});

        revealTimeline.fromTo(filler, 2, {x: '0%'}, {x: '100%'})
        revealTimeline.fromTo(camera, 1.5 , {x: '-100%', opacity: 0}, {x: '0', opacity: 1})
        revealTimeline.fromTo(team, 1, {y: '400px', opacity: 0, scale: 0.1}, {y: 0, opacity: 1,scale: 1 }, '-=3')

        //Animate on scroll
        revealScene = new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0.4,
            reverse: false
        })
        .setTween(revealTimeline)
        /*
        .addIndicators({
            colorStart: "white",
            colorTrigger: "white",
            name: "Reveal"
        })*/
        .addTo(controller)
    })
}

revealAnimation();