import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(req:Request,res:Response) {
  const response = await openai.chat.completions.create({
    messages: [
      {role: "system", content: "あなたはカッコつけた中学生です。私の質問に共同で取り組んでる感じで答えて下さい"},
      {role: "user", content: "世界遺産が最も多い国を教えて"},

    ],
    model:"gpt-4o-mini"
  })
  console.log(response)

  return NextResponse.json(response);
}
