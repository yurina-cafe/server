import express from 'express'
import { debugArticle } from 'utils/cli';
import { fetchBookCsvFromDisk } from 'utils/book';

export const useRouteBook = (app: express.Application) => {
  app.get("/article/all", (req, res) => {
    debugArticle(req, "Get");
    res.send(fetchBookCsvFromDisk());
  });
}
