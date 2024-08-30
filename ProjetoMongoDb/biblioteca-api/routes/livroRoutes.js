const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const livroController = require("../controllers/livroController");

// Configuração do multer para armazenamento de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img"); // Diretório para armazenar as imagens
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nome do arquivo
  },
});

const upload = multer({ storage: storage });

// Rota para criar um novo livro com upload de imagem
router.post("/criar", upload.single("imagem"), livroController.criarLivro);

// Outras rotas
router.get("/", livroController.listarLivros);
router.get("/:id", livroController.buscarLivroPorId);
router.put("/:id", livroController.atualizarLivro);
router.delete("/:id", livroController.deletarLivro);

module.exports = router;
