const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});


function cicel() {
    window.addEventListener("mousemove", function (dots) {
        this.document.querySelector("#mini").style.
            transform = `translate(${dots.clientX}px,${dots.clientY}px)`

    })
}
cicel()

function animation() {
    var t1 = gsap.timeline()
    t1.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInout,
    })
    t1.from(".heading", {
        y: 0,
        opacity: 0,
        duration: .3,
        ease: Expo.easeInout,
        stagger: .2,
    })
    t1.from(".blocktext ,h5", {
        y: 0,
        opacity: 0,
        duration: .7,
        ease: Expo.easeInout,
        stagger: .8,
    })
}
animation()


function iconanimation() {
    var ti = gsap.timeline()
    var icon = document.querySelectorAll("#icon")
    ti.from(icon, {
        y: '-20',
        repeat: -1,
        yoyo: true
    })
} iconanimation()


gsap.to(".loader",{
    top:'-100vh',
      delay:0.7,
      duration:1.8,
})
gsap.to(".loader h1,h2 ",{
      delay:0.5,
      duration:1,
      scale:1.2,
})