import fs from 'fs'


/**
 * @todo get book csv
 */
export const fetchBookCsvFromDisk = () => {
  const bookcsv = fs.readFileSync('books/books.csv')
  return bookcsv;
}
