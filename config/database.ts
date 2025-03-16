import mongoose, { Connection } from "mongoose";

console.log("a");
// URL de conexión a la base de datos. Cambia esto según tu configuración.
// Configuración de la conexión a la base de datos

mongoose.connect('mongodb://admin:password@localhost:27017/MarketPlace?authSource=admin').then(() => console.log('Conectado a MongoDB Local'))
.catch(err => console.error('Error al conectar', err));
const db: Connection = mongoose.connection;

db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", () => {
  console.log("Conexión exitosa a la base de datos MongoDB");
});

export default db;
