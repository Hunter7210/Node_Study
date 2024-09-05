"use client"; // Economiza imports

import { useState, useEffect } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch("/api/todos");
      if (!response.ok) throw new Error("Erro ao buscar tarefas");
      const data = await response.json();
      setTodos(data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const addTodo = async () => {
    if (!newTodo.trim()) return;

    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTodo }),
      });

      if (!response.ok) throw new Error("Erro ao adicionar tarefa");

      const data = await response.json();
      setTodos([...todos, data.data]);
      setNewTodo("");
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Erro ao deletar tarefa");

      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateTodo = async (id, status) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !status }),
      });

      if (!response.ok) throw new Error("Erro ao atualizar tarefa");

      fetchTodos();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="todo-container">
      <h1 className="title">To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Digite uma nova tarefa"
        />
        <button onClick={addTodo}>Adicionar Tarefa</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className="todo-item">
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.title}
            </span>
            <div className="actions">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => updateTodo(todo._id, todo.completed)}
                id={`checkbox-${todo._id}`}
              />
              <label
                htmlFor={`checkbox-${todo._id}`}
                className="checkbox-label"
              />
              <button onClick={() => deleteTodo(todo._id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .todo-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #121212; /* Fundo escuro */
          color: #e0e0e0; /* Texto claro */
        }
        .title {
          text-align: center;
          color: #ffffff; /* Título em branco */
        }
        .input-container {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        input[type="text"] {
          background-color: #333333; /* Fundo do input escuro */
          color: #ffffff; /* Texto do input claro */
          border: 1px solid #444444; /* Borda do input */
          padding: 8px;
          border-radius: 4px;
          flex: 1;
        }
        button {
          background-color: #1e88e5; /* Cor de fundo do botão */
          color: #ffffff; /* Texto do botão em branco */
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #1565c0; /* Cor de fundo do botão ao passar o mouse */
        }
        .todo-list {
          list-style: none;
          padding: 0;
        }
        .todo-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #333333; /* Borda inferior escura */
        }
        .completed {
          text-decoration: line-through;
          color: #b0b0b0; /* Texto riscado em cinza claro */
        }
        .pending {
          color: #ffffff; /* Texto pendente em branco */
        }
        .actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        input[type="checkbox"] {
          accent-color: #1e88e5; /* Cor do checkbox */
          margin-right: 5px;
        }
        .checkbox-label {
          display: none; /* Ocultar o label padrão */
        }
        button {
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
}
