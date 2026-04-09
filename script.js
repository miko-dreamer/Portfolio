// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    icon.classList.replace('fa-moon', 'fa-sun');
}

// Sidebar Logic
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('sidebar-overlay');

menuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

const closeSidebar = () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
};

closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// AJAX Form Submission
var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Success! Your message was sent.";
            status.className = "success";
            form.reset();
        } else {
            status.innerHTML = "Oops! There was a problem.";
            status.className = "error";
        }
    }).catch(error => {
        status.innerHTML = "Check your internet connection!";
        status.className = "error";
    });
}
form.addEventListener("submit", handleSubmit);