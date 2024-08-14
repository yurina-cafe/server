import { debugArticle } from "../../utils/cli";
import express from "express";
import { fetchAllNotesNames, fetchNoteByFileNameFromDisk } from "../../utils/file";

export const useRouteNote = (app: express.Application) => {
  /**
   * @description 获取所有文章
   */
  app.get("/notes/all", (req, res) => {
    debugArticle(req, "Get");
    res.send(fetchAllNotesNames());
  });

  /**
   * @description 获取单篇文章
   */
  app.get("/notes/:id", (req, res) => {
    debugArticle(req, "Get");
    res.send(fetchNoteByFileNameFromDisk(req.params.id));
  });
};
