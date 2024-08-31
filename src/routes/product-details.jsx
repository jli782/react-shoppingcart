import Grid from "@mui/material/Grid2";
import { Box, Button, Paper, Typography, styled } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import NumberInput from "../components/QuantityInput";

import { useSearchParams, useParams } from "react-router-dom";

import NumInput from "../components/NumInput";
import useFetchProductData from "../components/useFetchProductData";
import { ShoppingCartContext } from "../components/ShoppingCartContext";

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

  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  const handleShoppingCart = (e) => {
    let addedProduct = null;

    if (shoppingCart.length > 0)
      addedProduct = shoppingCart.find((item) => item.id === product?.id);

    if (addedProduct) {
      let newShoppingCart = [...shoppingCart];

      setShoppingCart(
        newShoppingCart.map((item) => {
          if (item.id === product?.id)
            return {
              ...product,
              quantity: parseInt(item.quantity) + parseInt(quantity),
            };
          return item;
        })
      );
    } else {
      setShoppingCart([...shoppingCart, { ...product, quantity: quantity }]);
    }
  };

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

  /*   const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    // ...theme.applyStyles("dark", {
    //   backgroundColor: "#1A2027",
    // }),
  })); */

  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: "1.5rem" }}>
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
              <Typography
                variant="h4"
                sx={{ display: "block", textAlign: "center", margin: "auto" }}
              >
                {product.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{ display: "block", textAlign: "center", margin: "auto" }}
              >
                <b>Pricing: </b>${parseFloat(product.price).toFixed(2)}
              </Typography>
              <Typography
                sx={{
                  display: "block",
                  textAlign: "center",
                  marginY: "0.5rem",
                  marginX: "auto",
                }}
              >
                <b>Categories:</b> {product.category}
              </Typography>
              <Typography
                sx={{
                  display: "block",
                  textAlign: "center",
                  marginY: "0.5rem",
                  marginX: "auto",
                }}
              >
                {product.description}
              </Typography>
              <Typography
                sx={{
                  display: "block",
                  textAlign: "center",
                  marginY: "0.5rem",
                  marginX: "auto",
                }}
              >
                <NumInput
                  min={0}
                  quantity={{ quantity: quantity, setQuantity: setQuantity }}
                />
              </Typography>
              <Typography
                sx={{
                  display: "block",
                  textAlign: "center",
                  marginY: "0.5rem",
                  marginX: "auto",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#9e9e9e" }}
                  onClick={handleShoppingCart}
                >
                  Add to Cart
                </Button>
              </Typography>
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
                alt={product.title + " image"}
              ></img>
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
}
