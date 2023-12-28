import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardType } from "./card.d";

export default function CardParts({
  image = "",
  head = "",
  body = "",
}: CardType) {
  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image={image} title="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {head}
        </Typography>
        <Typography color="text.secondary">{body}</Typography>
      </CardContent>
    </Card>
  );
}
