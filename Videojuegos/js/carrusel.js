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
        heroImage.style.opacity = 0; // Desvanecer la imagen actual

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length; // Cambia al siguiente índice
            const newImage = new Image(); // Crea una nueva instancia de imagen
            newImage.src = images[currentIndex]; // Asigna la nueva imagen al src

            // Cuando la nueva imagen se haya cargado, se mostrará
            newImage.onload = function () {
                heroImage.src = newImage.src; // Cambia la imagen actual
                heroImage.style.opacity = 1; // Vuelve a mostrar la imagen una vez que está cargada
            };
        }, 500); // Espera 500 ms antes de cambiar la imagen
    }

    console.log("Iniciando cambio de imágenes...");
    // Cambiar imagen cada 5 segundos
    setInterval(changeImage, 5000);
});
