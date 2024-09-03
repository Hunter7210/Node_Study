import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash a senha antes de salvar
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10); //Valor generico, GEMA DE CRIPTOGRAFIA
  this.password = await bcrypt.hash(this.password, salt); //Gera a senha Criptografada
  next();
});

// Método para comparar senhas
UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Verificar se o modelo já foi criado para evitar erro de recompilação no Next.js
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
