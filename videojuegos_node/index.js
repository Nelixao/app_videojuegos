// import = requires

import express from "express";
import inicio from "./routes/inicio_router.js";
import { login } from "./controllers/loginController.js";

// CONFIGURACIONES PAGINA


// Crear la aplicacion 
const app = express();

// Accesos a los datos del formulario
// Traer datos del formulario

// Renderizar las paginas
// pug -> estilo
app.set("view engine", "pug");
app.set("views", "./views");

// carpeta publica (Acceso de Usuario)
app.use(express.static("public"));

// routing -> Ruta por default
app.use("/", inicio);
app.use("/", login)


// definiendo el puerto -> Puerto de comunicion
// Se le puede dar >=1024
const port = 2800;
app.listen(port, () => {
    console.log("Esperando peticiones en");
});


// Accesos a los datos del formulario
app.use(express.urlencoded({extended:true}));
