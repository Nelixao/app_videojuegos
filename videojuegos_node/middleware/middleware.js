import jwt from "jsonwebtoken";
import promisify from "util";
import Usuario from "../model/usuario.js";

const isAuthenticated = async(req, res, next) =>{
    if (req.cookies.jwt){
        try{
            // Decode the JWT
            const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRETO);
            console.log("Decoded Token:", decoded); // Debugging line

            // Extract id_usuario and id_rol
            const { token, id_rol } = decoded;
            
            // Ensure id_rol is not undefined
            req.id_rol = id_rol || null;  // Fallback if id_rol is undefined or missing

            const user = await Usuario.findOne({where:{token}})
            
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

const authAdmin = (req, res, next) =>{
    console.log("Id Rol " + req.id_rol);
    
    if(req.id_rol === 2){
        return next()
    }
    
    return res.redirect("/")
}


export {isAuthenticated, authAdmin}