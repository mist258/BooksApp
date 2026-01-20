import type { IBook } from "../../interfaces/bookInterfaces";
import type { FC } from "react";
import { useState } from "react";

interface BookDetailsProps {
  book: IBook;
  onBack: () => void;
}

export const BookDetails: FC<BookDetailsProps> = ({ book, onBack }) => {
  const [isRead, setIsRead] = useState(book.isRead);

  return (
    <div>
      <img
        src={book.imgUrl}
        alt={book.name}
        onError={(e) => {
          e.currentTarget.src =
            "https://www.flaggingdirect.com/images/No-Image-Placeholder.png";
        }}
      />
      <h2>{book.name}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>{book.rating}</p>
      <p>{book.description}</p>

      <label>
        <input
          type="checkbox"
          checked={isRead}
          onChange={() => setIsRead((prev) => !prev)}
        />{" "}
        Read{" "}
      </label>
      <br />
      <button onClick={onBack}>Return to list</button>
    </div>
  );
};
