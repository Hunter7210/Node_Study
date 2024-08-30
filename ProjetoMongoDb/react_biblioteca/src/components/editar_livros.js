import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ced4da;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #ffc107;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    background-color: #e0a800;
  }
`;

const CoverImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const EditarLivro = ({ id, onVoltar }) => {
  const [livro, setLivro] = useState({
    titulo: "",
    autor: "",
    ano: "",
    genero: "",
    imagem: "", // Adiciona campo para imagem
  });
  const [imagem, setImagem] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/livros/${id}`)
      .then((response) => {
        setLivro(response.data);
        setImagem(response.data.imagem); // Define a imagem existente
      })
      .catch((error) =>
        console.error("Erro ao carregar os dados do livro:", error)
      );
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro({ ...livro, [name]: value });
  };

  const handleFileChange = (e) => {
    setImagem(URL.createObjectURL(e.target.files[0])); // Cria URL para visualização
    setLivro({ ...livro, imagem: e.target.files[0] }); // Armazena o arquivo
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", livro.titulo);
    formData.append("autor", livro.autor);
    formData.append("ano", livro.ano);
    formData.append("genero", livro.genero);
    if (livro.imagem instanceof File) {
      formData.append("imagem", livro.imagem);
    }

    axios
      .patch(`http://localhost:5000/livros/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Livro atualizado com sucesso!");
        onVoltar();
      })
      .catch((error) => console.error("Erro ao atualizar o livro:", error));
  };

  return (
    <Container>
      <Title>Editar Livro</Title>
      {livro.imagem && (
        <CoverImage src={livro.imagem} alt={`Capa do livro ${livro.titulo}`} />
      )}
      <Form onSubmit={handleSubmit}>
        <Label>
          Título:
          <Input
            type="text"
            name="titulo"
            value={livro.titulo}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Autor:
          <Input
            type="text"
            name="autor"
            value={livro.autor}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Ano:
          <Input
            type="number"
            name="ano"
            value={livro.ano}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Gênero:
          <Input
            type="text"
            name="genero"
            value={livro.genero}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Capa:
          <Input type="file" accept="image/*" onChange={handleFileChange} />
        </Label>
        <Button type="submit">Atualizar Livro</Button>
        <Button type="button" onClick={onVoltar}>
          Voltar
        </Button>
      </Form>
    </Container>
  );
};

export default EditarLivro;
