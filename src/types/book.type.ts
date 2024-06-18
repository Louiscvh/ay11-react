type BookData = {
  id: number;
  title: string;
  resume: string;
  author: string;
  editor: string;
  date: string;
  language: string;
  genre: string;
  isbn: string;
  review: {
    avgNote: number;
    reviewNumber: number;
  };
  cover: string;
  library: {
    name: string;
    address: string;
    numberAvailable: number;
    location: string;
  }[];
};

type BooksData = {
  books: BookData[];
};