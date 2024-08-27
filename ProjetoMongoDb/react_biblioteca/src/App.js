import React from "react";
import ListaLivro from "./components/lista_de_livros";
import AdicionarLivro from "./components/adicionar_livro";

function App() {
  return (
    <div className="App">
      <h1>Biblioteca</h1>
      <AdicionarLivro />
      <ListaLivro />
    </div>
  );
}

export default App;
