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


        if(!user)  {
            res.render("formulario/login", {
                pagina: `Credenciales Invalidas`,
            });
        }

        const isPassword = await bcryptjs.compare(password, user.pass)

        if(!isPassword){
            res.render("formulario/login", {
                pagina: `Credenciales Invalidas`,
            });
        }

        


        res.render("credenciales/confirmacionlogin", {
            pagina: `Bienvenido ${username}`,
        });
        

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