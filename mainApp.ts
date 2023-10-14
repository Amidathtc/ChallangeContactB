import express, { Application } from "express";
import cors from "cors";
import contact from "./router/contactRouter"

export const mainApp = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
   
    .use("/api", contact)
};
