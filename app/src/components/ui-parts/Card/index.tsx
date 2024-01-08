import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Paragraph } from "@ui-elements/index";
import { CardType } from "./card.d";

export default function CardParts({
  image = "",
  head = "",
  body = "",
  imageHeight = 140,
}: CardType) {
  return (
    <Card>
      {image && (
        <CardMedia sx={{ height: imageHeight }} image={image} title="" />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {head}
        </Typography>
        <Paragraph>{body}</Paragraph>
      </CardContent>
    </Card>
  );
}
