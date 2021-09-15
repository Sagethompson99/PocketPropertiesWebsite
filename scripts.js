var rellax = new Rellax('.rellax');
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
        displayScrollElement(el);
        } else if (elementOutofView(el)) {
        hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => { 
    handleScrollAnimation();
});

function openNav() {
    var closeNav = $('.sidenav-close-button');
    document.getElementById("sidenav").style.marginRight = "0";	
    closeNav.toggleClass('rotate');
}

function closeNav() {
    var closeNav = $('.sidenav-close-button');
    document.getElementById("sidenav").style.marginRight = "-321";	
    closeNav.toggleClass('rotate');
}