var t11 = gsap.timeline();
t11.from(".content", {
    duration: 2,
    opacity: 1,
    skewY: "10%",
    x: "5%",
    stagger: {
        amount: .4
    }
});

t11.from(".img-divs", {
    duration: .5,
    opacity: 0,
    y: "5%",
    stagger: {
        amount: .4
    }
})

var t1 = gsap.timeline(
    {
        paused: "true"
    }
);

t1.to(".menu", {
    duration: .5,
    y: "0%",
    opacity: 1
});
t1.from(".ul", {
    duration: .5,
    y: "-20%",
    opacity: 0,
    stagger: {
        amount: .4
    }
});
t1.from(".showcase", {
    duration : .5,
    x: "-4%",
    opacity: 0,
    stagger: {
        amount: .4
    }
});
t1.to(".hover1", {
    duration: .3,
    width: "200px",
    stagger: {
        amount: .4
    }
});
t1.to(".hover2", {
    duration: .3,
    width: "270px",
    stagger: {
        amount: .4
    }
});
t1.to(".hover3", {
    duration: .3,
    width: "250px",
    stagger: {
        amount: .4
    }
});
t1.to(".hover4", {
    duration: .3,
    width: "250px",
    stagger: {
        amount: .4
    }
});
function toggle() {
   t1.play();
}

function togglerev() {
    t1.reverse();
}