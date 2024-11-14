import Usuario from "../model/usuario.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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
            const user_token = user.token;
            
            if(!user || !isPassword){
                // En caso de que algun campo no coincida
                res.render("formulario/login", {
                        pagina: `Credenciales Invalidas`,
                    });
            }
            // Inicio de sesion validado
            else{
                
                // res.render("credenciales/confirmacionlogin", {
                //     pagina: `Bienvenido ${user.nombre}`,
                // });

                const id_usuario = user.id_usuario;
                const token = jwt.sign({id_usuario:id_usuario}, user_token,{ 
                    expiresIn: process.env.JWT_TIEMPO_EXPIRA

                })

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

// Esportaciones de funciones
export{
    login,
    registroLogin
};

// const registroLogin = async (req, res) => {

//     try{
        
//         const {username, password} = req.body;
//         const user = await Usuario.findOne({where:{username}});

        

//         if(!user)  {
//             res.render("formulario/login", {
//                 pagina: `Credenciales Invalidas`,
//             });
//         }

//         const isPassword = await bcryptjs.compare(password, user.pass)  

//         if(!isPassword){
//             res.render("formulario/login", {
//                 pagina: `Credenciales Invalidas`,
//             });
//         }
        

//         res.render("credenciales/confirmacionlogin", {
//             pagina: `Bienvenido ${username}`,
//         });
        

//     }catch (error){
//         console.error("Error logging in: ", error);
//         res.status(500).json({message: "Server Error "});
//     }
// }

// // Esportaciones de funciones
// export{
//     login,
//     registroLogin
// };