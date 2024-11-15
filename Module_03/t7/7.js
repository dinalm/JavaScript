"use strict";

const triggerElement = document.getElementById("trigger");
const targetImage = document.getElementById("target");

const originalImage = "img/picA.jpg";
const hoverImage = "img/picB.jpg";

triggerElement.addEventListener("mouseover", () => {
    targetImage.src = hoverImage;
});

triggerElement.addEventListener("mouseout", () => {
    targetImage.src = originalImage;
});
