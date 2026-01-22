import { useState, useEffect } from "react";
import type { IBook } from "../../interfaces/bookInterfaces";
import { Books } from "../Books/Books";
import { listOfBooks } from "../../Data/BooksData";
import { BookDetails } from "../BooksDetail/BookDetails";
import {
  Container,
  Box,
  Grid,
  Button,
  Typography,
  TextField,
} from "@mui/material";

type NewBook = Omit<IBook, "id">;

const emptyBook = {
  name: "",
  author: "",
  genre: "",
  rating: 0,
  description: "",
  imgUrl: "",
  isRead: false,
};

export const BooksApp = () => {
  const [books, setBooks] = useState<IBook[]>(listOfBooks);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [filter, setFilter] = useState("");
  const [newBook, setNewBook] = useState<NewBook>(emptyBook);

  // component mounted
  useEffect(() => {
    console.log("BooksApp mounted");
  }, []);

  // component updated
  useEffect(() => {
    console.log("BooksApp changed");
  }, [books, filter, selectedBookId]);

  const getNextId = (): string => {
    return books.length > 0
      ? (Math.max(...books.map((b) => Number(b.id))) + 1).toString()
      : "1";
  };

  const filteredBooks = books.filter(
    (book) =>
      book.id.includes(filter) ||
      book.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      book.author.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setNewBook((prev) => ({
      ...prev,
      [name]:
        name === "rating" ? Math.min(Math.max(Number(value), 0), 5) : value,
    }));
  };

  const addBook = () => {
    if (!newBook.name || !newBook.author) return;

    const book: IBook = {
      ...newBook,
      id: getNextId(),
    };

    setBooks((prev) => [...prev, book]);

    setNewBook(emptyBook);
  };

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
      {selectedBookId === null ? (
        <>
          <Box mb={4}>
            <Grid container spacing={2}>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Books filtering
              </Typography>
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Filter by id, name, author"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "secondary.main",
                    },
                  }}
                />
              </Grid>
              <Grid size={12}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  Add new book to list
                </Typography>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={newBook.name}
                  onChange={handleChange}
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "secondary.main",
                    },
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Author"
                  name="author"
                  value={newBook.author}
                  onChange={handleChange}
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "secondary.main",
                    },
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Genre"
                  name="genre"
                  value={newBook.genre}
                  onChange={handleChange}
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "secondary.main",
                    },
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Rating"
                  type="number"
                  name="rating"
                  value={newBook.rating || ""}
                  onChange={handleChange}
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "secondary.main",
                    },
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Image URL"
                  name="imgUrl"
                  value={newBook.imgUrl}
                  onChange={handleChange}
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "secondary.main",
                    },
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
                  value={newBook.description}
                  onChange={handleChange}
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "secondary.main",
                    },
                  }}
                />
              </Grid>
              <Grid size={12}>
                <Button variant="contained" onClick={addBook}>
                  Add book to list
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Books books={filteredBooks} onSelect={setSelectedBookId} />
          </Box>
        </>
      ) : (
        <BookDetails
          book={books.find((b) => b.id === selectedBookId)!}
          onBack={() => setSelectedBookId(null)}
        />
      )}
    </Container>
  );
};
