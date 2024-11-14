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
            var user_token = user.token;
            
            if(!user || !isPassword){
                // En caso de que algun campo no coincida
                res.render("formulario/login", {
                        pagina: `Credenciales Invalidas`,
                    });
            }
            // Inicio de sesion validado
            else{
                
                const id_usuario = user.id_usuario;
                const token = jwt.sign({id_usuario:id_usuario}, process.env.JWT_SECRETO,{ 
                    expiresIn: process.env.JWT_TIEMPO_EXPIRA
                })

                // console.log(`Token ${token} para usuario ${username}`);


                const cookieOptions = {
                    expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie("jwt", token, cookieOptions)
                
                res.render("credenciales/confirmacionlogin", {
                    pagina: `Bienvenido ${user.nombre}`,
                });
    
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

const isAuthenticated = async(req, res, next) =>{
    if (req.cookies.jwt){
        try{
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO);
            const idTokenUser = decodificada.id;             
            const user = await Usuario.findOne({where:{idTokenUser}})

            console.log(decodificada);
            

            if(!user){
                return next()
            }
            req.user = user.username;
            return next()

        }catch(error){
            console.log(error);
            return next()
        }

    }else{
        res.redirect("/login"); 
        next()
    }
}



// Exportaciones de funciones
export{
    login,
    registroLogin,
    isAuthenticated,
};
