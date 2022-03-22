import gsap from "gsap";

const onExit = node => {
    // console.log(node);

    //    HOME PAGE   /////
    if (node.baseURI === "http://localhost:3000/designs") {
        var tl = gsap.timeline({ defaults: { ease: "linear" } });
        tl.to(node.children[0].children[1], {           //    DIV.GLASS   /////
            opacity: 0,
            translateX: 100,
            duration: 1
        });
        tl.to(node.children[0].children[1].children[0], {     //    H2.SEQ    //
            opacity: 0,
            translateX: -100,
            duration: 1
        }, "-=1");
        tl.to(node.children[0].children[2].children[0].children[0], {          //    <H2> & <SPAN>    /////
            top: "4vh",
            left: "80px",
            duration: 2
        });
    }
    //    OTHER PAGES   /////
    else {
        var tline = gsap.timeline({ defaults: { ease: "linear" } });        
        tline.to(node.children[0].children[0], {
            duration: 1,
            opacity: 0,
            ease: "power3out"
        });
        tline.to(node.children[0].children[1].children[0], {
            opacity: 0,
            duration: 3,
            ease: "power3out"
        });
    }
}

export default onExit