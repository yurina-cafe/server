import fs from 'fs'
import csv from 'csv'

const parse = csv.parse;

/**
 * @todo get book csv
 */
export const fetchBookCsvFromDisk = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const results: any[] = [];

    fs.createReadStream('books/booklist.csv')
      .pipe(parse({ columns: true }))
      .on('data', (data) => {
        // 去除键名中的不可见字符
        const cleanData = Object.keys(data).reduce((acc, key) => {
          const cleanKey = key.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '');
          acc[cleanKey] = data[key];
          return acc;
        }, {} as any);

        const translatedData = {
          name: cleanData['书名'],
          type: cleanData['类型'],
          author: cleanData['作家'],
          date: cleanData['时间']
        };

        results.push(translatedData);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};
