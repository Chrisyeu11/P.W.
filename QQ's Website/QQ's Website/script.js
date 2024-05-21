function getInTouch() {
    alert("Get in touch functionality is not implemented yet.");
}

function toggleTheme() {
    var body = document.body;
    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.removeItem("theme");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var theme = localStorage.getItem("theme");
    if (theme === "light") {
        document.body.classList.add("light-theme");
        document.getElementById("theme-toggle").checked = true;
    }

    document.querySelectorAll('.navbar ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offset = 60; // Height of the fixed navbar

            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});
