import { where } from "sequelize";
import Usuario from "../model/usuario.js";
import bcryptjs from "bcryptjs";


const login = (req, res) => {
    res.render("formulario/login");
}

const registroLogin = async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await Usuario.findOne({where:{username}});

        if(!user) {
            return res.status(400).json({message: "Invalid Credentials"})
        }

        const isPassword = await bcryptjs.compare(password, user.pass)

        if(!isPassword) {
            return res.status(400).json({message: "Invalid Credentials"})
        }

        res.redirect("/")
        // return res.render("credenciales/confirmacionlogin", {
        //     pagina: "Ingreso el Usuario"
        // });
        

    }catch (error){
        console.error("Error logging in: ", error);
        res.status(500).json({message: "Server Error "});
    }
}

// Esportaciones de funciones
export{
    login,
    registroLogin
};