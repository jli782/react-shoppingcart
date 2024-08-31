import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import ProductCard from "../components/ProductCard";
import { Typography } from "@mui/material";
import useFetchProductData from "../components/useFetchProductData";

export default function Products() {
  const { products, error, loading } = useFetchProductData();
  return (
    <Box sx={{ flexGrow: 1, margin: "1.5rem" }}>
      {loading && (
        <Typography
          sx={{ display: "block", textAlign: "center", margin: "0.5rem" }}
        >
          <i>Loading Products ...</i>
        </Typography>
      )}
      {error ? (
        <Typography
          sx={{ display: "block", textAlign: "center", margin: "0.5rem" }}
        >
          <i>No Products for Sale.</i>
        </Typography>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product) => (
            <Grid key={product.title} size={{ xs: 12, sm: 4, md: 4 }}>
              <ProductCard productDetails={product}>
                {product.title + "1"}
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
