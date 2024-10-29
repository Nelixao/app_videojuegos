document.addEventListener("DOMContentLoaded", function() {
    // Arreglo de imágenes
    const images = [
        'proximamente/2xko.jpg',
        'proximamente/gta6.jpeg',
        'proximamente/wolverine.jpeg'
    ];

    let currentIndex = 0;
    const heroImage = document.getElementById("hero-image");

    function changeImage() {
        heroImage.style.opacity = 0;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length; 
            const newImage = new Image(); 
            newImage.src = images[currentIndex]; 

            
            newImage.onload = function () {
                heroImage.src = newImage.src; 
                heroImage.style.opacity = 1; 
            };
        }, 500); 
    }

    console.log("Iniciando cambio de imágenes...");
    setInterval(changeImage, 5000);
});
