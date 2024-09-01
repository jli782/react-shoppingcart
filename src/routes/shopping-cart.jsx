import { useContext, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Alert, Box, Collapse, IconButton, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import ShoppingCartCard from "../components/ShoppingCartCard";
import { ShoppingCartContext } from "../components/ShoppingCartContext";

export default function ShoppingCart() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

  const [deletingProduct, setDeletingProduct] = useState(null);

  const onDeleteHandler = (e) => {
    console.log(e.target.name, `e.target`);
    setShoppingCart(
      shoppingCart.filter((item) => item.id !== parseInt(e.target.name))
    );
    setDeletingProduct(e.target.name);
  };
  return (
    <Box sx={{ flexGrow: 1, margin: "1.5rem" }}>
      <Typography
        variant="h3"
        sx={{ display: "block", textAlign: "center", margin: "0.5rem" }}
      >
        Shopping Cart List
      </Typography>
      {deletingProduct && (
        <Collapse in={deletingProduct}>
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setDeletingProduct(null);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Product {deletingProduct} deleted successfully from shopping cart!
          </Alert>
        </Collapse>
      )}
      {!shoppingCart && (
        <Grid container>
          <Typography
            variant="h6"
            sx={{ display: "block", textAlign: "center", margin: "0.5rem" }}
          >
            Loading shopping cart items ...
          </Typography>
        </Grid>
      )}
      <Grid
        container
        /*         spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }} */
      >
        {shoppingCart.length > 0 ? (
          shoppingCart.map((product) => (
            <Grid key={product.title} size={{ xs: 12, sm: 12, md: 12 }}>
              <ShoppingCartCard
                productDetails={product}
                handleDelete={onDeleteHandler}
              ></ShoppingCartCard>
            </Grid>
          ))
        ) : (
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <Typography
              variant="h6"
              sx={{ display: "block", textAlign: "center", margin: "0.5rem" }}
            >
              Currently 0 items added to shopping cart.
            </Typography>
          </Grid>
        )}
        <Grid size={{ xs: 12, sm: 12, md: 12 }} sx={{ textAlign: "right" }}>
          <Typography variant="h6" size={{ xs: 4, sm: 4, md: 12 }}>
            <b>Total: </b>
            {shoppingCart.length > 0
              ? "$" +
                shoppingCart
                  .reduce(
                    (acc, currItem) => currItem.quantity * currItem.price + acc,
                    0
                  )
                  .toFixed(2)
              : "N/A"}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
