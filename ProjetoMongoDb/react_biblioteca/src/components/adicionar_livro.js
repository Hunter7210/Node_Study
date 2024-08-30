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

const FileInput = styled(Input)`
  padding: 0;
`;

const Message = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  color: ${(props) => (props.error ? "red" : "green")};
  background-color: ${(props) => (props.error ? "#fdd" : "#dfd")};
`;

function CriarLivro() {
  const [livro, setLivro] = useState({
    titulo: "",
    autor: "",
    ano: "",
    genero: "",
  });

  const [imagem, setImagem] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro((prevLivro) => ({ ...prevLivro, [name]: value }));
  };

  const handleFileChange = (e) => {
    setImagem(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", livro.titulo);
    formData.append("autor", livro.autor);
    formData.append("ano", livro.ano);
    formData.append("genero", livro.genero);
    if (imagem) {
      formData.append("imagem", imagem);
    }

    try {
      await axios.post("http://localhost:5000/livros", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Livro criado com sucesso!");

      setTimeout(() => {
        window.location.href = "/";
      }, 2000); // Redireciona após 2 segundos para permitir que o usuário veja a mensagem de sucesso
    } catch (err) {
      console.error("Erro ao criar livro:", err);
      setMessage("Erro ao criar livro. Tente novamente.");
      
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
        <FileInput type="file" name="imagem" onChange={handleFileChange} />
        <Button type="submit">Criar Livro</Button>
      </form>
      {message && <Message error={error}>{message}</Message>}
    </Container>
  );
}

export default CriarLivro;
