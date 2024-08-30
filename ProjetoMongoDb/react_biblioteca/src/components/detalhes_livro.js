import React, { useEffect, useState } from "react";
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

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const CoverImage = styled.img`
  max-width: 20%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// Componente DetalhesLivro
function DetalhesLivro({ id, onBack }) {
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/livros/${id}`)
      .then((response) => setLivro(response.data))
      .catch((error) => console.error("Erro ao buscar livro:", error));
  }, [id]);

  if (!livro) return <Container>Carregando...</Container>;

  /*   // Construir a URL completa para a imagem
  const imagemUrl = livro.imagem
    ? `http://localhost:5000${livro.imagem}`
    : null; */

  return (
    <Container>
      <CoverImage src={livro.imagem} alt={`Capa do livro ${livro.titulo}`} />

      <Title>{livro.titulo}</Title>
      <Paragraph>
        <strong>Autor:</strong> {livro.autor}
      </Paragraph>
      <Paragraph>
        <strong>Ano:</strong> {livro.ano}
      </Paragraph>
      <Paragraph>
        <strong>Gênero:</strong> {livro.genero}
      </Paragraph>
      <Button onClick={onBack}>Voltar à Lista</Button>
    </Container>
  );
}

export default DetalhesLivro;
