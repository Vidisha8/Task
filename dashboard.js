document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownContent = document.querySelector(".dropdown-content");

    if (dropdownBtn.classList.contains("clicked")) {
        dropdownBtn.classList.remove("clicked");
        dropdownContent.style.display = "none";
    }
});

function toggleDropdown() {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownBtn.classList.toggle("clicked");

    if (dropdownBtn.classList.contains("clicked")) {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
}
