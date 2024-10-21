// Seleccionamos las imágenes
const xbox = document.getElementById('xbox');
const playstation = document.getElementById('playstation');
const nintendo = document.getElementById('nintendo');

// Función para cambiar el color temático
function changeThemeColor(color) {
    document.documentElement.style.setProperty('--colorTematico', color);
}

// Añadir eventos de clic a las imágenes
xbox.addEventListener('click', () => {
    changeThemeColor(getComputedStyle(document.documentElement).getPropertyValue('--colorXbox'));
});

playstation.addEventListener('click', () => {
    changeThemeColor(getComputedStyle(document.documentElement).getPropertyValue('--colorPlay'));
});

nintendo.addEventListener('click', () => {
    changeThemeColor(getComputedStyle(document.documentElement).getPropertyValue('--colorNintendo'));
});
