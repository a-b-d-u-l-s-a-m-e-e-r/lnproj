function show() {
   gsap.registerPlugin(ScrollTrigger);
   const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#bg"),
      smooth: true
   });
   locoScroll.on("scroll", ScrollTrigger.update);
   ScrollTrigger.scrollerProxy("#bg", {
      scrollTop(value) {
         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
   });
   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
   ScrollTrigger.refresh();
}

show();

var c = 0;
var arr = [{ bg: "rgb(212, 106, 143)", cl: "black",dis:"visible" },
{ bg: "black", cl: "aliceblue" ,dis:"visible" },
{ bg: "rgb(212, 106, 143)", cl: "black" ,dis:"visible" },
{ bg: "black", cl: "aliceblue",dis:"hidden" }]

var b = setInterval(function () {
   if(c<5){
   document.querySelector("#lndpge").style.backgroundColor = `${arr[c].bg}`;
   document.querySelector("#lndpge .clm").style.color = `${arr[c].cl}`;
   document.querySelector("#lndpge #line").style.backgroundColor = `${arr[c].cl}`;
   document.querySelector("#lndpge .clms").style.color = `${arr[c].cl}`;
   document.querySelector("#lndpge").style.visibility=`${arr[c].dis}`;
   c++;}
   else{
      
   }
}, 400)

var tl=gsap.timeline();
tl.from("#main #m2 #crd2",{
   rotation:25,
   delay:4,
   scrollTrigger: {
      trigger: "#main #m2 #crd1",
      scroller: "#bg",
      start: "top 200%",
      end: "top 160%",
      scrub: true
  }
})
tl.from("#main #m2 #crd1",{
   rotation:-25,
   scrollTrigger: {
      trigger: "#main #m2 #crd1",
      scroller: "#bg",
      start: "top 200%",
      end: "top 160%",
      scrub: true
  }
})







