import type { IBook } from "../../interfaces/bookInterfaces";
import type { FC } from "react";
import { useState } from "react";
import {
  Rating,
  Button,
  Grid,
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

interface BookDetailsProps {
  book: IBook;
  onBack: () => void;
}

export const BookDetails: FC<BookDetailsProps> = ({ book, onBack }) => {
  const [isRead, setIsRead] = useState(book.isRead);

  
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <img
          src={book.imgUrl}
          alt={book.name}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            borderRadius: 4,
          }}
          onError={(e) => {
            e.currentTarget.src =
              "https://www.flaggingdirect.com/images/No-Image-Placeholder.png";
          }}
        />

        <Button variant="contained" onClick={onBack} sx={{ mt: 2 }} fullWidth>
          Return to list
        </Button>
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h5" fontWeight="bold">
              {book.name}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="h5" fontWeight="bold">
              Author:
            </Typography>

            <Typography variant="h6" fontWeight="regular">
              {book.author}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="h5" fontWeight="bold">
              Genre:
            </Typography>
            <Typography variant="h6" fontWeight="regular">
              {book.genre}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="h5" fontWeight="bold">
              Description:
            </Typography>
            <Typography variant="h6" fontWeight="regular">
              {book.description}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Box display="flex" alignItems="center">
              <Rating
                name="read-only"
                value={book.rating}
                readOnly
                precision={0.5}
              />
              <Box sx={{ ml: 2 }}>{book.rating}</Box>
            </Box>
          </Grid>

          <Grid>
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
