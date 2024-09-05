import Todo from "@/models/Todo";
import closeConnectionMongo from "@/utils/dbCloseConnection";
import connectMongo from "@/utils/mongodb";

//Criação do CRUD

//Metodo para buscar todas as tarefas
export const getTodos = async () => {
  await connectMongo();
  return await Todo.find({}) && (await closeConnectionMongo());
};

//Metodo para criar tarefas
export const createTodo = async (data) => {
  await connectMongo();

  return await Todo.create(data) && (await closeConnectionMongo());
};

//Metodo para atualizar uma unicar tarefa
export const updateTodo = async (id, data) => {
  await connectMongo();
  return (
    (await Todo.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    })) && await closeConnectionMongo()
  );
};

//Metodo para deletar uma unicar tarefa
export const deleteTodo = async (id) => {
  await connectMongo();
  return await Todo.deleteOne({ _id: id }) && (await closeConnectionMongo());
};
