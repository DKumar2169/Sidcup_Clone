var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-200+"px"
    blur.style.top = dets.y-200+"px"
});
// Cursor animation when hovering over a div/heading
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor ="transparent"
    });
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor ="#95C11E"
    });
});

var h3all = document.querySelectorAll("#footer h3")
h3all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor ="transparent"
    });
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor ="#95C11E"
    });
});

gsap.to("#nav",{
    backgroundColor :"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -15%",
        end:"top -16%",
        scrub:1.5
    },
});

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    },
});

// gsap.from("#about-us img, #about-us-in", {
//     y:50,
//     opacity:0,
//     duration:1,
//     stagger:0.4,
//     scrollTrigger:{
//         trigger:"#about-us",
//         scroller:"#body",
//         start:"top 80%",
//         end:"top 78%",
//         scrub:2
//     },
// });

// gsap.from(".cards", {
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:".cards",
//         scroller:"#body",
//         start:"top 80%",
//         end:"top 78%",
//         scrub:2
//     },
// });
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });
  