const images = [
    "frame1.jpg",
    "frame2.jpg",
    "frame3.jpg",
    // Add more image URLs as needed
];

const texts = [
    "Text for frame 1",
    "Text for frame 2",
    "Text for frame 3",
    // Add more text strings as needed
];

let currentIndex = 0;
const imageElement = document.querySelector(".image");
const textElement = document.querySelector(".text");

function flipBook() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
    textElement.textContent = texts[currentIndex];
}
