import express from 'express'
import { debugArticle } from '../../utils/cli';
import { fetchBookCsvFromDisk } from '../../utils/book';

export const useRouteBook = (app: express.Application) => {
  app.get("/books", (req, res) => {
    debugArticle(req, "Get");
    fetchBookCsvFromDisk().then(data => {
      res.send(data);
    })
  });
}
