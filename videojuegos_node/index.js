// import = requires

import express from "express";
import inicio from "./routes/inicio_router.js";
import router_Login from "./routes/login_router.js";
import router_Registro from "./routes/registro_router.js";
import router_Cards from './routes/cards_router.js';
import router_Review from './routes/review_router.js'
import router_crud from "./routes/crud_router.js";
import router_crear from "./routes/crearVideojuego_router.js";
import router_leer from "./routes/leerVideojuego_router.js";
import router_eliminar from "./routes/eliminarVideojuego_router.js";
import router_actualizar from "./routes/actualizarVideojuego_router.js";
import router_Logout from "./routes/logout_router.js";

import session from "express-session";

// Registro Usuario

import db from "./config/db.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import router_Verificar from "./routes/router_Verificar.js";

// CONFIGURACIONES PAGINA

// Crear la aplicacion 
const app = express();

// Procesar datos enviados desde forms
app.use(express.urlencoded({ extended: true }));

try {
    await db.authenticate();
    db.sync();
    console.log("Conexion exitosa a la base de datos");
} catch (error) {
    console.log(error);
}


//seteamios las variables de entorno
dotenv.config({path:".env"});

// seteamos las cookies 
app.use(cookieParser()) 

// Renderizar las paginas
// pug -> estilo
// Motor de plantillas
app.set("view engine", "pug");
app.set("views", "./views");

// carpeta publica (Acceso de Usuario)
app.use(express.static("public"));


// Variables de Sesion

app.use(session({
    // Clave
    secret:"secret",
    // Guardar sesiones
    resave: true, 

    saveUninitialized:true
}))

// Llamar a los routers
// routing -> Ruta por default
app.use("/", inicio);
app.use("/login", router_Login);
app.use("/register", router_Registro);
app.use("/logout", router_Logout);
app.use("/verificar", router_Verificar);

app.use(function(req, res, exit) {
    
    res.locals.loggedin = req.session.loggedin;

    exit();
})


app.use("/consola", router_Cards)
app.use("/review", router_Review)
app.use("/admin", router_crud);
app.use("/admin", router_crear);
app.use("/admin", router_leer);
app.use("/admin", router_eliminar);
app.use("/admin", router_actualizar);



// definiendo el puerto -> Puerto de comunicion
// Se le puede dar >=1024
const port = 2800;
app.listen(port, () => {
    console.log("Esperando peticiones en");
});



// // Accesos a los datos del formulario
// app.use(express.urlencoded({ extended: true }));
