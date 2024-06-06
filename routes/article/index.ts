import { debug, debugArticle } from "../../utils/cli";
import { getAllArticles } from "../../controller/articles";
import express from "express";
import { postArticle } from "../../utils/file";

export const useRouteArticle = (app: express.Application) => {
  /**
   * @description 获取所有文章
   */
  app.get("/article/all", (req, res) => {
    debug(req.toString(), Math.floor(Math.random() * 3));
    res.send(getAllArticles());
  });

  /**
   * @description 获取单篇文章
   */
  app.get("/article/:id", (req, res) => {
    res.send("get article");
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
