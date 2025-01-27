// start code javaScript :)
const btnPrevious = document.querySelector(".btn-previous");
const btnNext = document.querySelector(".btn-next");
const slideBanner = document.querySelectorAll(".slide-main");

let countSlide = 0;
let countSlideAuto = 0;


btnNext.addEventListener("click" , nextSlideBannerClick);
btnPrevious.addEventListener("click" , previousSlideBannerClick);



function stopSlider () {
    for (let i = 0; i < slideBanner.length; i++) {
        slideBanner[i].style.display = "none";
    }
}


// function next slide banner click 
function nextSlideBannerClick () {
    countSlide++;
    stopSlider();
    if (countSlide >= slideBanner.length) {
        countSlide = 0;
    }
    slideBanner[countSlide].style.display = "block";

}
// end

// function next slide banner click 
function previousSlideBannerClick () {
    countSlide--;
    stopSlider();
    if (countSlide < 0) {
        countSlide = slideBanner.length - 1;
    }
    slideBanner[countSlide].style.display = "block";

}
// end ->

// function autp play 
setInterval (function () {
    countSlideAuto++;
    stopSlider();
    if (countSlideAuto >= slideBanner.length) {
        countSlideAuto = 0;
    }
    slideBanner[countSlideAuto].style.display = "block";
} , 3000);
// end ->

nextSlideBannerClick();
previousSlideBannerClick();