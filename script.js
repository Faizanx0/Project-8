function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function loadingAnimation(){
    
    var tl = gsap.timeline();
    tl.from(".line h1",{
        y:110,
        stagger:0.3,
        delay:0.2,
        ease: "back.out(2.5)"
    })
    tl.from("#part1",{
         opacity:0,
         onStart:function(){
                var grow=0;
  setInterval(() => {
      if(grow<100){
             document.querySelector("#part1 h5").innerHTML= grow++;           
            }
         else{
             document.querySelector("#part1 h5").innerHTML= 100;           
            }
 },20); 
}
})   
    tl.from(".line h2",{
        opacity:0,
        duration:1,
        delay:0.2
    })    

tl.from("#loader>h5",{
    opacity:0,
 })  
 tl.to(".line,#loader>h5",{
    stagger:0.3,
    opacity:0,
    ease: "bounce.out",
})  
 tl.to("#loader",{
     opacity:0,
     duration:0.1,
     display:"none"
    })

 tl.from("#page1",{
     y:"100%",
     opacity :0,
     delay:0.3,
     duration:0.5,
     ease: "power4.out",
 })
 tl.from(".text h1,.text h3",{
    y:100,
    delay:0.2,
    ease: "power4.out"
})

tl.from("#center",{
    opacity:0,
},"-=0.5");

}

function cursorAnimation(){
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0,

    });
      
    Shery.makeMagnet(".mov", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.5,
      
    });

    var videoDiv = document.querySelector("#video-div");
    videoDiv.addEventListener("mouseenter",function(){
        videoDiv.addEventListener("mousemove",function(dets){
            gsap.to(".mousefollower",{
                opacity:0
            })
            gsap.to("#video-cursor",{
                x:dets.x -1280,
                y:dets.y - 130
            })
        })
    })

    videoDiv.addEventListener("mouseleave",function(){
       
            gsap.to(".mousefollower",{
                opacity:1
            })
            gsap.to("#video-cursor",{
               x:"0%",
                y:"10%"
            })
             video.style.opacity=0;
             video.pause();
             document.querySelector("#video-cursor").innerHTML = ` <i class="ri-play-large-fill"></i>    `;
             gsap.to("#video-cursor",{
                 scale:1
             })
           
        })

    var video = document.querySelector("#video-div video");
    var flag = 0;
    videoDiv.addEventListener("click",function(){
        if(flag == 0){
             video.play();
        video.style.opacity=1;
        document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-large-fill"></i>    `;
        gsap.to("#video-cursor",{
            scale:0.5
        })
        flag = 1; 
    }
    else{
        video.pause();
        document.querySelector("#video-cursor").innerHTML = ` <i class="ri-play-large-fill"></i>    `;
        gsap.to("#video-cursor",{
            scale:1
        })
        flag = 0; 
    }
       
    })


}

function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style:5,
        gooey:true,
    })
}

function flagAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x,
            y:dets.y
        })
    })
    
    var flag = document.querySelector("#special");
        flag.addEventListener("mouseenter",function(){
            gsap.to("#flag",{
                opacity:1
            })
        
    })
    flag.addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0
        })
            
    })
}

function textAnimation() {

    var clutter = ""
    var clutter2 = ""
    document.querySelector("#head h1").textContent.split("").forEach(function (elem) {
      clutter += `<span>${elem}</span>`
    })
    document.querySelector("#head h1").innerHTML = clutter
    document.querySelector("#head h2").textContent.split("").forEach(function (elem) {
      clutter2 += `<span>${elem}</span>`
    })
    document.querySelector("#head h2").innerHTML = clutter2
  
    document.querySelector("#head").addEventListener("mouseenter", function () {
        gsap.to("#footer h1 span", {
          opacity: 0,
          stagger: 0.05
        })
        gsap.to("#footer h2 span", {
          delay: 0,
          opacity: 1,
          stagger: 0.1
        })
      })
      document.querySelector("#head").addEventListener("mouseleave", function () {
        gsap.to("#footer h1 span", {
          opacity: 1,
          stagger: 0.1,
          delay: 0,
    
        })
        gsap.to("#footer h2 span", {
          opacity: 0,
          stagger: 0.05
        })
      })
}
    
function lineAnimation(){
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    
    function lineAnimation() {
        
        gsap.from("#page3 .underline", {
            width: "0%",
            ease: "linear",
            scrollTrigger: {
                trigger: "#page3",
                scroller: "#main", 
                start: "top 80%",
                end: "top 20%",
                scrub: true
            },
            
        });

        gsap.from("#page4 .underline", {
            width: "0%",
            ease: "linear",
            scrollTrigger: {
                trigger: "#page4",
                scroller: "#main", 
                start: "top 80%",
                end: "top 20%",
                scrub: true
            },
            
        });
        
        gsap.from("#footer .underline", {
            width: "0%",
            ease: "linear",
            scrollTrigger: {
                trigger: "#footer",
                scroller: "#main", 
                start: "top 80%",
                end: "top 20%",
                scrub: true
            },
            
        });
    }
    
    lineAnimation();
    
}  

lineAnimation();
textAnimation();
loadingAnimation();
locomotiveAnimation();
cursorAnimation();
flagAnimation();
sheryAnimation();