import Usuario from "../model/usuario.js";
import { check, validationResult } from "express-validator";
import promisify from "util";

// Hashing the password (Encriptamiento) -> bcryptjs
import bcryptjs from "bcryptjs";
import { idGenera } from "../helpers/tokens.js";
import jwt from "jsonwebtoken";

import { correoRegistro } from "../helpers/correos.js";


const registro = async (req, res) => {
    res.render("formulario/registro")
};


const registrando = async (req, res) => {
    
    try{

        const nombre = req.body.nombre;
        const ap_paterno = req.body.ap_paterno;
        const correo = req.body.correo;
        const username = req.body.username;
        const pass = req.body.pass
        let passHash = await bcryptjs.hash(pass, 8)   

        const usuario = await Usuario.create({
            nombre: nombre,
            ap_paterno: ap_paterno,
            correo: correo,
            username: username,
            pass: passHash,
            token: idGenera(),
            id_rol: 1,

            if(error){
                console.log(error);
            }
            
            
        });
        await usuario.save();
        res.redirect("/")
        
    }catch(error){
        console.log(error);
        
    }
     
    
    
};



// Esportaciones de funciones
export {
    registro,
    registrando,
};



// const registrando = async (req, res) => {

//     const password = req.body.pass;
//     const passwordHaash = await bcryptjs.hash(password, 8);
    
//     const username = req.body.username;
//     const user = Usuario.findOne({username});
    
//     const correo = req.body.email;
//     const email = Usuario.findOne({correo})

//     if(user){
//         res.render("formulario/registro", {
//             mensaje: "Ese usuario ya esta en uso."
//         });
//     }

//     if(user){
//         res.render("formulario/registro", {
//             mensaje: "Ese usuario ya esta en uso."
//         });
//     }

//     let valido = await validacionFormulario(req);

//     if (!valido.isEmpty()) {
//         return res.render("credenciales/registrar", {
//             pagina: "Alta Usuario",
//             errores: valido.array(),
//         });
//     }

//     const usuario = await Usuario.create({
//         nombre: req.body.nombre,
//         ap_paterno: req.body.ap_paterno,
//         correo: req.body.correo,
//         username: req.body.username,
//         pass: passwordHaash,
//         token: idGenera(),
//         id_rol: 1
//     });
//     await usuario.save();
    

//     //mandar correo
//     //mandando el correo
//     correoRegistro({
//         nombre:usuario.nombre,
//         correo:usuario.correo,
//         token:usuario.token
//     })

//     //mostrar mensaje de confirmacions
//     res.render("formulario/login", {
//         pagina: "Usuario se registro, revisa tu correo de confirmación",
//     });

// };

// async function validacionFormulario(req) {

//     await check("username")
//         .notEmpty()
//         .withMessage("Usuario no debe ser vacio")
//         .run(req);

//     await check("pass")
//         .notEmpty()
//         .withMessage("Password no debe ser vacio")
//         .run(req);

//     await check("correo")
//         .notEmpty()
//         .withMessage("Correo no debe ser vacio")
//         .run(req);

//     let salida = validationResult(req);
//     return salida;
// }


// // Esportaciones de funciones
// export {
//     registro,
//     registrando
// };