const accordionBtns = document.querySelectorAll(".accordion__btn");

accordionBtns.forEach(btn => {
    btn.addEventListener("click" , () => {
        btn.nextElementSibling.classList.toggle("show");
    });
});