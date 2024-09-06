import User from "@/models/User"; //@ substitui todos os ../ 
import connectMongo from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST(request) { //Request pega os dados do meu formulario
    const data = await request.json();//Convertendo os dados do meu request par json
    await connectMongo();

    try {
        const user =  await User.create(data);
        return NextResponse.json({success: true ,data:user})
    } catch (error) {
        return NextResponse.json({success: false}, {status: 400})
    }
}

export async function GET() {
    
}
