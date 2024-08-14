import express from "express";
import { useRouteArticle } from "./article";
import { useRouteNote } from "./note";
import { useRouteBook } from "./book";

export const useRoutes = (app: express.Application) => {
  useRouteArticle(app);
  useRouteNote(app)
  useRouteBook(app)
}
