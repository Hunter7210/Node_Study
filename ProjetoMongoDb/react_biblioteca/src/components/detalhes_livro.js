import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetalhesLivro() {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/livros/${id}`)
      .then((response) => setLivro(response.data))
      .catch((error) => console.error("Erro ao buscar livro:", error));
  }, [id]);

  if (!livro) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{livro.titulo}</h1>
      <p>Autor: {livro.autor}</p>
      <p>Ano: {livro.ano}</p>
      <p>Gênero: {livro.genero}</p>
    </div>
  );
}

export default DetalhesLivro;
