// import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

function Cards() {
  return (
      <Card sx={{ maxWidth: "200px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Title
        </Typography>
        <Typography sx={{ mb: 1.0 }} color="text.secondary">
          A suitable description
        </Typography>
        <Typography variant="body2">
          $ 1000.0 M
          <br />
          {"100.0%"}
        </Typography>
      </CardContent>
      </Card>
  );
}

export default Cards;