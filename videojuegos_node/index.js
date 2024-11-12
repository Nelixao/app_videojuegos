// import = requires

import express from "express";
import inicio from "./routes/inicio_router.js";
import router_Login from "./routes/login_router.js";
import router_Registro from "./routes/registro_router.js";
import router_Cards from './routes/cards_router.js';
import router_Review from './routes/review_router.js'
import router_crud from "./routes/crud_router.js";


import session from "express-session";

// Registro Usuario

import db from "./config/db.js";


// CONFIGURACIONES PAGINA

// Crear la aplicacion 
const app = express();



//leer formulario
app.use(express.urlencoded({ extended: true }));

try {
    await db.authenticate();
    db.sync();
    console.log("Conexion exitosa a la base de datos");
} catch (error) {
    console.log(error);
}



// Accesos a los datos del formulario
// Traer datos del formulario

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

// routing -> Ruta por default
app.use("/", inicio);
app.use("/login", router_Login)
app.use("/register", router_Registro)
app.use("/consola", router_Cards)
app.use("/review", router_Review)
app.use("/admin", router_crud);
app.use("/image", express.static("public/image"))


// definiendo el puerto -> Puerto de comunicion
// Se le puede dar >=1024
const port = 2800;
app.listen(port, () => {
    console.log("Esperando peticiones en");
});



// // Accesos a los datos del formulario
// app.use(express.urlencoded({ extended: true }));
