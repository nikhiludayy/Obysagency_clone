function loaderanimation() {
    gsap.from("#p1 h1", {
        y: 150,
        opacity: 0,
        ease: Cubic,
        stagger: .2,
        duration: 0.6,
        delay: 0.5
    })
    gsap.from("#p2 h1", {
        opacity: 0,
        ease: Cubic,
        duration: 0.8,
        delay: 1.7
    })
    gsap.from(".line h5", {
        opacity: 0,
        delay: 1,
        onStart: () => {
            let gro = 0;
            setInterval(() => {
                if (gro > 100) {
                    clearInterval();
                    let tl = gsap.timeline();
                    tl.to(".line", {
                        opacity: 0,
                        stagger: 0.3
                    })
                    tl.to("#loader", {
                        y: "-100%",
                        delay: .8
                    })
                    

                }
                else { load.textContent = gro++ }
            }, 30)
        },
        onComplete: () => {
        }
    })



    let loader = document.querySelector("#loader");
    let load = document.querySelector(".line #loadd");

}
loaderanimation();

gsap.from("#p2c h1 ", {
    y: 150,
    ease:Cubic,
    opacity: 0,
    stagger: .2,
    duration: .8,
    delay: 6.6
})

Shery.makeMagnet("#navprt1 h3,.menu-opener__square", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .5,
});
Shery.makeMagnet("#crsr #point", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .1,
});
function loadmagnet() {
    document.addEventListener('mousemove', (del) => {
        gsap.to("#crsr", {
            left: del.x,
            top: del.y,
            duration: 0.3
        })

    })

}
loadmagnet();

