// src/components/ListaDeLivros.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function ListaDeLivros() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        // Faça a requisição para a API para buscar todos os livros
        const response = await axios.get("http://localhost:5000/livros");
        setLivros(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLivros();
  }, []); // O array vazio significa que o efeito será executado apenas uma vez após o primeiro render

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <h1>Lista de Livros</h1>
      <ul>
        {livros.length > 0 ? (
          livros.map((livro) => (
            <li key={livro._id}>
              <strong>{livro.titulo}</strong> - {livro.autor} ({livro.ano})
            </li>
          ))
        ) : (
          <p>Nenhum livro encontrado.</p>
        )}
      </ul>
    </div>
  );
}

export default ListaDeLivros;
