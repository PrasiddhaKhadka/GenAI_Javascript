import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";

dotenv.config();

const llm = new ChatOpenAI({
  model: "",
});

const response = await llm.invoke(
  "Describe the importance of learning generative AI for javascript developers in 50 words.",
);

console.log(response);
