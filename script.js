function getInTouch() {
    window.location.href = "mailto:Chrisyeu11@gmail.com";
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

    // Sidebar hover effect
    var sidebar = document.querySelector('.sidebar');
    sidebar.addEventListener('mouseenter', function () {
        sidebar.classList.remove('collapsed');
    });
    sidebar.addEventListener('mouseleave', function () {
        sidebar.classList.add('collapsed');
    });

    // Load the initial page content
    loadPage('home.html', false);

    document.querySelectorAll('.sidebar nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            loadPage(this.getAttribute('href'));
        });
    });

    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.path) {
            loadPage(event.state.path, false);
        }
    });
});

function loadPage(url, addHistory = true) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            if (addHistory) {
                window.history.pushState({path: url}, '', url);
            }
        })
        .catch(error => console.error('Error loading page:', error));
}
