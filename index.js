// AIzaSyA7F8lq0nAxufDXmkN978P7Fre149q0bFc
import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI(process.env.GOOGLE_API_KEY);

 const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history: [],
  });


async function main() {
  const userProblem = readlineSync.question("Ask me anything -----> ");
  const response = await chat.sendMessage({
    message: userProblem,
  });
  console.log(response.text)
 

  main();
}

main();
