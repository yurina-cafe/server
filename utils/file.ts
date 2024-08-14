import fs from "fs";
import path from "path";

type IPath = string;
type MDContent = string;
type IDirType = string;
/**
 * @todo get article content by file name
 */
export const fetchArticleByFileNameFromDisk = (dirPath: IDirType, fileName: IPath) => {
  const article = fs.readFileSync(`articles/${dirPath}/${fileName}.md`);
  return article;
};

/**
 * @todo get all articles names
 * @returns
 */
export const fetchAllArticlesNames = () => {
  const readDirectory = (dirPath: string) => {
    const items = fs.readdirSync(dirPath, { withFileTypes: true });
    const files: string[] = [];

    for (const item of items) {
      const fullPath = path.join(dirPath, item.name);
      if (item.isDirectory()) {
        // 递归调用
        files.push(...readDirectory(fullPath));
      } else {
        files.push(item.name);
      }
    }

    return files;
  }
  return readDirectory("articles");
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
