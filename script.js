
gsap.from(".line h5", {
    opacity: 0,
    delay:1,
    onStart: () => {
        let gro = 0;
        setInterval(() => {
            if (gro > 100) {
                clearInterval();
                loader.style.opacity = "0";

            }
            else { load.textContent = gro++ }
        }, 30)
    }
})
gsap.from(".line h1", {
    y: 150,
    opacity: 0,
    stagger: .2,
    duration: 0.6,
    delay: 0.5
})
gsap.from(".line h1 span", {
    fontFamily: "plainr",
    repeat: 10
})

let loader = document.querySelector("#loader");
let load = document.querySelector(".line #loadd");




