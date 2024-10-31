// Hashing the password (Encriptamiento) -> bcryptjs
import bcryptjs from "bcryptjs";
import db from "../config/db.js";


const registro = async (req, res) => {
    res.render("formulario/registro")
};

const registroUsuario = async (req, res) => {


    const nombre = req.body.nombre;
    const ap_paterno = req.body.ap_paterno;
    const ap_materno = req.body.ap_materno;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    const username = req.body.username;
    const pass = req.body.pass;
    const id_rol = req.body.id_rol;
    let passwordHaash = await bcryptjs.hash(pass, 8);

    db.query("INSERT INTO usuario SET ?", 
        {nombre:nombre, 
        ap_materno:ap_materno,
        ap_paterno:ap_paterno,
        correo:correo,
        telefono:telefono,
        username:username,
        pass:passwordHaash,
        id_rol:id_rol}, 
        
        async(error, results)=>{
            if(error){
                console.log(error);
            }else{  
                res.send('ALTA EXITOSA')
            }
        })
}

// Esportaciones de funciones
export{
    registro,
    registroUsuario
};