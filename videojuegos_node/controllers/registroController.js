import Usuario from "../model/usuario.js";
import { check, validationResult } from "express-validator";
// Hashing the password (Encriptamiento) -> bcryptjs
import bcryptjs from "bcryptjs";
import { correoRegistro } from "../helpers/correos.js";
import { idGenera } from "../helpers/tokens.js";


const registro = async (req, res) => {
    res.render("formulario/registro")
};


const registrando = async (req, res) => {

    const password = req.body.pass;
    const passwordHaash = await bcryptjs.hash(password, 8);

    let valido = await validacionFormulario(req);

    if (!valido.isEmpty()) {
        return res.render("credenciales/registrar", {
            pagina: "Alta Usuario",
            errores: valido.array(),
        });

    }

    const usuario = await Usuario.create({
        nombre: req.body.nombre,
        ap_paterno: req.body.ap_paterno,
        ap_materno: req.body.ap_materno,
        correo: req.body.correo,
        telefono: req.body.telefono,
        username: req.body.username,
        pass: passwordHaash,
        token: idGenera(),
        id_rol: 1
    });
    await usuario.save();

    //mandar correo
    //mandando el correo
    correoRegistro({
        nombre:usuario.nombre,
        correo:usuario.correo,
        token:usuario.token
    })

    //mostrar mensaje de confirmacions
    res.render("formulario/login", {
        pagina: "Usuario se registro, revisa tu correo de confirmación",
    });
    
};

async function validacionFormulario(req) {

    await check("username")
        .notEmpty()
        .withMessage("Usuario no debe ser vacio")
        .run(req);

    await check("pass")
        .notEmpty()
        .withMessage("Password no debe ser vacio")
        .run(req);

    await check("correo")
        .notEmpty()
        .withMessage("Correo no debe ser vacio")
        .run(req);

    let salida = validationResult(req);
    return salida;
}


// Esportaciones de funciones
export {
    registro,
    registrando
};