import jwt from "jsonwebtoken";

export const jwtMiddleware = (handler) => async (req, res) => {
  // Extrai o token do cabeçalho Authorization
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token ausente ou inválido" });
  }

  try {
    // Verifica e decodifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Armazena os dados do usuário no request
    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
};
