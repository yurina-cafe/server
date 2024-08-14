import { debugArticle } from "../../utils/cli";
import express from "express";
import { fetchAllNotesNames, fetchNoteByFileNameFromDisk } from "../../utils/file";

export const useRouteArticle = (app: express.Application) => {
  /**
   * @description 获取所有文章
   */
  app.get("/note/all", (req, res) => {
    debugArticle(req, "Get");
    res.send(fetchAllNotesNames());
  });

  /**
   * @description 获取单篇文章
   */
  app.get("/note/:id", (req, res) => {
    debugArticle(req, "Get");
    res.send(fetchNoteByFileNameFromDisk(req.params.id));
  });
};
