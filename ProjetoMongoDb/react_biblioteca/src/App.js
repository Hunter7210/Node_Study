import React, { useState } from "react";
import styled from "styled-components";
import ListaLivros from "./components/lista_de_livros";
import EditarLivro from "./components/editar_livros";
import CriarLivro from "./components/adicionar_livro";
import DetalhesLivro from "./components/detalhes_livro";

// Estilização dos componentes
const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;
const NavButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const MainContent = styled.main`
  width: 100%;
  max-width: 900px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const App = () => {
  const [view, setView] = useState("livros"); // Gerencia a página atual
  const [livroId, setLivroId] = useState(null); // Armazena o ID do livro a ser editado

  const mudarParaEditarLivro = (id) => {
    setLivroId(id);
    setView("editarLivro");
  };

  const mudarParaAdicionarLivro = () => {
    setView("adicionarLivro");
  };

  const mudarParaLivros = () => {
    setView("livros");
  };

  const mudarParaDetalhes = (id) => {
    setLivroId(id);
    setView("detalhesLivro");
  };

  return (
    <Container>
      <Header>Biblioteca Virtual</Header>

      <MainContent>
            <div>
              <NavButton onClick={mudarParaAdicionarLivro}>
                Adicionar Livro
              </NavButton>
              <NavButton onClick={mudarParaLivros}>Voltar à Lista</NavButton>
            </div>
        {view === "livros" && (
          <ListaLivros
            onEdit={mudarParaEditarLivro}
            onDelete={mudarParaLivros}
            onDetails={mudarParaDetalhes}
          />
        )}
        {view === "adicionarLivro" && <CriarLivro onVoltar={mudarParaLivros} />}
        {view === "editarLivro" && (
          <EditarLivro id={livroId} onVoltar={mudarParaLivros} />
        )}
        {view === "detalhesLivro" && (
          <DetalhesLivro id={livroId} onBack={mudarParaLivros} />
        )}
      </MainContent>
    </Container>
  );
};

export default App;
