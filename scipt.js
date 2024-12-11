// Function to Auto-Dial Support Phone Number
function autoDial() {
    const phoneNumber = "+18083011362";
    window.location.href = `tel:${phoneNumber}`;
}

// Smooth Scrolling for Navigation Links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Offset for sticky header
                    behavior: "smooth"
                });
            }
        });
    });
});

// Scroll-to-Top Button (Optional Enhancement)
window.addEventListener("scroll", function () {
    const scrollButton = document.getElementById("scrollToTop");

    if (window.scrollY > 300) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
