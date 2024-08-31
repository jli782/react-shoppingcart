import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

import { Link } from "react-router-dom";

export default function ProductCard({ productDetails }) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 320, minHeight: 280 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={productDetails.image}
            srcSet={productDetails.image}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">{productDetails.title}</Typography>
        <Typography level="body-sm">
          ${parseFloat(productDetails.price).toFixed(2)}
        </Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: "md" }}
          >
            <Link to={`${productDetails.id}`}>View</Link>
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: "md" }}
          >
            Category: {productDetails.category}
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
