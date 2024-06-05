window.onload = function () {
    const header = document.querySelector('.site-header');
    const navigationHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 + "px");
    
function checkNavbarOnScroll () {
    let windowPosition = window.scrollY > navigationHeight;
    header.classList.toggle('site-header--scroll', windowPosition);
}

checkNavbarOnScroll();

window.addEventListener('scroll', function () {
    checkNavbarOnScroll();
    
})
	
};
