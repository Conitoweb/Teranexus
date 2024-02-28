document.addEventListener("DOMContentLoaded", function () {
    const socialIcons = document.querySelectorAll(".app-logo");
    const copyIpContainer = document.getElementById('copyIpContainer');

    socialIcons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
            icon.style.filter = "brightness(0.1) invert(1)";
        });

        icon.addEventListener("mouseleave", () => {
            icon.style.filter = "";
        });
    });

    copyIpContainer.addEventListener('click', () => {
        const ipToCopy = 'teranexus.net';
        const tempInput = document.createElement('input');
        tempInput.value = ipToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('IP COPIED!');
    });

    const homeLogo = document.querySelector('.footer-logo img');
    const founderImage = document.querySelector('.founder-image');
    const founderText = document.querySelector('.founder-text');

    homeLogo.addEventListener("mouseenter", () => {
        homeLogo.style.transform = "scale(1.2)";
    });

    homeLogo.addEventListener("mouseleave", () => {
        homeLogo.style.transform = "scale(1)";
    });

    homeLogo.style.transition = "transform 0.4s ease";

    founderImage.addEventListener("mouseenter", () => {
        founderImage.style.transform = "scale(1.2)";
        founderImage.style.transition = "transform 0.4s ease";
        founderText.style.color = "#630a0afb";
    });

    founderImage.addEventListener("mouseleave", () => {
        founderImage.style.transform = "scale(1)";
        founderText.style.color = "#ddd";
    });

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            document.body.style.backgroundColor = "#222";
            document.body.style.color = "#fff";
            document.querySelector('header').style.backgroundColor = "#222";
            document.querySelector('header').style.color = "#fff";
            document.querySelectorAll('header nav a').forEach(link => {
                link.style.backgroundColor = "#222";
                link.style.color = "#fff";
            });
        } else {
            document.body.style.backgroundColor = "#111";
            document.body.style.color = "#ddd";
            document.querySelector('header').style.backgroundColor = "#111";
            document.querySelector('header').style.color = "#ddd";
            document.querySelectorAll('header nav a').forEach(link => {
                link.style.backgroundColor = "#111";
                link.style.color = "#ddd";
            });
        }
    });

});
