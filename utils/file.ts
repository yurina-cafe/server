import fs from "fs";

type IPath = string;
type MDContent = string;

/**
 * @todo get article content by file name
 */
export const fetchArticleByFileNameFromDisk = (fileName: IPath) => {
  const article = fs.readFileSync(`data/${fileName}.md`);
  return article;
};

/**
 * @todo get all articles names
 * @returns
 */
export const fetchAllArticlesNames = () => {
  const exitArticles: string[] = fs.readdirSync("data")
  return exitArticles;
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
export const deleteArticle = (fileName: string) => {
  if (!fs.existsSync(`data/${fileName}`)) {
    return 404;
  }
  fs.unlinkSync(`data/${fileName}`);
  if (fs.existsSync(`data/${fileName}`)) {
    return 500;
  }
  return 200;
};

/**
 * @todo get all note names
 * @returns notenmae
 */
export const fetchAllNotesNames = () => {
  const exitNotes: string[] = fs.readdirSync("notes");
  return exitNotes;
}

/**
 * @todo get note content by filename
 */

export const fetchNoteByFileNameFromDisk = (fileName: IPath) => {
  const note = fs.readFileSync(`notes/${fileName}.md`)
  return note;
}
