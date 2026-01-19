
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.onclick = () => {
    navLinks.classList.toggle("show");
};


function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("formMsg");

    if (name === "" || email === "") {
        msg.textContent = "Please fill all fields";
        msg.style.color = "red";
    } else {
        msg.textContent = "Form submitted successfully";
        msg.style.color = "green";
    }
}


const goTopBtn = document.getElementById("goTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
});

goTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
