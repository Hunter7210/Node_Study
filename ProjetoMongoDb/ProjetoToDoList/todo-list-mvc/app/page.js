"use client"; //Economiza imports

//Importando as bibliotecas do react
import { useState, useEffect } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos(); //Por padrão ja realiza o metodo GET
  }, []);

  //Para buscar todos
  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    setTodos(data.data);
  };

  //Para adicionar un novo
  const addTodo = async () => {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTodo }),
    });
    const data = await response.json();
    setTodos([...todos, data.data]);
    setNewTodo(""); //Campo do input
  };

  //Deletar o item
  const deleteTodo = async (id) => {
    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  //Atualizar o item
  const updateTodo = async (id) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ complete: true }),
    });
    const data = await response.json();
    setTodos([todos.filter((todo) => todo._id !== id)]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Adicionar Tarefa</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo._id)}>Excluir</button>
            <button onClick={() => updateTodo(todo._id)}>
              Marcar como concluida
            </button>

            <p>{todo.completed}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
