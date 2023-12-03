import OpenAI from "openai";
import { Request, Response, Router } from "express";
import * as dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const testFunc = async () => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: 'gpt-4-1106-preview',
  });

  return completion;
};
