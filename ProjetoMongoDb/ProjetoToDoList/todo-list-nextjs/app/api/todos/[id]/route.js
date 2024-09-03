import connectMongo from "@/utils/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

//Criando o Método PUT para a edição
export async function PUT(req, { params }) {
  await connectMongo();
  try {
    //Conver os dados em JSON
    const data = await req.json();
    //Usa o metodo updateTodo() com os paramentros do id, e a minha variavel convertida em json
    const todo = await Todo.findByIdAndUpdate(params.id, data, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    return NextResponse.json({ success: true, data: todo });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

//Cria o metodo DELETE para deletar o item do id
export async function DELETE(req, { params }) {
  //Conecta com o MongoDB
    await connectMongo();
  try {
    //Usa o metodo DELETEONE para deletar o item do id
    const deletedTodo = await Todo.deleteOne({ _id: params.id });
    if (!deletedTodo) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
