document.addEventListener("DOMContentLoaded", function () {

    const opening = document.getElementById("opening");
    const mainContent = document.getElementById("mainContent");
    const openInvitation = document.getElementById("openInvitation");


    openInvitation.addEventListener("click", function () {

        opening.style.opacity = "0";


        setTimeout(function () {

            opening.style.display = "none";

            mainContent.classList.remove("hidden");

            document.body.classList.remove("locked");

        }, 800);

    });

});
