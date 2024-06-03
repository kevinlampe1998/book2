let page1 = document.getElementById("page1Id");
let page2 = document.getElementById(`page2Id`);
let clickArea = document.getElementById(`click-area1`);
let clickArea2 = document.getElementById(`click-area2`);

let innerWidthOnePerc = innerWidth / 100;
console.log(`innerWidthOnePerc${innerWidthOnePerc}`);

clickArea.addEventListener("click", turnOver);

function turnOver() {
    window.addEventListener("mousemove", mouseMove);

    function mouseMove(e) {
        console.log("hello");
        console.clear();
        let mousePosPixel = e.clientX;
        console.log(`mousePosPixel: ${mousePosPixel}`);
        let innerWidthHalfOnePercent = innerWidth / 2 / 100;
        console.log(`innerWidthHalfOnePercent: ${innerWidthHalfOnePercent}`);
        let scaleVal =
            (mousePosPixel - innerWidth / 2) / innerWidthHalfOnePercent / 100;
        console.log(`scaleVal: ${scaleVal}`);
        let mousePosPercent = mousePosPixel / innerWidthOnePerc;
        console.log(`mousePosPercent: ${mousePosPercent}`);

        console.log(`scaleVal: ${scaleVal}`);
        page1.style.transform = `scaleX(${scaleVal})`;
        page2.style.transform = `scaleX(${scaleVal})`;
        let scaleRestLeft = (((1 - scaleVal) / 2) * 100) / 2;
        console.log(`scaleRestLeft:  ${scaleRestLeft}`);

        let leftMargin = 50 - scaleRestLeft;
        console.log(`leftMargin: ${leftMargin}`);

        page1.style.left = `${leftMargin}%`;
        page2.style.left = `${leftMargin}%`;

        if (leftMargin < 25) {
            page2.style.zIndex = `10`;
        } else {
            page2.style.zIndex = `-10`;
        }

        console.log(`innerWidth: ${innerWidth}`);
        console.log(`innerWidthHalf: ${innerWidth / 2}`);
    }
}

// ---- page2 -----------------------------------------------------
