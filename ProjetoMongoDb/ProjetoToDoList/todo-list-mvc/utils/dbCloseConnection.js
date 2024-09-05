import mongoose from "mongoose";

//Conexão com o banco de dados do mongoDB
const closeConnectionMongo = async () => {
  //Verifica se ja esta conectado com o redyState = 0 não esta conectado
  if (mongoose.connection.readyState > 0) {
    // >0 == Conectado
    return;
  } else {
    mongoose
      .disconnect()
      .then(() => console.log("Mongo Disconnected with Sucesses"))
      .catch((err) => console.log(err));
  }
};

export default closeConnectionMongo;