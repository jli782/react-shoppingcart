import Grid from "@mui/material/Grid2";
import { Box, Button, Paper, Typography, styled } from "@mui/material";
import { useState, useEffect } from "react";
import NumberInput from "../components/QuantityInput";

import { useSearchParams, useParams } from "react-router-dom";

import NumInput from "../components/NumInput";
import useFetchProductData from "../components/useFetchProductData";

export default function ProductDetails() {
  /*   const product = {
    id: 1,
    title: "A sample product",
    price: "$ 99.99",
    category: "Samples",
    description: "A sample description of the product.",
    image: "https://i.imgur.com/nEXMMYa.jpeg",
    quantity: 1,
  }; */
  // const params = useParams();
  // const { products, error, loading } = useFetchProductData();
  // const product = products.find((product) => product.id === params.productId);
  // console.log(`product: ${product?.title} `, ` paramsId `, params.productId);

  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    let ignore = true;
    console.log(`paramsId `, params.productId);
    if (ignore) {
      fetch(`https://fakestoreapi.com/products/${params.productId}`)
        .then((res) => {
          if (res.status >= 400)
            throw new Error(
              `Ooops! Something went wrong while fetching for product ${params.productId}`
            );
          return res.json();
        })
        .then((json) => /* console.log(json) */ setProduct(json))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }

    return () => (ignore = !ignore);
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    // ...theme.applyStyles("dark", {
    //   backgroundColor: "#1A2027",
    // }),
  }));

  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {loading ? (
          <Typography
            sx={{ display: "block", textAlign: "center", margin: "0.5rem" }}
          >
            <i>Loading Product {params.productId} ...</i>
          </Typography>
        ) : error ? (
          <Typography
            sx={{ display: "block", textAlign: "center", margin: "0.5rem" }}
          >
            <i>Product {params.productId} Not Found.</i>
          </Typography>
        ) : (
          <Grid container spacing={2}>
            <Grid size={6}>
              <Item>size=6</Item>
              <Item>
                <h1>{product.title}</h1>
              </Item>
              <Item>
                <h2>
                  <b>Pricing: </b>${parseFloat(product.price).toFixed(2)}
                </h2>
              </Item>
              <Item>
                <b>Categories:</b> {product.category}
              </Item>
              <Item>{product.description}</Item>
              <Item>
                {/* <NumberInput
                aria-label="Quantity Input"
                min={0}
                onChange={(e, val) => {
                  console.log(`${e.type} event: the new value is ${val}`);
                  setQuantity((val) => val);
                }}
              /> */}
                <NumInput min={0} />
              </Item>
              {/*               <b>Quantity: </b>
              <input
                min={0}
                value={quantity}
                // defaultValue={quantity > 0 ? quantity : product.quantity}
                type="number"
                onChange={(e, val) => {
                  console.log(`val ${val}, ${e.target.value}`);
                  console.log(`quantity ${quantity}`);
                  const value = e.target.value;
                  setQuantity(value);
                }}
              />
 */}
              <Item>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#9e9e9e" }}
                  // onClick
                >
                  Add to Cart
                </Button>
              </Item>
            </Grid>
            <Grid size={6}>
              {/* <Item>size=6</Item> */}
              <img
                src={product.image}
                style={{
                  maxWidth: 350,
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                  borderRadius: 20,
                  // width: "75%",
                }}
              ></img>
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
}
