import express, { Application, Request, Response } from "express";
import cors from "cors";
import contact from "./router/contactRouter"

export const mainApp = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
    .use("/api", contact)


    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "Welcome",
        });
      } catch (error: any) {
        return res.status(400).json({
          message: `app route error:${error}`,
        });
      }
    });
};
