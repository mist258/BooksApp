import type { FC } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Rating,
  Button,
  Grid,
  styled,
} from "@mui/material";
import type { IBook } from "../../interfaces/bookInterfaces";

interface BookProps {
  item: IBook;
  onSelect: (id: string) => void;
}

const ItemCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 400,
  margin: "auto",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[6],
  },
}));

export const Book: FC<BookProps> = ({ item, onSelect }) => {
  const { name, author, imgUrl, rating } = item;

  const imageUrl =
    imgUrl && imgUrl.trim() !== ""
      ? imgUrl
      : "https://www.flaggingdirect.com/images/No-Image-Placeholder.png";

  return (
    <ItemCard>
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Box
              sx={{
                width: "100%",
                height: 350,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <img
                src={
                  imageUrl ||
                  "https://www.flaggingdirect.com/images/No-Image-Placeholder.png"
                }
                alt={name}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Box display="flex" alignItems="center" gap={1}>
              <Rating value={rating} readOnly precision={0.5} size="small" />
              <Typography variant="body2">{rating}</Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="body2" color="text.secondary">
              {author}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" fontWeight="bold">
              {name}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }} display="flex" justifyContent="center">
            <Button variant="contained" onClick={() => onSelect(item.id)}>
              Book details
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </ItemCard>
  );
};
