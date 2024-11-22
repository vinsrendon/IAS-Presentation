function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

let count = 0;
const targets = document.querySelectorAll("#page");
gsap.set(targets, { xPercent: 100 });
gsap.set(targets[0], { xPercent: 0 });

function slideNext(nextIndex) { 
    gsap.fromTo(targets[count], { xPercent: 0, zIndex: 0 }, { delay: 1, duration: 1.2, xPercent: 0, zIndex: -10 });

    count = nextIndex;

    gsap.fromTo(targets[count], { xPercent: 100, zIndex: 10 },{duration: 1.2, xPercent: 0, zIndex: 0 });
}

function slidePrev(prevIndex) {
    gsap.fromTo(targets[count], { xPercent: 0, zIndex: 0 }, { delay: 1, duration: 1.2, xPercent: 0, zIndex: -10 });

    count = prevIndex; 

    gsap.fromTo(targets[count], { xPercent: -100, zIndex: 10 },{duration: 1.5, xPercent: 0, zIndex: 0 });
}

function slide(SlideTo){
    
    if(SlideTo > count){
        slideNext(SlideTo)
    }
    else if(SlideTo < count){
        slidePrev(SlideTo)
    }
}


btn1.addEventListener("click", function() {
    slide(0);
});

btn2.addEventListener("click", function() {
    slide(1);
});

btn3.addEventListener("click", function() {
    slide(2);
});

btn4.addEventListener("click", function() {
    slide(3);
});

btn5.addEventListener("click", function() {
    slide(4);
});

btn6.addEventListener("click", function() {
    slide(5);
});