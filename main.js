let aboutusBlock = document.querySelectorAll(".aboutus-block");
let loaderBlock = document.querySelector(".loader-block");
let count = document.querySelector(".count");
let adaptiveArrow = document.querySelector(".adaptive-arrow");
let adaptiveMenu = document.querySelector(".adaptive-menu-box");
let websiteLoad = document.querySelector(".website-load");
let tuggleMode = document.querySelector(".tuggle-mode-button");
let tuggleModeSpan = document.querySelector(".tuggle-mode-button span");
let tuggleModeInp = document.querySelector(".tuggle-mode input");
let html = document.querySelector("html");
let bannerTitle = document.querySelector(".main-title");
let headerLogo = document.querySelector(".header-logo a");
let bannerSliderNextBtn = document.querySelector(".banner .button-next");
let bannerSliderPrevBtn = document.querySelector(".banner .button-prev");
let icecreamSwiperText = document.querySelector(".banner .icecream-swiper-text");
let footerLocation = document.querySelectorAll(".footer .footer-adress-icon");
let photoBtnNext = document.querySelector(".photo .swiper-photo-next");
let photoBtnPrev = document.querySelector(".photo .swiper-photo-prev");
let headerListBtn = document.querySelector(".header .header-list-btn");
let popUp = document.querySelector(".pop-up");
let popUpForm = document.querySelector(".pop-up form");
let formInput = document.querySelectorAll(".pop-up .form-item input");
let body = document.querySelector("body");
let formItemEye = document.querySelector(".form-item-pass i");
let passInput = document.querySelector(".form-item-pass input");
let popUpExpName = /^[A-Za-z0-9_]{3,14}/;
let popUpExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
let popUpExpPassword = /^[A-Za-z0-9_]{3,14}/;
let popUpCheck = document.querySelector(".pop-up .pop-up-check input[name='politicConf']");
let popUpTel = /^[0-9\-\+]{9,15}$/;
let formCheckInp = document.querySelectorAll(".form-check .form-check-item input");
let formCheck = document.querySelector(".form-check");
let countNum = 0;
let flugCheck = false;

console.log(window.innerHeight, window.innerWidth);

function animation () {
    for (let block of aboutusBlock) {
        console.log(block.getBoundingClientRect());
        if (block.getBoundingClientRect().top < window.innerHeight / 4 * 3) {
            block.querySelector(".aboutus-text-block").classList.add("active");
            block.querySelector(".aboutus-img").classList.add("active");
        } else {
            block.querySelector(".aboutus-text-block").classList.remove("active");
            block.querySelector(".aboutus-img").classList.remove("active");
        }
    }
}

window.addEventListener("scroll", animation);

window.addEventListener("load", function () {
    setTimeout(function () {
        if (!loaderBlock.classList.contains("hide")) {
            loaderBlock.classList.add("hide");
        }
    }, 5000);
    let loadNum = setInterval(function () {
        if (countNum <= 100) {
            countNum++;
            count.textContent = countNum + "%";
        } else {
            clearInterval(loadNum);
        }
    }, 50);
});

adaptiveArrow.addEventListener("click", function () {
    if (adaptiveArrow.classList.contains("active")) {
        adaptiveArrow.classList.remove("active");
        adaptiveMenu.classList.remove("active");
    } else {
        adaptiveArrow.classList.add("active");
        adaptiveMenu.classList.add("active");
    }
});

let date = new Date();

if (date.getHours() < 20 && date.getHours() >= 6) {
    tuggleModeSpan.classList.remove("active");
    tuggleMode.classList.remove("active");
    html.classList.remove("active");
    aboutusBlock.forEach(elem => {
        elem.classList.remove("active");
    });
    bannerTitle.classList.remove("active");
    headerLogo.classList.remove("active");
    bannerSliderNextBtn.classList.remove("active");
    bannerSliderPrevBtn.classList.remove("active");
    icecreamSwiperText.classList.remove("active");
    footerLocation.forEach(elem => {
        elem.classList.remove("active");
    });
    photoBtnNext.classList.remove("active");
    photoBtnPrev.classList.remove("active");
} else {
    tuggleModeSpan.classList.add("active");
    tuggleMode.classList.add("active");
    html.classList.add("active");
    aboutusBlock.forEach(elem => {
        elem.classList.add("active");
    });
    bannerTitle.classList.add("active");
    headerLogo.classList.add("active");
    bannerSliderPrevBtn.classList.add("active");
    bannerSliderNextBtn.classList.add("active");
    icecreamSwiperText.classList.add("active");
    footerLocation.forEach(elem => {
        elem.classList.add("active");
    });
    photoBtnNext.classList.add("active");
    photoBtnPrev.classList.add("active");
};

tuggleMode.addEventListener("click", function () {
    if (tuggleModeInp.checked) {
        tuggleModeSpan.classList.remove("active");
        tuggleMode.classList.remove("active");
        html.classList.remove("active");
        aboutusBlock.forEach(elem => {
            elem.classList.remove("active");
        });
        bannerTitle.classList.remove("active");
        headerLogo.classList.remove("active");
        bannerSliderNextBtn.classList.remove("active");
        bannerSliderPrevBtn.classList.remove("active");
        icecreamSwiperText.classList.remove("active");
        footerLocation.forEach(elem => {
            elem.classList.remove("active");
        });
        photoBtnNext.classList.remove("active");
        photoBtnPrev.classList.remove("active");
    } else {
        tuggleModeSpan.classList.add("active");
        tuggleMode.classList.add("active");
        html.classList.add("active");
        aboutusBlock.forEach(elem => {
            elem.classList.add("active");
        });
        bannerTitle.classList.add("active");
        headerLogo.classList.add("active");
        bannerSliderPrevBtn.classList.add("active");
        bannerSliderNextBtn.classList.add("active");
        icecreamSwiperText.classList.add("active");
        footerLocation.forEach(elem => {
            elem.classList.add("active");
        });
        photoBtnNext.classList.add("active");
        photoBtnPrev.classList.add("active");
    };
});

// Contact us
popUpForm.addEventListener("click", function(e) {
    formInput.forEach(elem => {
        if(e.target === elem) {
            elem.parentNode.classList.add("active");
        } else {
            elem.parentNode.classList.remove("active");
        };
    });
});
headerListBtn.addEventListener("click", () => {
    popUp.classList.add("active");
    body.classList.add("over");
});

document.querySelector(".pop-up .arrows-form").addEventListener("click", () => {
    popUp.classList.remove("active");
    body.classList.remove("over");
});

formItemEye.addEventListener("click", () => {
    formItemEye.classList.toggle("fa-eye");
    formItemEye.classList.toggle("fa-eye-slash");
    if (formItemEye.classList.contains("fa-eye")) {
        passInput.setAttribute("type", "text");
    } else {
        passInput.setAttribute("type", "password");
    };
});

// Validation
function validationElem(input) {
    if (input.name === "email") {
        if (!popUpExpEmail.test(input.value) && input.value !== "") {
            input.parentElement.querySelector(".errors").textContent = "Enter correct email";
            flag = false;
            elem.classList.add("false");
        } else {
            input.parentElement.querySelector(".errors").textContent = "";
            flag = true;
            elem.classList.remove("false");
        };
    };

    if (input.name === "password") {
        if (!popUpExpPassword.test(input.value) && input.value !== "") {
            input.parentElement.querySelector(".errors").textContent = "Enter correct password";
            flag = false;
            elem.classList.add("false");
        } else {
            input.parentElement.querySelector(".errors").textContent = "";
            flag = true;
            elem.classList.remove("false");
        };
    };

    if (input.name === "tel") {
        if (!popUpTel.test(input.value) && input.value !== "") {
            input.parentElement.querySelector(".errors").textContent = "Enter correct phone num";
            flag = false;
        } else {
            input.parentElement.querySelector(".errors").textContent = "";
            flag = true;
        };
    };
};

let popUpformElements = document.querySelectorAll(".pop-up input:not(input[type='checkbox'])");

popUpForm.addEventListener("submit", function (e) {
    for (let elem of popUpformElements) {
        if (!elem.value) {
            if (elem.name === "name") {
                let parent = elem.parentElement;
                parent.querySelector(".errors").textContent = "Enter your name please!";
                elem.classList.add("false");
            }
            if (elem.name === "email") {
                let parent = elem.parentElement;
                parent.querySelector(".errors").textContent = "Enter your email please!";
                elem.classList.add("false");
            }
            if (elem.name === "password") {
                let parent = elem.parentElement;
                parent.querySelector(".errors").textContent = "Enter your password please!";
                elem.classList.add("false");
            }
            if (elem.name === "tel") {
                let parent = elem.parentElement;
                parent.querySelector(".errors").textContent = "Enter your number please!";
                elem.classList.add("false");
            }
        } else {
            elem.parentElement.querySelector(".errors").textContent = "";
            validationElem(elem);
        };
    };

    for(let inp of formCheckInp) {
        if(!inp.value) {
            flugCheck = false;   
        } else {
            flugCheck = true;
        };
    };
    console.log(flugCheck);

    if(flugCheck) {
        formCheck.querySelector(".errors").textContent = "Choose something";
    };

    e.preventDefault();
});

// Progress bar
window.addEventListener("scroll", () => {
    let windowScrollTop = document.documentElement.scrollTop;
    let windowScrollHeight = document.documentElement.scrollHeight; 
    let windowHeight = document.documentElement.clientHeight;
    let progress = (windowScrollTop  / (windowScrollHeight - windowHeight) * 100);
    websiteLoad.style.width = progress + "%";
});