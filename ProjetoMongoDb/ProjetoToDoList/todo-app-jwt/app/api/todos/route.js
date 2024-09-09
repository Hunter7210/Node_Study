//Importando JWT: Armazena informação do Usuario para pegar depois
import { jwtMiddleware } from "@/utils/middleware";
//Importando os metodos do meu controller
import { getTodos, addTodos, updateTodo, deleteTodo } from "@/controllers/TodoController";

// Não ha necessidade de colocar o try catch pois ja foi tratado no Controller

//Metodo GET - Listando as tarefas do Usuario
export async function GET(req, res) {
  //Chamando o middleware
  return jwtMiddleware(async (req, res) => {
    //Chamando o metodo getTodos do Controller
    await getTodos(req, res);
  })(req, res);
}

//Metodo POST - adicionado uma tarefa
export async function POST(req, res) {
  return jwtMiddleware(async (req, res) => {
    //Chamdando o metodo addTodos do Controller
    await addTodos(req, res);
  })(req, res);
}

//Metodo PUT - atualizar uma tarefa
export async function PUT(req, res) {
  return jwtMiddleware(async (req, res) => {
    await updateTodo(req, res);
  })(req, res);
}

//Metodo DELTE  - deletar uma tarefa
export async function DELETE(req, res) {
    return jwtMiddleware(async (req, res) => {
        await deleteTodo(req, res);
    })(req, res);
}


