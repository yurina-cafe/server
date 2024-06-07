import { debug, debugArticle } from "../../utils/cli";
import express from "express";
import { fetchAllArticlesNames, fetchArticleByFileNameFromDisk, postArticle } from "../../utils/file";

export const useRouteArticle = (app: express.Application) => {
  /**
   * @description 获取所有文章
   */
  app.get("/article/all", (req, res) => {
    debug(req.toString(), Math.floor(Math.random() * 3));
    res.send(fetchAllArticlesNames());
  });

  /**
   * @description 获取单篇文章
   */
  app.get("/article/:id", (req, res) => {
    debug(req.toString(), 2);
    res.send(fetchArticleByFileNameFromDisk(req.params.id));
  });

  /**
   * @description 新增文章
   */
  app.post("/article", (req, res) => {
    debugArticle(req);
    const title = req.body.title + "." + "md";
    const content = req.body.content;
    const aStatusCode = postArticle(title, content);

    res.send({
      code: aStatusCode,
      message: "success",
      data: content,
    });
  });

  /**
   * @description 删除文章
   */
  app.delete("/article/:id", (req, res) => {
    res.send("delete article");
  });
};
