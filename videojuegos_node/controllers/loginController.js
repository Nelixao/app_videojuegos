const login = (req, res) => {
    res.render("formulario/login");
}

const registro =  (req, res) => {
    res.render("formulario/registro")
};


// Esportaciones de funciones
export{
    login,
    registro
};