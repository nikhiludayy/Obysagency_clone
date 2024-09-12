function locoAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function loaderanimation() {
  gsap.from("#p1 h1", {
    y: 150,
    opacity: 0,
    ease: Cubic,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5,
  });
  gsap.from("#p2 h1", {
    opacity: 0,
    ease: Cubic,
    duration: 0.8,
    delay: 1.7,
  });
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
            stagger: 0.3,
          });
          tl.to("#loader", {
            y: "-100%",
            delay: 0.8,
          });
        } else {
          load.textContent = gro++;
        }
      }, 30);
    },
    onComplete: () => {},
  });

  let loader = document.querySelector("#loader");
  let load = document.querySelector(".line #loadd");
}
loaderanimation();

gsap.from("#p2c h1 ", {
  y: 150,
  ease: Cubic,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  delay: 6.6,
});

Shery.makeMagnet("#navprt1 h3,.menu-opener__square", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});
Shery.makeMagnet("#crsr #point", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.1,
});
function loadmagnet() {
  document.addEventListener("mousemove", (del) => {
    // console.log("x"+del.x);
    // console.log("y"+del.y);
    gsap.to("#crsr", {
      left: del.x,
      top: del.y,
      duration: 0.3,
    });
  });
}
loadmagnet();

function followplay() {
  let videocsr = document.querySelector("#video1");
  let videocsr1 = document.querySelector("#videocsr");
  videocsr1.style.top = "-10%";
  videocsr1.style.left = "60%";
  videocsr.addEventListener("mouseenter", () => {
    console.log("hello");
    videocsr1.style.position = "fixed";
    gsap.to("#crsr", {
      opacity: 0,
      ease: Cubic,
      duration: 0.7,
    });
    videocsr.addEventListener("mousemove", (del) => {
      // console.log(del.x);
      // console.log(del.y);
      gsap.to("#videocsr", {
        left: del.x,
        top: del.y,
        duration: 0.3,
      });
    });
  });
  videocsr.addEventListener("mouseleave", () => {
    console.log("hello1");
    gsap.to("#crsr", {
      opacity: 100,
      ease: Cubic,
      duration: 1,
    });
    gsap.to("#videocsr", {
      left: 530,
      top: -55,
      ease: Cubic,
      duration: 0.5,
    });
    videocsr1.style.position = "absolute";
  });
}
followplay();

function play() {
  let videocsr = document.querySelector("#video1");
  let videocnt = document.querySelector("#videocnt");
  let videocsr1 = document.querySelector("#videocsr");
  let play = document.querySelector("#videocsr #play");
  let pause = document.querySelector("#videocsr #pause");
  let flag = 0;
  videocsr.addEventListener("click", () => {
    if (flag == 0) {
      console.log("hello1");
      videocnt.play();

      gsap.to("#play", {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          videocsr1.style.width = "5em";
          videocsr1.style.height = "5em";
          play.style.display = "none";
          pause.style.display = "block";
          gsap.to("#pause", {
            opacity: 1,
            duration: 0.3,
          });
          gsap.to("#videobg", {
            opacity: 0,
            ease: Cubic,
            duration: 0.5,
          });
        },
      });
      flag = 1;
    } else {
      videocnt.pause();

      gsap.to("#pause", {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          videocsr1.style.width = "10em";
          videocsr1.style.height = "10em";
          pause.style.display = "none";
          play.style.display = "block";
          gsap.to("#play", {
            opacity: 1,
            duration: 0.3,
          });
          gsap.to("#videobg", {
            opacity: 1,
            // ease:Cubic,
            duration: 0.7,
          });
        },
      });
      flag = 0;
      console.log("hello2");
    }
  });
}
play();

function sheryAnimation() {
  Shery.imageEffect(".image-line1 , .image-line2", {
    style: 5,
    config: {
      a: { value: 2.06, range: [0, 30] },
      b: { value: 0.95, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.8163449233043133 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.24, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.46, range: [0, 10] },
      metaball: { value: 0.52, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });
}

sheryAnimation();
// locoAnimation();

let flag = document.querySelector("#flag");
document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x: dets.x,
        y: dets.y
    })
})

let heroHover = document.querySelector("#hero-hover");
heroHover.addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity: 1
    })
})
heroHover.addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity: 0
    })
})