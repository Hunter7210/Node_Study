//Importando a conexão do Mongo
import connectMongo from "@/utils/mongodb";
//Importando a clasee Todo do meu models
import Todo from "@/models/todo";
//Biblioteca do NEXT.JS
import { NextResponse } from "next/server";

//Criando a função do metodo GET
export async function GET() {

  //Estabelecer Conexão
  await connectMongo();
  try {
    //Busca todos os objetos da minha coleção
    const todos = await Todo.find({});
    //Return com a resposta do JSON, armazenando na minha variavel todos
    return NextResponse.json({ success: true, data: todos });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

//Criando o metodo para POST 
export async function POST(req) {
  await connectMongo();
  try {
    const data = await req.json(); //Converte o conteudo em JSON
    const todo = await Todo.create(data); //Cria usando o metodo CREATE com os valores da conversão
    return NextResponse.json({ success: true, data: todo });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
