export interface ResponseStandardObj {
  code: AmumuStatusCode;
  message: string;
  data: any;
}

export enum AmumuStatusCode {
  ARTICLE_HAS_BEEN_POSTED = 10001,
  SUCCESS = 200,
}

export interface Book {
  name: string;
  type: string;
  author: string;
  date: string;
}
