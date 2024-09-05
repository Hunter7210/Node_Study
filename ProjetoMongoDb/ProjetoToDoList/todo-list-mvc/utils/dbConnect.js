import mongoose from "mongoose";

//Constante para verificar .env
const databaseURL = process.env.DATABASE_URL;

//Verificação se .env.local possui a variavel DATABASE_URL
if (!databaseURL) {
  throw new Error("Database não listado no .env.local");
}

//Conexão com o banco de dados do mongoDB
const connectMongo = async () => {
  //Verifica se ja esta conectado com o redyState = 0 não esta conectado
  if (mongoose.connection.readyState > 0) { // >0 == Conectado 
    return;
  } else {
    mongoose
      .connect(databaseURL)
      .then(() => console.log("Mongo Connect"))
      .catch((err) => console.log(err));
  }
};

export default connectMongo;