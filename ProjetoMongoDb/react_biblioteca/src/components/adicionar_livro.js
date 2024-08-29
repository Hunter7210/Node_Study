import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

// Estilização dos componentes
const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function CriarLivro() {
  const [livro, setLivro] = useState({
    titulo: "",
    autor: "",
    ano: "",
    genero: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro((prevLivro) => ({ ...prevLivro, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/livros", livro);
      window.location.href = "/";
    } catch (err) {
      console.error("Erro ao criar livro:", err);
    }
  };

  return (
    <Container>
      <h1>Criar Novo Livro</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="titulo"
          value={livro.titulo}
          onChange={handleChange}
          placeholder="Título"
        />
        <Input
          type="text"
          name="autor"
          value={livro.autor}
          onChange={handleChange}
          placeholder="Autor"
        />
        <Input
          type="text"
          name="ano"
          value={livro.ano}
          onChange={handleChange}
          placeholder="Ano"
        />
        <Input
          type="text"
          name="genero"
          value={livro.genero}
          onChange={handleChange}
          placeholder="Gênero"
        />
        <Button type="submit">Criar Livro</Button>
      </form>
    </Container>
  );
}

export default CriarLivro;
