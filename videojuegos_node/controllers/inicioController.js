
// Request -> Peticion Usuario (req)
// Resource -> Resultado de la Peticion (res)


const inicio = async (req, res) => {
    res.render("inicio",{
        images: ["2xko.jpg", "gta.jpg", "dune.jpg", "gears.webp", "monster.avif", "tales.avif", "wolverine.webp"]
    });
};



// Exportaciones de funciones
export {
    inicio
};
