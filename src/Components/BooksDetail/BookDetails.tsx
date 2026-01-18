import type { IBook } from "../../interfaces/bookInterfaces";
import type { FC } from "react";
import { useState } from "react";

interface BookDetailsProps {
  book: IBook;
  onBack: () => void;
}

export const BookDetails: FC<BookDetailsProps> = ({book, onBack}) => {

     const [isRead, setIsRead] = useState(book.isRead);


    return (
        <div>
             <img src={book.imgUrl} alt={book.name} width={200} />
             <h2>{book.name}</h2>
             <p>Author: {book.author}</p>
             <p>Genre: {book.genre}</p>
             <p>Rating: {book.rating}</p>
             <p>{book.description}</p>

      <label>
        <input
          type="checkbox"
          checked={isRead}
          onChange={() => setIsRead(prev => !prev)}
        /> Read </label>
      <br />
      <button onClick={onBack}>Назад до списку</button>

        </div>
      
    )
}