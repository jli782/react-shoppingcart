import Grid from "@mui/material/Grid2";
import { Alert, Box, Button, IconButton, Typography } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import NumberInput from "../components/QuantityInput";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";

import { useLoaderData, useParams } from "react-router-dom";

import NumInput from "../components/NumInput";
import { ShoppingCartContext } from "../components/ShoppingCartContext";

export async function loader({ params }) {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${params.productId}`
    );

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const product = await res.json();
    return product;
  } catch (err) {
    console.error(err);
  }
}

export default function ProductDetails() {
  const _product = useLoaderData();
  console.log(_product, `_product`);

  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  const handleShoppingCart = (e) => {
    let addedProduct = null;
    console.log(quantity, ` handlingShoppingCart`);
    if (shoppingCart.length > 0)
      addedProduct = shoppingCart.find((item) => item.id === product?.id);

    if (quantity > 0) {
      if (addedProduct) {
        let newShoppingCart = [...shoppingCart];

        setShoppingCart(
          newShoppingCart.map((item) => {
            if (item.id === product?.id)
              return {
                ...product,
                quantity: /* parseInt(item.quantity) + */ parseInt(quantity),
              };
            return item;
          })
        );
      } else {
        setShoppingCart([...shoppingCart, { ...product, quantity: quantity }]);
      }
    }
    setAdded(true);
  };

  const [product, setProduct] = useState(null);
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

  const [quantity, setQuantity] = useState(
    shoppingCart.find((item) => item.id === parseInt(params.productId))
      ?.quantity || 0
  );

  console.log(product, `product`);

  const [added, setAdded] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: "1.5rem" }}>
        {added && quantity > 0 && (
          // <Typography
          //   sx={{
          //     display: "block",
          //     textAlign: "center",
          //     margin: "0.5rem",
          //   }}
          // >
          <Collapse in={added}>
            <Alert
              icon={<CheckIcon fontSize="inherit" />}
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAdded(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Product {_product.id} added successfully to shopping cart!
            </Alert>
          </Collapse>
          // </Typography>
        )}
        {added && quantity <= 0 && (
          // <Typography
          //   sx={{
          //     display: "block",
          //     textAlign: "center",
          //     margin: "0.5rem",
          //   }}
          // >
          <Collapse in={added}>
            <Alert
              icon={<CheckIcon fontSize="inherit" />}
              severity="warning"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAdded(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Product quantity must not be 0!
            </Alert>
          </Collapse>
          // </Typography>
        )}
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
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
              <Typography
                variant="h4"
                sx={{ display: "block", textAlign: "center", margin: "auto" }}
              >
                {_product.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{ display: "block", textAlign: "center", margin: "auto" }}
              >
                <b>Pricing: </b>${parseFloat(_product.price).toFixed(2)}
              </Typography>
              <Typography
                sx={{
                  display: "block",
                  textAlign: "center",
                  marginY: "0.5rem",
                  marginX: "auto",
                }}
              >
                <b>Categories:</b> {_product.category}
              </Typography>
              <Typography
                sx={{
                  display: "block",
                  textAlign: "center",
                  marginY: "0.5rem",
                  marginX: "auto",
                }}
              >
                {_product.description}
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
                  quantity={{
                    quantity: quantity,
                    setQuantity: setQuantity,
                  }}
                  setAdded={setAdded}
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
                  sx={{
                    backgroundColor: "#9e9e9e",
                    ":hover": { backgroundColor: "#424242" },
                  }}
                  onClick={handleShoppingCart}
                >
                  Add to Cart
                </Button>
              </Typography>
            </Grid>
            <Grid size={6}>
              {/* <Item>size=6</Item> */}
              <img
                src={_product.image}
                style={{
                  maxWidth: 350 /* 300 */,
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                  borderRadius: 20,
                  // width: "75%",
                }}
                alt={_product.title + " image"}
                className="shopping-image"
              ></img>
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
}
