// import = requires

import express from "express";
import inicio from "./routes/inicio_router.js";
import router_Login from "./routes/login_router.js";
import router_Registro from "./routes/registro_router.js";

import db from "./config/db.js";
import router_crud from "./routes/crud_router.js";
import router_crear from "./routes/crearVideojuego_router.js";
import router_leer from "./routes/leerVideojuego_router.js";
import router_eliminar from "./routes/eliminarVideojuego_router.js";
import router_actualizar from "./routes/actualizarVideojuego_router.js";

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
app.set("view engine", "pug");
app.set("views", "./views");

// carpeta publica (Acceso de Usuario)
app.use(express.static("public"));

// routing -> Ruta por default
app.use("/", inicio);
app.use("/formulario", router_Login);
app.use("/formulario", router_Registro);
app.use("/admin", router_crud);
app.use("/admin", router_crear);
app.use("/admin", router_leer);
app.use("/admin", router_eliminar);
app.use("/admin", router_actualizar);
/* app.use("/admin", router_actualizar);
app.use("/admin", router_leer);
app.use("/admin", router_eliminar); */

const port = 2800;
app.listen(port, () => {
  console.log("Esperando peticiones en");
});

// Accesos a los datos del formulario
app.use(express.urlencoded({ extended: true }));
