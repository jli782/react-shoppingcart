import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

import ProductCard from "../components/ProductCard";
import { TextField, Typography } from "@mui/material";
import useFetchProductData from "../components/useFetchProductData";
import { useLoaderData, Form } from "react-router-dom";

export async function loader({ request }) {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const products = await res.json();
    return products;
  } catch (err) {
    console.error(err);
  }
}

export default function Products() {
  const { products, error, loading } = useFetchProductData();

  const _products = useLoaderData();

  const [search, setSearch] = useState("");

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
        <>
          <TextField
            id="outlined-controlled"
            label="Search Products"
            value={search}
            onInput={(e) => {
              setSearch(e.target.value);
            }}
            size="small"
            sx={{ marginY: "0.5rem" }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchSharpIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {search.length > 0 &&
              _products
                .filter((item) =>
                  item.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((product) => (
                  <Grid key={product.title} size={{ xs: 12, sm: 4, md: 4 }}>
                    <ProductCard productDetails={product}>
                      {product.title + "1"}
                    </ProductCard>
                  </Grid>
                ))}
            {!search.length &&
              _products.map((product) => (
                <Grid key={product.title} size={{ xs: 12, sm: 4, md: 4 }}>
                  <ProductCard productDetails={product}>
                    {product.title + "1"}
                  </ProductCard>
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </Box>
  );
}
