import type { FC } from "react";
import type { IBook } from "../../interfaces/bookInterfaces";

interface BookProps {
  item: IBook;
  onSelect: (id: string) => void;
}

export const Book: FC<BookProps> = ({ item, onSelect }) => {
  const { name, author, imgUrl, genre, rating } = item;

  return (
    <>
      <div>
        <img src={imgUrl} alt={name} />
        <p>{rating}</p>
        <p>{name}</p>
        <p>Genre: {genre}</p>
        <p>{author}</p>
        <button onClick={() => onSelect(item.id)}>Next</button>
      </div>
    </>
  );
};
