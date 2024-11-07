// Conexion a Base de Datos

// Importamos 'Sequileze' se conecta a la base de datos
// aquire:ms (milisegundos)
import { Sequelize } from "sequelize";
<<<<<<< HEAD
// Creamos un nuevo objeto de Sequileze, y le damos sus atributos
// Base de Datos, Usuario, Password
const db = new Sequelize("tienda", "root", "1234", {
  dialect: "mariadb", // Comunicacion
  dialectOptions: {
    host: "127.0.0.1",
    port: "3306",
    timestamps: false,
    underscore: false,
    pool: {
      // Maximo & Minimo de conexiones
      max: 5,
      min: 0,
      aquire: 30000, // Milisegundos
      idle: 10000,
    },
=======
import dotenv from "dotenv";

// Invocamos a dotenv
// Configurar variables de entorno
dotenv.config({path:".env"})

                // Creamos un nuevo objeto de Sequileze, y le damos sus atributos
                // Base de Datos, Usuario, Password
const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect:process.env.DB_DIALEC , // Comunicacion
    dialectOptions:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        timestamps:false,
        underscore:false,
        pool:{
            // Maximo & Minimo de conexiones
            max:5, 
            min:0,
            aquire:30000, // Milisegundos
            idle:10000
        },
>>>>>>> 4a2402ebab24398edce9069436771a6d4c4e27dd

    operatorAlies: false,
  },
});

export default db;
