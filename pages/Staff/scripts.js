document.addEventListener("DOMContentLoaded", function () {
    const socialIcons = document.querySelectorAll(".app-logo");
    const copyIpContainer = document.getElementById('copyIpContainer');
    const homeLogo = document.querySelector('.footer-logo img');
    const founderImage = document.querySelector('.founder-image');
    const founderText = document.querySelector('.founder-text');
    const administratorImage = document.querySelector('#administrator .founder-image');
    const administratorText = document.querySelector('#administrator .founder-text');
    const user2Image = document.querySelector('#staff .additional-staff-images .founder-container:nth-child(1) .founder-image');
    const user3Image = document.querySelector('#staff .additional-staff-images .founder-container:nth-child(2) .founder-image');

    socialIcons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
            icon.style.filter = "brightness(0.1) invert(1)";
        });

        icon.addEventListener("mouseleave", () => {
            icon.style.filter = "";
        });
    });

    homeLogo.addEventListener("mouseenter", () => {
        homeLogo.style.transform = "scale(1.2)";
    });

    homeLogo.addEventListener("mouseleave", () => {
        homeLogo.style.transform = "scale(1)";
    });

    homeLogo.style.transition = "transform 0.4s ease";

    const scaleImage = (image, text, color) => {
        image.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.2)";
            image.style.transition = "transform 0.4s ease";
            text.style.color = color;
        });

        image.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
            text.style.color = "#ddd";
        });
    };

    scaleImage(founderImage, founderText, "#630a0afb");
    scaleImage(administratorImage, administratorText, "#630a0afb");
    scaleImage(user2Image, null, null);
    scaleImage(user3Image, null, null);

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        const setStyles = (bgColor, textColor) => {
            document.body.style.backgroundColor = bgColor;
            document.body.style.color = textColor;
            document.querySelector('header').style.backgroundColor = bgColor;
            document.querySelector('header').style.color = textColor;
            document.querySelectorAll('header nav a').forEach(link => {
                link.style.backgroundColor = bgColor;
                link.style.color = textColor;
            });
        };

        if (scrollPosition > 50) {
            setStyles("#222", "#fff");
        } else {
            setStyles("#111", "#ddd");
        }
    });
});
