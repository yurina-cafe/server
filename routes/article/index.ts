import { debug, debugArticle } from "../../utils/cli";
import express from "express";
import { fetchAllArticlesNames, fetchArticleByFileNameFromDisk, postArticle, deleteArticle } from "../../utils/file";

export const useRouteArticle = (app: express.Application) => {
  /**
   * @description 获取所有文章
   */
  app.get("/article/all", (req, res) => {
    debugArticle(req, "Get");
    res.send(fetchAllArticlesNames());
  });

  /**
   * @description 获取单篇文章
   */
  app.get("/articles/:dirpath/:id", (req, res) => {
    debugArticle(req, "Get");
    res.send(fetchArticleByFileNameFromDisk(req.params.dirpath, req.params.id));
  });

  /**
   * @description 新增文章
   */
  app.post("/article", (req, res) => {
    debugArticle(req, "Post");
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
    debugArticle(req, "Delete");
    const aStatusCode = deleteArticle(req.params.id);
    const Message = aStatusCode === 200 ? "success" : "failed";
    res.send({
      code: aStatusCode,
      message: Message
    });
  });
};
