import React, { useState } from "react";
import axios from "axios";

function AdicionarLivro() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");
  const [genero, setGenero] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoLivro = { titulo, autor, ano, genero };

    axios
      .post("http://localhost:5000/livros", novoLivro)
      .then((response) => {
        console.log("Livro criado:", response.data);
      })
      .catch((error) => console.error("Erro ao criar livro:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />
      <input
        type="number"
        placeholder="Ano"
        value={ano}
        onChange={(e) => setAno(e.target.value)}
      />
      <input
        type="text"
        placeholder="Gênero"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      />
      <button type="submit">Adicionar Livro</button>
    </form>
  );
}

export default AdicionarLivro;
