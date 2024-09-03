//Importando o mongoose para montar a coleção que vai dentro do meu banco de dados
import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
//Task title
  title: {
    type: String,
    required: true,
  },
  //Status Task
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);