function getInTouch() {
    window.location.href = "mailto:Chrisyeu11@gmail.com";
}

function toggleTheme() {
    document.body.classList.toggle("light-theme");
    localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "");
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-theme");
        document.getElementById("theme-toggle").checked = true;
    }

    document.querySelector('.sidebar').addEventListener('mouseenter', function () {
        this.classList.remove('collapsed');
    });
    document.querySelector('.sidebar').addEventListener('mouseleave', function () {
        this.classList.add('collapsed');
    });
});
