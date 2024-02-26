

function GetPageHeight() {
    return Math.max(document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight,
        document.documentElement.offsetHeight);
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

function WindowScrollNormalPosition() {
    return window.scrollY / (GetPageHeight() - window.innerHeight);
}

function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end
}

function RectNormalPositionOnScreen(rectY, rectHeight, screenHeight) {
    let start = screenHeight;
    let end = -rectHeight;

    //NOTE: (x-min)/(max-min)
    let result = (rectY - start) / (end - start);

    return result;

}

function page_init(lib){
    // console.log(lib);

    let _this = stage.children[0];
    let page = _this.page;
    // console.log(page);


    function calcScrollEnd() {
        return scrollStart - (page.nominalBounds.height) + (canvas.clientHeight) - (2 * padding);
    }

    let padding = 250;

    let scrollStart = page.y + padding;
    let scrollEnd = calcScrollEnd();

    let car = page.car;
    let watch_0 = page.watch_0;
    let watch_1 = page.watch_1;
    let cop = page.cop;
    let ring = page.ring;
    let flag = page.flag;
    let hand = page.hand;
    let eye = page.eye;

    let carStart = car.y;
    let watch0Start = watch_0.y;
    let watch1Start = watch_1.y;
    let copStart = cop.y;
    let ringStart = ring.y;
    let flagStart = flag.y;
    let handStart = hand.y;
    let eyeStart = eye.y;

    function onResize(e){

        let stageRatio = lib.properties.height / lib.properties.width;

        stage.scaleY = canvas.clientWidth / canvas.clientHeight * window.devicePixelRatio * stageRatio;

        scrollEnd = calcScrollEnd();
        onScroll(null);

        stage.tickOnUpdate = false;
        stage.update();
        stage.tickOnUpdate = true;
    }

    function onScroll(e) {

        let currentScroll = WindowScrollNormalPosition();

        page.y = lerp(scrollStart, scrollEnd, currentScroll);

        car.y = carStart + lerp(750, -2000, currentScroll);
        watch_0.y = watch0Start + lerp(0, 1000, currentScroll);
        watch_1.y = watch1Start + lerp(0, -250, currentScroll);
        cop.y = copStart + lerp(0, -1750, currentScroll);
        ring.y = ringStart + lerp(0, 750, currentScroll);
        flag.y = flagStart + lerp(0, -2250, currentScroll);
        hand.y = handStart + lerp(0, -250, currentScroll);
        eye.y = eyeStart + lerp(-500, 0, currentScroll);

    }

    onScroll(null);
    onResize(null);

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);

}