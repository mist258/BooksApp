import type { FC } from "react";
import type { IBook } from "../../interfaces/bookInterfaces";
import {Grid, Box } from "@mui/material";


interface BookProps {
  item: IBook;
  onSelect: (id: string) => void;
}

export const Book: FC<BookProps> = ({ item, onSelect }) => {
  const { name, author, imgUrl, rating } = item;

  return (
    <>
      <div>
        <img
          src={imgUrl}
          alt={name}
          onError={(e) => {
            e.currentTarget.src =
              "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500";
          }}
        />
        <p>{rating}</p>
        <p>{name}</p>
        <p>{author}</p>
        <button onClick={() => onSelect(item.id)}>Next</button>
      </div>
    </>
  );
};
