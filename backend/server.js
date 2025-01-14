import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
    try {
        const question = req.body.question,
        const response = await openai.createCompletion({
            model: "gpt-4o",
            prompt: `${prompt}`,
            temperature: 0, // Higher values mean the model will take more risks
            max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest tokens, which support 4096)
            top_p: 1, // Alternative to sampling with temperature, nucleus sampling
            frequency_penalty: 0.5, // -2.0-2.0. Positive values penalise new tokens based on their exsisting frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim
            presence_penalty: 0, // -2.0-2.0. Positive values penalise new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics
        });
    }
});

app.listen(8000, () => {
    console.log("App is running");
});