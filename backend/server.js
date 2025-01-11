import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
    console.log("App is running");
});