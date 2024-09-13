import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Rating from "@mui/material/Rating";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export default function ProductCard({ productDetails }) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 320, minHeight: 305 }}>
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
        <Typography level="body-sm" sx={{ fontWeight: "bold" }}>
          ${parseFloat(productDetails.price).toFixed(2)}
        </Typography>
        <Typography
          level="body-xs"
          textColor="text.secondary"
          sx={{ fontWeight: "md", display: "inline-flex" }}
        >
          Rating:&nbsp;
          <Rating
            name="read-only"
            value={productDetails.rating.rate}
            readOnly
            size="small"
          />
          &nbsp;{productDetails.rating.rate} ({productDetails.rating.count})
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

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

ProductCard.defaultProps = {
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  category: "sample category",
  price: 1.0,
  description: "sample description",
  title: "sample product title",
  id: 21,
};
