import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #f8f9fa;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeletarLivros = ({ onEditarLivro, onAdicionarLivro }) => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/livros")
      .then((response) => setLivros(response.data))
      .catch((error) => console.error("Erro ao carregar os livros:", error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Você tem certeza que deseja deletar este livro?")) {
      axios
        .delete(`http://localhost:5000/livros/${id}`)
        .then(() => {
          alert("Livro deletado com sucesso!");
          setLivros(livros.filter((livro) => livro._id !== id));
        })
        .catch((error) => console.error("Erro ao deletar o livro:", error));
    }
  };

  return (
    <Container>
      <Title>Lista de Livros</Title>
      <Button onClick={onAdicionarLivro}>Adicionar Livro</Button>
      <List>
        {livros.map((livro) => (
          <ListItem key={livro._id}>
            {livro.titulo} - {livro.autor}
            <div>
              <Button onClick={() => onEditarLivro(livro._id)}>Editar</Button>
              <Button onClick={() => handleDelete(livro._id)}>Deletar</Button>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default DeletarLivros;
