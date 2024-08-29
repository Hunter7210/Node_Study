const mongoose = require("mongoose");

const LivroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  ano: {
    type: Number,
    required: true,
  },
  genero: {
    type: String,
    required: false,
  },
  imagem: {
    type: String, // Campo para armazenar o URL da imagem
    required: false,
  },
});

module.exports = mongoose.model("Livro", LivroSchema);
