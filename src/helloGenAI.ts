import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from "dotenv";

dotenv.config();

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
});

const response = await llm.invoke(
  "Describe the importance of learning generative AI for javascript developers in 50 words.",
);

console.log(response.content);
