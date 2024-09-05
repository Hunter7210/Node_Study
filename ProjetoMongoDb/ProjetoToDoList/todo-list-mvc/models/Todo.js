import mongoose from "mongoose";

//Criando o Schema
const TodoSchema = new mongoose.Schema({
  //Criando as chaves da minha coleção
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ["A Fazer", "Fazendo", "Feito"],
    default: "A Fazer",
  },
});

//Busca no model o arquivo Todo ou ele busca para TodoSchema
const todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

export default todo;