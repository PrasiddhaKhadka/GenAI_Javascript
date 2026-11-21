import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from "dotenv";

dotenv.config();

await personalisedPitch("Generative AI", "Javascript Developer", 100);

async function personalisedPitch(
  course: string,
  role: string,
  wordLimit: number,
) {
  const promptTemplate = new PromptTemplate({
    template:
      "Describe the importance of learning {course} for a {role}. Limit the output to {wordLimit} words.",
    inputVariables: ["course", "role", "wordLimit"],
  });

  const formattedPrompt = await promptTemplate.format({
    course,
    role,
    wordLimit,
  });
  console.log("Formatted template : ", formattedPrompt);

  const llm = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
  });

  const outputParser = new StringOutputParser();

  const lcelChain = RunnableSequence.from([promptTemplate, llm, outputParser]);

  const lcelResponse = await lcelChain.invoke({
    course,
    role,
    wordLimit,
  });

  console.log("Answer from LCEL chain: ", lcelResponse);
}
