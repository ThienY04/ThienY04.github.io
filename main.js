// ===== Nhạc nền =====
const audio = new Audio("audio/bg-music.mp3");
audio.loop = true;
audio.volume = 0.3;

document.addEventListener("click", () => {
    audio.play();
}, { once: true });

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".top-nav a");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        link.classList.remove("active");

        const linkPath = new URL(link.href).pathname;

        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
});
// Lọc theo category
const filterBtns = document.querySelectorAll(".filter-btn");
const blogCards = document.querySelectorAll(".blog-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Active class
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.dataset.category;

        blogCards.forEach(card => {
            if (category === "all" || card.dataset.category === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Tìm kiếm bài viết
const searchInput = document.querySelector(".blog-search");
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    blogCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

