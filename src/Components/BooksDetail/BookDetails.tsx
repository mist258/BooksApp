import type { IBook } from "../../interfaces/bookInterfaces";
import type { FC } from "react";
import { useState } from "react";
import { Grid, Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

interface BookDetailsProps {
  book: IBook;
  onBack: () => void;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export const BookDetails: FC<BookDetailsProps> = ({ book, onBack }) => {
  const [isRead, setIsRead] = useState(book.isRead);

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box>
          <img
            src={book.imgUrl}
            alt={book.name}
            style={{
              width: "100%",
              maxHeight: "auto",
              objectFit: "contain",
            }}
            onError={(e) => {
              e.currentTarget.src =
                "https://www.flaggingdirect.com/images/No-Image-Placeholder.png";
            }}
          />

          <Button variant="contained" onClick={onBack} sx={{ mt: 2 }} fullWidth>
            Return to list
          </Button>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Item>{book.name}</Item>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Item>Author: {book.author}</Item>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Item>Genre: {book.genre}</Item>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Item>Rating: {book.rating}</Item>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Item>Description: {book.description}</Item>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isRead}
                  onChange={() => setIsRead((prev) => !prev)}
                />
              }
              label="Read"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
