import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let ignore = false;

    if (!ignore)
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => /* console.log(data) */ setProducts(data));

    return () => {
      ignore = true;
    };
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
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
    </Box>
  );
}
