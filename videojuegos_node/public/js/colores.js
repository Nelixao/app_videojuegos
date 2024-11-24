document.addEventListener('DOMContentLoaded', () => {

    // Función para cambiar el color temático
    function changeThemeColor(color) {
        document.documentElement.style.setProperty('--colorTematico', color);
    }

    if (consola == 'Xbox') {
        changeThemeColor(getComputedStyle(document.documentElement).getPropertyValue('--colorXbox'));
    } else if (consola == 'PlayStation') {
        changeThemeColor(getComputedStyle(document.documentElement).getPropertyValue('--colorPlay'));
    } else if (consola == 'Nintendo') {
        changeThemeColor(getComputedStyle(document.documentElement).getPropertyValue('--colorNintendo'));
    }


})