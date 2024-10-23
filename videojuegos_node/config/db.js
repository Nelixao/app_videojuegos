// Conexion a Base de Datos 

// Importamos 'Sequileze' se conecta a la base de datos 
// aquire:ms (milisegundos)
import { Sequelize } from "sequelize";
                // Creamos un nuevo objeto de Sequileze, y le damos sus atributos
                // Base de Datos, Usuario, Password
const db = new Sequelize('tienda', 'root', "131404", {
    dialect:'mariadb', // Comunicacion
    dialectOptions:{
        host:'127.0.0.1',
        port: '3306',
        timestamps:false,
        underscore:false,
        pool:{
            // Maximo & Minimo de conexiones
            max:5, 
            min:0,
            aquire:30000, // Milisegundos
            idle:10000
        },

        operatorAlies:false
    }
});

export default db;