const closeNavBtn = document.querySelector(".closeMobile");
const openNavBtn = document.querySelector(".openMobile");
const openMobileNav = document.querySelector(".openMobile__nav");
const openMobileNavLinks = document.querySelector(".openMobile__nav__links");

 //? this is the code to close mobile nav
closeNavBtn.addEventListener("click", ()=> {
    closeNavBtn.style.display="none";
    openMobileNav.style.display="block";
    openMobileNavLinks.style.display="block";
    openMobileNavLinks.style.outline= "2px solid rgba(0, 0, 0, 0.04)"
    document.body.style.overflowY="hidden";
    document.body.style.backgroundColor="rgba(0, 0, 0, 0.15)";
});

//? this is the code to open mobile nav
openNavBtn.addEventListener("click", ()=> {

    closeNavBtn.style.display="block";
    openMobileNav.style.display="none";
    openMobileNavLinks.style.display="none";
    document.body.style.overflowY="auto";
    document.body.style.backgroundColor="var(--color-ofWhite)";
});










