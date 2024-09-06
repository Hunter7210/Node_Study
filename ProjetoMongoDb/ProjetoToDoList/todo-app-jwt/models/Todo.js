//Estrutura de models define a arquitetura da minha coleção

import mongoose from "mongoose";

//Criando a estrutura da minha coleção com Schema
const TodoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", //Classe de Referência
    required: true,
  },
  title: {
    type: String,
    //Por padrão o required é true.
  },
  status: {
    type: String,
    enum: ["Pendente", "Em Progresso", "Concluído"],
    default: "Pendente",
  },
});

const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

export default Todo;
