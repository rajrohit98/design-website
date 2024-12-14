// import * as React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Cards() {
  return (
    <Card
      sx={{
        width: "330px",
        height: "200px",
        paddingLeft: "10px",
      }}
    >
      <CardContent>
        <Typography variant="h5">Title</Typography>
        <Typography sx={{ mt: "10px" }} color="text.secondary">
          A suitable description
        </Typography>
        <Typography
          variant="h5"
          fontWeight={"bold"}
          sx={{
            mt: "20px",
          }}
        >
          $ 1000.0 M
        </Typography>

        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <ArrowDropUpIcon
            fontSize="large"
            color="green"
            style={{
              color: "green",
            }}
          />
          <Typography
            variant="h6"
            fontWeight={"bold"}
            sx={{
              mt: "20px",
            }}
          >
            100.0 %
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Cards;
