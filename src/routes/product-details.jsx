import Grid from "@mui/material/Grid2";
import { Box, Button, Paper, styled } from "@mui/material";
import { useState } from "react";
import NumberInput from "../components/QuantityInput";
import NumInput from "../components/NumInput";

export default function ProductDetails() {
  const product = {
    id: 1,
    title: "A sample product",
    price: "$ 99.99",
    category: "Samples",
    description: "A sample description of the product.",
    image: "https://i.imgur.com/nEXMMYa.jpeg",
    quantity: 1,
  };

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
        <Grid container spacing={2}>
          <Grid size={6}>
            <Item>size=6</Item>
            <Item>
              <h1>{product.title}</h1>
            </Item>
            <Item>
              <h2>
                <b>Pricing: </b>
                {product.price}
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
                onClick
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
      </Box>
    </>
  );
}
