import User from "@/models/User";
import connectMongo from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

//METODO DO TIPO POST PARA LOGIN
export async function POST(request) {
  //Passa apenas o campo email, password da minha coleção para o JSON
  const { email, password } = await request.json();
  await connectMongo();
  try {
    const user = await User.findOne({ email }); //ENCONTRA O OBJETO EM QUE O EMAIL IGUAL NA COLEÇÃO
    //Verificar se o email exite
    //Validando
    if (user && user.comparePassword(password)) {
      //Cria um token para o usuario pegando informações do site, do _id do usuario e minha chave secreta que esta no meu .env OBS: expira em 1H(Este tempo pode ser alterado até mesmo retirado)
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return NextResponse.json({ token });
    } else {
      return NextResponse.json({ sucess: false }, { status: 400 }); //Erro de acesso
    }
  } catch (error) {
    return NextResponse.json({ sucess: false }, { status: 404 }); //Erro de conexão
  }
}
