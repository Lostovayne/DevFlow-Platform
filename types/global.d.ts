interface Tag {
  _id: string;
  name: string;
}

interface Author {
  _id: string;
  name: string;
  image: string;
}

interface Question {
  _id: string;
  title: string;
  tags: ReadonlyArray<Tag>;
  author: Author;
  createdAt: Date;
  upvotes: number;
  answers: number;
  views: number;
}
