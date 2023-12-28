document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".nav_menu a");
    console.log("hihi");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // event.preventDefault();
            navLinks.forEach(function (innerLink) {
                innerLink.classList.remove("active");
            });

            link.classList.add("active");
        });
    });
});
