// public/js/carousel.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    const intervalTime = 3000; // Tiempo en milisegundos (3 segundos en este caso)

    // Función para mostrar una imagen en un índice específico
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    // Función para cambiar a la siguiente imagen
    function nextImage() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    }

    // Configura el cambio automático de imágenes
    const autoSlide = setInterval(nextImage, intervalTime);

    // Mostrar la primera imagen al cargar la página
    showImage(currentIndex);

    // Controles manuales
    document.getElementById('prev').addEventListener('click', () => {
        clearInterval(autoSlide); // Pausar el cambio automático al interactuar manualmente
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    document.getElementById('next').addEventListener('click', () => {
        clearInterval(autoSlide); // Pausar el cambio automático al interactuar manualmente
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });
});
