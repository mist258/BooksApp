import type { FC } from "react";
import { Book } from "../Book/Book";
import type { IBook } from "../../interfaces/bookInterfaces";
import { Grid, Box } from "@mui/material";

interface BooksProps {
  books: IBook[];
  onSelect: (id: string) => void;
}

export const Books: FC<BooksProps> = ({ books, onSelect }) => {
  return (
    <>
      <Box>
        <Grid container spacing={3}>
          {books.map((book) => (
            <Book key={book.id} item={book} onSelect={onSelect} />
          ))}
        </Grid>
      </Box>
    </>
  );
};
