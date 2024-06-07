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
        console.clear();
        let mousePosPixel = e.clientX;
        let innerWidthHalfOnePercent = innerWidth / 2 / 100;
        let scaleVal =
            (mousePosPixel - innerWidth / 2) / innerWidthHalfOnePercent / 100;
        let scaleVal2 = scaleVal * -1;
        let mousePosPercent = mousePosPixel / innerWidthOnePerc;

        page1.style.transform = `scaleX(${scaleVal})`;
        // page2.style.transform = `scaleX(${scaleVal2})`;
        let scaleRestLeft = (((1 - scaleVal) / 2) * 100) / 2;

        let leftMargin = 50 - scaleRestLeft;

        // let page2LeftVal = window
        //     .getComputedStyle(page1)
        //     .getPropertyValue("left");
        // let page2LeftVal2 = window
        //     .getComputedStyle(page2)
        //     .getPropertyValue("left");

        page1.style.left = `${leftMargin}%`;
        // page2.style.left = `${page2LeftVal}`;

        if (leftMargin < 25) {
            page2.style.zIndex = `10`;
        } else {
            page2.style.zIndex = `-10`;
        }

        let mouse = e.clientX;
        console.log(`mouse: ${mouse}`);
        console.log(`inner-width: ${innerWidth}`);
        console.log(`width-percent: ${innerWidth / 100}`);
        let widthPercent = innerWidth / 100;
        console.log(`mouse-percent: ${mouse / widthPercent}`);
        let mousePercent = mouse / widthPercent;
        console.log(`half-width: ${innerWidth / 2}`);
        let halfWidth = innerWidth / 2;
        console.log(`scale: ${(mousePercent / 100 - 0.5) * -1 * 2}`);
        let scale = (mousePercent / 100 - 0.5) * -1 * 2;

        page2.style.transform = `scaleX(${scale})`;

        let left2 = window.getComputedStyle(page2).getPropertyValue("left");
        console.log(left2);
        let leftMinus = (mousePercent - 100) / 2;
        console.log(`left-minus: ${leftMinus}`);
        console.log(`left-changing: ${50 - leftMinus}`);
        let leftChanging = 50 + leftMinus;
        page2.style.left = `${leftChanging}%`;
    }
}

// ---- page2 -----------------------------------------------------

// clickArea2.addEventListener("click", (e) => {
//     window.addEventListener("mousemove", (e) => {
//         console.clear();
//         let mouse = e.clientX;
//         console.log(`mouse: ${mouse}`);
//         console.log(`inner-width: ${innerWidth}`);
//         console.log(`width-percent: ${innerWidth / 100}`);
//         let widthPercent = innerWidth / 100;
//         console.log(`mouse-percent: ${mouse / widthPercent}`);
//         let mousePercent = mouse / widthPercent;
//         console.log(`half-width: ${innerWidth / 2}`);
//         let halfWidth = innerWidth / 2;
//         console.log(`scale: ${(mousePercent / 100 - 0.5) * -1 * 2}`);
//         let scale = (mousePercent / 100 - 0.5) * -1 * 2;

//         page2.style.transform = `scaleX(${scale})`;

//         let left2 = window.getComputedStyle(page2).getPropertyValue("left");
//         console.log(left2);
//         let leftMinus = (mousePercent - 100) / 2;
//         console.log(`left-minus: ${leftMinus}`);
//         console.log(`left-changing: ${50 - leftMinus}`);
//         let leftChanging = 50 + leftMinus;
//         page2.style.left = `${leftChanging}%`;
//     });
// });
