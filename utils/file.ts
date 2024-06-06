import fs from "fs";

type IPath = string;
type MDContent = string;

/**
 * @todo get article content by file name
 */
export const fetchArticleByFileNameFromDisk = (fileName: IPath) => {
  return fileName + "all articles";
};

/**
 * @todo get all articles names
 * @returns
 */
export const fetchAllArticlesNames = () => {
  return "all articles names";
};

/**
 * @todo post article
 * @returns 200
 */
export const postArticle = (fileName: IPath, content: MDContent) => {
  if (fs.existsSync(`data/${fileName}`)) {
    return 10001;
  }
  fs.writeFileSync(`data/${fileName}`, content);
  return 200;
};

/**
 * @temp-deprecated
 * @returns
 */
export const deleteArticle = () => {
  return "delete article";
};
