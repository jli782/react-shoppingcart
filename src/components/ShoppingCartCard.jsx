import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";

export default function RowCard({ ...props }) {
  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      sx={{ width: "260", marginY: "0.5rem" }}
    >
      <CardOverflow>
        <AspectRatio ratio="0.8" sx={{ width: 130 }}>
          <img
            src={props.productDetails.image}
            srcSet={props.productDetails.image}
            loading="lazy"
            alt={props.productDetails.title}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Grid container spacing={1}>
          <Grid size={12}>
            <Typography
              textColor="success.plainColor"
              sx={{ fontWeight: "md" }}
            >
              {props.productDetails.title}
            </Typography>
            <Typography level="body-sm">
              <b>Price per unit: </b>$
              {parseFloat(props.productDetails.price).toFixed(2)}
            </Typography>
            <Typography level="body-sm">
              <b>Quantity: </b>
              {props.productDetails.quantity}
            </Typography>
          </Grid>
          <Grid>
            <Button
              sx={{
                paddingX: 0,
                paddingY: "5px",
                position: "absolute",
                bottom: 0,
              }}
              onClick={props.handleDelete}
              name={props.productDetails.id}
            >
              Delete item
            </Button>
          </Grid>
        </Grid>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: "vertical-rl",
          justifyContent: "center",
          fontSize: "xs",
          fontWeight: "xl",
          letterSpacing: "1px",
          textTransform: "uppercase",
          borderLeft: "1px solid",
          borderColor: "divider",
          ":hover": {
            color: "#ffccbc",
            backgroundColor: "#ffccbc",
          },
        }}
      >
        <Link to={`../products/${props.productDetails.id}`}>
          <Button variant="text">Edit Item</Button>
        </Link>
      </CardOverflow>
    </Card>
  );
}
