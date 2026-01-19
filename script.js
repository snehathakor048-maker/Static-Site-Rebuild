
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.onclick = () => {
    navLinks.classList.toggle("show");
};


const goTop = document.getElementById("goTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }
});

goTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
