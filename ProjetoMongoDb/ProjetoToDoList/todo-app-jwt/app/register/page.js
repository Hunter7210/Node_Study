"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      router.push("/login");
    } else {
      alert("Erro ao registrar");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Nome Usuário"
        value={name}
        onChange={(e) => SetName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email Usuário"
        value={email}
        onChange={(e) => SetEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha Usuario"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Registrar</button>
    </form>
  );
}
