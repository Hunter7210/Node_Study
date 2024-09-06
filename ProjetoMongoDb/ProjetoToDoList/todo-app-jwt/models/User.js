//Estrutura de models define a arquitetura da minha coleção

import mongoose, { Schema } from "mongoose";
//Usando bcrypt para criptografar as minhas senhas
import bcrypt from "bcrypt";

//Criando a estrutura da minha coleção com Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Chamar Crypto
//Criptografando a senha
UserSchema.pre("create", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//Método para comparar senhas
UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

//Exportando
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
