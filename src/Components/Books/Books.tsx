import type { FC } from "react";
import { Book } from "../Book/Book";
import type { IBook } from "../../interfaces/bookInterfaces";

interface BooksProps {
  books: IBook[];
  onSelect: (id: string) => void;
}

export const Books: FC<BooksProps> = ({ books, onSelect }) => {
  return (
    <>
      <div>
        {books.map((book) => (
          <Book key={book.id} item={book} onSelect={onSelect} />
        ))}
      </div>
    </>
  );
};
