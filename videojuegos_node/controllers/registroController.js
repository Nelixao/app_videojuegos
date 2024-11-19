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
        const pass = req.body.pass;
        let passHash = await bcryptjs.hash(pass, 8)

        const user = await Usuario.findOne({where:{username}})
        const email = await Usuario.findOne({where:{correo}})

        if(user || email){
            if(user){
                res.render("formulario/registro", {
                    pagina: `Username ya existente, pruebe con otro.`,
                });
            }
            else{
                res.render("formulario/registro", {
                    pagina: `Correo ya existente, prueba con otro.`,
                });
            }
            
        }else{
            
            const usuario = await Usuario.create({

                nombre: nombre,
                ap_paterno: ap_paterno,
                correo: correo,
                username: username,
                pass: passHash,
                token: idGenera(),
                // provicional
            confirmar: true,
            id_rol: 1,
    
                if(error){
                    console.log(error);
                }        
                
            });
            await usuario.save();

             // Envio de Correo de confirmacion
            correoRegistro({

                nombre: usuario.nombre,
                correo: usuario.correo,
                token:  usuario.token

            })

            //mostrar mensaje de confirmacions
            res.render("formulario/login", {
                pagina: `"${usuario.username}" verificate en tu correo electronico.`,
            });

        }
        
        
    }catch(error){
        console.log(error);
        
    }

    

     
    
    
};




// Esportaciones de funciones
export {
    registro,
    registrando,
    
};

