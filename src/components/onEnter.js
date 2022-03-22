import gsap from "gsap";

const onEnter = node => {
    // console.log(node);

    //    HOME PAGE   /////
    if (node.baseURI === "http://localhost:3000/") {
        var tl = gsap.timeline({ defaults: { ease: "power3out" } });
        tl.from(node.children[0].children[1], {           //    DIV.GLASS   /////
            delay: 1.78,
            opacity: 0,
            translateX: -100,
            duration: 4
        });
        tl.from(node.children[0].children[1].children[0], {     //    H2.SEQ    //
            opacity: 0,
            translateX: 100,
            duration: 2
        }, "-=1");
        tl.from(node.children[0].children[2].children[0].children[0], {          //    <H2> & <SPAN>    /////
            opacity: 0,
            translateY: 60,
            duration: 2,
            clipPath: "inset(100% 0 0 0)"
        }, "-=2");
        tl.from(node.children[0].children[3], {          //    DIV.CREDITS    /////
            opacity: 0,
            duration: 2
        });
    }
    //    OTHER PAGES   /////
    else {
        var tline = gsap.timeline({ defaults: { ease: "power3out" } });

        tline.from(node.children[0].firstElementChild, {
            delay: 1.78,
            duration: 3,
            opacity: 0,
            ease: "power3out"
        });
        tline.from(node.children[0].children[1], {
            duration: 3,
            opacity: 0,
            ease: "power3out"
        }, "-=2");
    }
}

export default onEnter
