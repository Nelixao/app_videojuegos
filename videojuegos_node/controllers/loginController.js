import Usuario from "../model/usuario.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import promisify from "util"


const login = (req, res) => {
    res.render("formulario/login");
}

const registroLogin = async (req, res) => {

    try {

        const username = req.body.username;
        const password = req.body.password;
        
        
        try {
            
            const user = await Usuario.findOne({where:{username}})
            const isPassword = await bcryptjs.compare(password, user.pass)
            
            
            if(!user || !isPassword){
                // En caso de que algun campo no coincida
                res.render("formulario/login", {
                    pagina: `Credenciales Invalidas`,
                });
            }
            if(!user.confirmar){
                res.render("formulario/login", {
                    pagina: `Debes confirmar tu correo`,
                });
            }
            // Inicio de sesion validado
            else{


                const user_token = user.token;
                const id_rol = user.id_rol;
                
                const token = jwt.sign({token:user_token, id_rol:id_rol}, process.env.JWT_SECRETO,{ 
                    expiresIn: process.env.JWT_TIEMPO_EXPIRA
                })

                // console.log(`Token ${token} para usuario ${username}`);

                const cookieOptions = {
                    expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie("jwt", token, cookieOptions)

                if(user.id_rol == 2){
                    res.redirect("/admin/crud")
                }else{
                    res.redirect("/");
                }


            }

        // Si se ingresan dos campos los cuales no se encuentran en la base de datos
        } catch (error) {
            res.render("formulario/login", {
                pagina: `Credenciales Invalidas`,
            });
            console.log(error);
        }

    } catch (error) {
        console.log(error);
    }
}

const verificarCuenta = async (req, res) => {
    const {token} = req.params;

    //token valido
    const usuario = await Usuario.findOne({where:{token}});

    if(!usuario){
        res.render("formulario/login", {
            pagina: "No has confirmado tu cuenta",
        }); 
    }else{
        usuario.token=null;
        usuario.confirmar=true;
    
        await usuario.save();
        res.render("formulario/login", {
            pagina: "Su cuenta se confirmo exitosamente",
        });
    }    

}


// Exportaciones de funciones
export{
    login,
    registroLogin,
    verificarCuenta
};
