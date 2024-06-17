type BookData = {
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
    numberAvailable: number;
    location: string;
  }[];
};

type BooksData = {
  books: BookData[];
};

export const booksData: BooksData = {
  books: [
    {
      title: "CHAPERON ROUGE - Danijel Žeželj",
      resume:
        "Le chaperon rouge est un conte populaire européen. Il est surtout connu par le biais de deux versions : celle de Charles Perrault et celle des frères Grimm. Il est notamment caractérisé par sa morale, qui est souvent interprétée comme une mise en garde contre les dangers de la séduction.",
      author: "Danijel Žeželj",
      editor: "Mosquito",
      date: "2015",
      language: "Français",
      genre: "Fiction",
      isbn: "978-2-35283-290-4",
      review: {
        avgNote: 4.2,
        reviewNumber: 17,
      },
      cover: "/images/chaperon-serra.jpg",
      library: [
        {
          name: "Bibliothèque la Canopée",
          numberAvailable: 3,
          location: "Niveau 2 Jeunesse",
        },
        {
          name: "Bibliothèque Françoise Sagan",
          numberAvailable: 2,
          location: "Niveau 2 Jeunesse",
        },
        {
          name: "Bibliothèque Violette Leduc",
          numberAvailable: 3,
          location: "Niveau 2 Jeunesse",
        },
      ],
    },
    {
      title: "CHAPERON ROUGE",
      resume:
        "Le chaperon rouge est un conte populaire européen. Il est surtout connu par le biais de deux versions : celle de Charles Perrault et celle des frères Grimm. Il est notamment caractérisé par sa morale, qui est souvent interprétée comme une mise en garde contre les dangers de la séduction.",
      author: "Adolfo Serra",
      editor: "Actes Sud Junior",
      date: "2012",
      language: "Français",
      genre: "Fiction",
      isbn: "978-2-35283-290-1",
      review: {
        avgNote: 4.2,
        reviewNumber: 17,
      },
      cover: "/images/chaperon-serra.jpg",
      library: [
        {
          name: "Bibliothèque la Canopée",
          numberAvailable: 3,
          location: "Niveau 2 Jeunesse",
        },
        {
          name: "Bibliothèque Violette Leduc",
          numberAvailable: 3,
          location: "Niveau 2 Jeunesse",
        },
      ],
    },
    {
      title: "CHAPERON ROUGE",
      resume:
        "Le chaperon rouge est un conte populaire européen. Il est surtout connu par le biais de deux versions : celle de Charles Perrault et celle des frères Grimm. Il est notamment caractérisé par sa morale, qui est souvent interprétée comme une mise en garde contre les dangers de la séduction.",
      author: "Bethan Woollvin",
      editor: "Edition Albin Michel",
      date: "2018",
      language: "Français",
      genre: "Fiction",
      isbn: "978-2-35283-290-2",
      review: {
        avgNote: 4,
        reviewNumber: 13,
      },
      cover: "/images/chaperon-woolvin.jpg",
      library: [
        {
          name: "Bibliothèque BPI",
          numberAvailable: 3,
          location: "Niveau 2 Jeunesse",
        },
      ],
    },
    {
      title: "CHAPERON ROUGE",
      resume:
          "Le chaperon rouge est un conte populaire européen. Il est surtout connu par le biais de deux versions : celle de Charles Perrault et celle des frères Grimm. Il est notamment caractérisé par sa morale, qui est souvent interprétée comme une mise en garde contre les dangers de la séduction.",
      author: "Adolfo Serra",
      editor: "Actes Sud Junior",
      date: "2012",
      language: "Français",
      genre: "Fiction",
      isbn: "978-2-35283-290-1",
      review: {
        avgNote: 4.2,
        reviewNumber: 17,
      },
      cover: "/images/chaperon-serra.jpg",
      library: [
        {
          name: "Bibliothèque la Canopée",
          numberAvailable: 3,
          location: "Niveau 2 Jeunesse",
        },
        {
          name: "Bibliothèque Violette Leduc",
          numberAvailable: 3,
          location: "Niveau 2 Jeunesse",
        },
      ],
    },
  ],
};
