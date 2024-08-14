import express from "express";
import { useRouteArticle } from "./article";
import { useRouteNote } from "./note";

export const useRoutes = (app: express.Application) => {
  useRouteArticle(app);
  useRouteNote(app)
}
