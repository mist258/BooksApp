import type { FC } from "react";
import type { IBook } from "../../interfaces/bookInterfaces";
import { Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

interface BookProps {
  item: IBook;
  onSelect: (id: string) => void;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export const Book: FC<BookProps> = ({ item, onSelect }) => {
  const { name, author, imgUrl, rating } = item;

  return (
    <>
      <Box>
        <Grid>
          <img
            src={imgUrl}
            alt={name}
            onError={(e) => {
              e.currentTarget.src =
                "https://www.flaggingdirect.com/images/No-Image-Placeholder.png";
            }}
          />
        </Grid>

        <Grid>
          <Item>{rating}</Item>
        </Grid>

        <Grid>
          <Item>{name}</Item>
        </Grid>

        <Grid>
          <Item>{author}</Item>
        </Grid>

        <Grid>
          <button onClick={() => onSelect(item.id)}>Next</button>
        </Grid>
      </Box>
    </>
  );
};
