import dbConnect from "../../../../utils/dbConnect";
import User from "../../../../models/User";
import { NextResponse } from "next/server";
import { signToken } from "../../../../utils/jwtUtils";

export async function POST(req) {
  await dbConnect();
  const { email, password } = await req.json(); //Converte para JSON

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return NextResponse.json(
        { message: "Credenciais inválidas." },
        { status: 400 }
      );
    }

    const token = signToken(user._id); //Gera a chave de autenticação

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao autenticar usuário." },
      { status: 500 }
    );
  }
}
