var parallax = gsap.timeline();
var text = gsap.timeline();
const tl = gsap.timeline();
var intro = gsap.timeline();
var update = gsap.timeline();
var unique = gsap.timeline();
var projects_c = gsap.timeline();
var text_3 = gsap.timeline();
var navi = gsap.timeline();

var travel_agency = gsap.timeline();
var renderer_s = gsap.timeline();

var jager = gsap.timeline();
var min_2 = gsap.timeline();

min_2.from(".jager-text-min ", {
    x: -1000,
    duration: 1,
    opacity: 1,
    stagger: {
        amount: .35
    }
}, "-=.25");


ScrollTrigger.create({
    animation: min_2,
    trigger: ".portfolio",
    start: "top 100%",
    toggleActions: "play none none none",
})

jager.from(".jager-text", {
    x: 1000,
    duration: 1,
    opacity: 1,
    stagger: {
        amount: .35
    }
}, "-=.25");

ScrollTrigger.create({
    animation: jager,
    trigger: ".travel-main-img",
    start: "bottom 100%",
    toggleActions: "play none none none",
})

navi.from(".navbar", {
    y: -200,
    duration: 2,
    opacity: 1,
    stagger: {
        amount: .25,
    }
}, "-=.25");


tl.from(".text-container", {
    y: 1000,
    duration: 4,
    opacity: 1,
    stagger: {
        amount: .25
    }
}, "-=.25");

text.from(".texting", {
    y: 1000,
    duration: 1,
    opacity: 1,
    stagger: {
        amount: .25
    }
}, "-=.25");

ScrollTrigger.create({
    animation: text,
    trigger: ".hero",
    start: "bottom 50%",
    toggleActions: "play none none none",
    
})

intro.from(".intro-text", {
    x: -1000,
    duration: 1,
    opacity: 1,
    stagger: {
        amount: .25
    }
}, "-=.25");

ScrollTrigger.create({
    animation: intro,
    trigger: ".hero",
    start: "bottom 50%",
    toggleActions: "play none none none",
    
})

update.from(".c-info-contacts", {
    x: 1000,
    duration: 1,
    opacity: 1,
    stagger: {
        amount: .25
    }
}, "-=.25");

ScrollTrigger.create({
    animation: update,
    trigger: ".hero",
    start: "bottom 50%",
    toggleActions: "play none none none",
    
})

unique.from(".unique-c-info-text", {
    x: -7000,
    duration: 1,
    opacity: 1,
    stagger: {
        amount: .25
    }
}, "-=.25");

ScrollTrigger.create({
    animation: unique,
    trigger: ".info-c",
    start: "top 20%",
    toggleActions: "play none none none",
    
})

projects_c.from(".projects-c-info-text", {
    x: 7000,
    duration: 1,
    opacity: 1,
    stagger: {
        amount: .25
    }
}, "-=.25");

ScrollTrigger.create({
    animation: projects_c,
    trigger: ".info-c",
    start: "bottom 80%",
    toggleActions: "play none none none",
    
})

text_3.from(".projects-text-h3", {
    skewY:80,
    skewX:80,
    y: 1000,
    duration: 1,
    opacity: 1,
    stagger: {
        amount: .25
    }
}, "-=.25");

ScrollTrigger.create({
    animation: text_3,
    trigger: ".projects",
    start: "top 0%",
    toggleActions: "play none none none",
    
})

