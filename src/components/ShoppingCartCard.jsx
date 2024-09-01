import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
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
        <Typography textColor="success.plainColor" sx={{ fontWeight: "md" }}>
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
          <Button variant="text">View Item</Button>
        </Link>
      </CardOverflow>
    </Card>
  );
}
