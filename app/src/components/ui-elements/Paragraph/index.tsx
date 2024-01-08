import { paragraphType } from "./paragraph.d";
import { Typography } from "@mui/material";

export default function Paragraph({ children }: paragraphType) {
  return (
    <Typography color="text.secondary" component="div">
      {children}
    </Typography>
  );
}
