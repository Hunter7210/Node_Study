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

const Button = styled.button`
  background-color: ${(props) => (props.edit ? "#28a745" : "#dc3545")};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.edit ? "#218838" : "#c82333")};
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer; /* Adiciona cursor de ponteiro para indicar que o item é clicável */

  &:hover {
    background-color: #f9f9f9; /* Adiciona uma leve mudança de cor ao passar o mouse */
  }
`;

function ListaLivros({ onEdit, onDelete, onDetails }) {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await axios.get("http://localhost:5000/livros");
        setLivros(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLivros();
  }, []);

  const handleEdit = (id, e) => {
    e.stopPropagation();
    onEdit(id); // Chama a função de callback para edição
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    try {
      await axios.delete(`http://localhost:5000/livros/${id}`);
      setLivros(livros.filter((livro) => livro._id !== id));
      onDelete(id); // Chama a função de callback para exclusão
    } catch (err) {
      console.error("Erro ao excluir livro:", err);
    }
  };

  const handleDetails = (id) => {
    onDetails(id); // Chama a função de callback para ver detalhes
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <Container>
      <ul>
        {livros.length > 0 ? (
          livros.map((livro) => (
            <ListItem key={livro._id} onClick={() => handleDetails(livro._id)}>
              <span>
                <strong>{livro.titulo}</strong> - {livro.autor} ({livro.ano})
              </span>
              <div>
                <Button edit onClick={(e) => handleEdit(livro._id, e)}>
                  Editar
                </Button>
                <Button onClick={(e) => handleDelete(livro._id, e)}>
                  Excluir
                </Button>
              </div>
            </ListItem>
          ))
        ) : (
          <p>Nenhum livro encontrado.</p>
        )}
      </ul>
    </Container>
  );
}

export default ListaLivros;
