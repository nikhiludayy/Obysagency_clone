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
    ease: Cubic,
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
        // console.log("x"+del.x);
        // console.log("y"+del.y);
        gsap.to("#crsr", {
            left: del.x,
            top: del.y,
            duration: 0.3
        })

    })

}
loadmagnet();

function followplay() {
    let videocsr = document.querySelector("#video1");
    let videocsr1 = document.querySelector("#videocsr");
    videocsr1.style.top = "-10%";
    videocsr1.style.left = "60%";
    videocsr.addEventListener("mouseenter", () => {
        console.log("hello");
        videocsr1.style.position = 'fixed';
        gsap.to("#crsr", {
            opacity:0,
            ease:Cubic,
            duration: 0.7
        })
        videocsr.addEventListener('mousemove', (del) => {
            // console.log(del.x);
            // console.log(del.y);
            gsap.to("#videocsr", {
                left: del.x,
                top: del.y,
                duration: 0.3
            })

        })


    })
    videocsr.addEventListener('mouseleave', () => {
        console.log("hello1");
        gsap.to("#crsr", {
            opacity:100,
            ease:Cubic,
            duration: 1
        })
        gsap.to("#videocsr", {
            left: 530,
            top: -55,
            ease: Cubic,
            duration: .5,

        })
        videocsr1.style.position = 'absolute';
    })



}
followplay();

function play() {
    let videocsr = document.querySelector("#video1");
    let videocnt = document.querySelector("#videocnt");
    let videocsr1 = document.querySelector("#videocsr");
    let play = document.querySelector("#videocsr #play");
    let pause = document.querySelector("#videocsr #pause");
    let flag = 0;
    videocsr.addEventListener('click', () => {

        if (flag == 0) {
            console.log("hello1");
            videocnt.play();
            
            gsap.to("#play", {
                opacity: 0,
                duration: 0.3,
                onComplete:()=>{
                    videocsr1.style.width="5em";
                    videocsr1.style.height="5em";
                    play.style.display = "none";
                    pause.style.display = "block";
                    gsap.to("#pause", {
                        opacity: 1,
                        duration: 0.3
                    })
                    gsap.to("#videobg", {
                        opacity: 0,
                        ease:Cubic,
                        duration: 0.5
                    })
                }
            })
            flag=1;
        }
        else{
            
            videocnt.pause();
            
            gsap.to("#pause", {
                opacity: 0,
                duration: 0.3,
                onComplete:()=>{
                    videocsr1.style.width="10em";
                    videocsr1.style.height="10em";
                    pause.style.display="none";
                    play.style.display="block";
                    gsap.to("#play", {
                        opacity: 1,
                        duration: 0.3
                    })
                    gsap.to("#videobg", {
                        opacity: 1,
                        // ease:Cubic,
                        duration: .7
                    })
                }
            })
            flag=0;
            console.log("hello2");
        }
        
    })
}
play();