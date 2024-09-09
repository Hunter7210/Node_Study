//Criação do CRUD

//Importando a meu Objeto de TODO
import Todo from "@/models/Todo";
//Importando a minha conexão
import connectMongo from "@/utils/dbConnect";

//Carregar todas as tarefas que esta relacionada ao meu Usuario
export const getTodos = async (req, res) => {
  await connectMongo();
  try {
    //Buscar todas as tarefas que oo usuario possui
    const todos = await Todo.find({ UserId: req.user.userId });
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Criar tarefa
export const addTodos = async (req, res) => {
  const { title } = req.body; //{title} ja pega direto;
  await connectMongo();
  try {
    const newTodo = new Todo({
      title,
      UserId: req.user.userId,
    });
    await newTodo.save();
    res.status(201).json({ todo: newTodo });
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar tarefa" });
  }
};

//Atualizar Tarefa
export const updateTodo = async (req, res) => {
  const { id } = req.query;
  const data = req.body;
  await connectMongo();

  try {
    const updateTodo = await Todo.findOneAndUpdate(
      { _id: id, userId: req.user.userId },
      { data },
      { new: true }
    );
    if (!updateTodo)
      return res.status(404).json({ message: "Tarefa não encontrada" });
    res.status(200).json({ todo: updateTodo });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar tarefa" });
  }
};

//Deletando a Tarefa
export const deleteTodo = async (req, res) => {
  const { id } = req.query;
  await connectMongo();

  try {
    const deletedTodo = await Todo.findOneAndDelete({
      _id: id,
      userId: req.user.userId,
    });
    if (!deletedTodo)
      return res.status(404).json({ message: "Tarefa não encontrada" });
    res.status(200).json({ message: "Tarefa deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar tarefa" });
  }
};
