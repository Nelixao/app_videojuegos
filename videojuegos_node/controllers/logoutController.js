import Usuario from "../model/usuario.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import promisify from "util"

const logout = async (req, res) =>{
    res.clearCookie("jwt");
    return res.redirect("/");
}

export {logout}