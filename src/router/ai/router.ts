import { Router, Request, Response } from "express";
import { testFunc } from "./openai";

export const openaiRouter = Router();

openaiRouter.get('/', async (req: Request, res: Response) => {
  res.send('Hello World');
});

openaiRouter.get('/test', async (req: Request, res: Response) => {
  const result = await testFunc();
  res.send(result);
});