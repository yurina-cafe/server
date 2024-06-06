import express from "express";
import { useRouteArticle } from "./article";

export const useRoutes = (app: express.Application) => {
  useRouteArticle(app);
}
